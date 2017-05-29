# internet-realtime-v2

README v2.0 / 28 May 2017

# Internet Real Time Template v2

## Introduction
	Template for Internet Real Time project.

## Usage
  Page consist of blocks.<br/>
  Each block consist of items:<br/>
  <ul>
    <li>Logo</li>
    <li>Description ( Name of the company, block with running numbers and text)</li>
    <li>Share buttons</li>
  </ul>
     
  <h3>How to use "running number":</h3>
     Example:
     <code>data-count="19.48" data-roundup="true" class="block-data"</code>
     <h4>Attributes:</h4>
     <ul>
      <li><code>data-count=""</code> - add initial value</li>
      <li><code>data-roundup=""</code> - round up attribute takes 2 values: true or false. Rounding up to 2 digits after the decimal point</li>
     </ul>  
   <h3>How to use "share buttons":</h3>
      <p><code>div.sharethis-inline-share-buttons</code> - add in file "source/index.jade" block</p>
      <p>Share api works for socila media: twitter, facebook, gmail, gplus, linkedin.</p>
      <p>If you need to change the types of social media then all the changes should be provide in Sharethis api admin panel.</p>

## Installation
   All html and content changes for the page should be provide through file "source/index.jade" and compile in Gulp.
   Main file with stylesheets - "source/sass/style.scss"
    
## Technologies 
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>jQuery 2.1.4</li>
    <li>Flexbox</li>
    <li>Jade - compiler for html</li>
    <li>SCSS - preprocessor for css</li> 
    <li>Font Awesome</li> 
    <li>Sharethis - api for share buttons for social media</li> 
    <li>Gulp - setting up workflow</li>
    <li>Gulp: gulp-sass, gulp-autoprefixer, gulp-concat, gulp-minifier, gulp-bower, gulp-notify, gulp-rename, gulp-jade, gulp-image</li>
    <li>NPM</li>
  </ul>
    
