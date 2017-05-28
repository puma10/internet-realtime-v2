// Basic Gulp File
//
var gulp = require('gulp'),
   sass = require('gulp-sass'),
   autoprefix = require('gulp-autoprefixer'),
   notify = require("gulp-notify"),
   bower = require('gulp-bower'),
   //webserver = require('gulp-webserver'),
   minify = require('gulp-minifier'),
   rename = require("gulp-rename"),
   concat = require('gulp-concat'),
   htmlmin = require('gulp-html-minifier'),
   uglify = require('gulp-uglify'),
   minify = require('gulp-minify-css'),
   jade = require('gulp-jade'),
   /*imagemin = require('gulp-imagemin')*/
   image = require('gulp-image'),
   browserSync = require('browser-sync').create();

var config = {
   sassPath: './source/sass'
}

gulp.task('bower', function() {
   return bower()
       .pipe(gulp.dest(config.bowerDir))
})


//js files
gulp.task('js', function() {
  return gulp.src(['./js/jquery.min.js',
                   './js/lodash.min.js',
                   './js/slider.js',
                   './js/script.min.js'])
    .pipe(concat('bundle.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./source/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'))
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("source/sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([config.sassPath + '/fonts.css', config.sassPath + '/style.scss',config.sassPath + '/mobile.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(concat('style.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minify({
             minify: true,
             collapseWhitespace: true,
             conservativeCollapse: true,
             minifyCSS: true
         }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

//image-min
gulp.task('images', function () {
    return gulp.src(['./images/*.png', '!images/*.db'])
        .pipe(image())
        .pipe(gulp.dest('./images/min'));
});

gulp.task('minify-html', function() {
  gulp.src('./*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});


// Rerun the task when a file changes
gulp.task('watch', function() {
   gulp.watch(config.sassPath + '/*.scss', ['css']);
});

gulp.task('default', ['images', 'js', 'templates', 'serve']);
