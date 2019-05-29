// const { src, dest, watch, series, parallel }  = require('gulp');
const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const handlebars     = require('gulp-handlebars');
const wrap          = require('gulp-wrap');
const declare       = require('gulp-declare');
const concat        = require('gulp-concat');

var autoprefixerOptions = {
  // test on https://browserl.ist/
  browsers: ['last 1 version', 'Safari 9', 'Safari 10', 'Safari 11'], 
  grid: false,
  supports: true
};

// compile scss to css
// Components
var inputStyleComponents = './app/components/**/*.scss';
var outputStyleComponents = './app/components/'; // keeps the file in the component folder
function styleComponents() {
  return (
    gulp
      .src(inputStyleComponents) // where is my scss file
      .pipe(sass().on('error', sass.logError)) // sass compiler
      .pipe(autoprefixer(autoprefixerOptions)) // add prefixer
      .pipe(gulp.dest(outputStyleComponents)) // where to save the css file
      .pipe(browserSync.stream()) // strem to all browsers
  ); 
}

// Assets for the website
var inputStyleWebsite = './app/assets/scss/**/*.scss';
var outputStyleWebsite = './app/css';
function styleWebsite() {
  return (
    gulp
      .src(inputStyleWebsite) // where is my scss file
      .pipe(sass().on('error', sass.logError)) // sass compiler
      .pipe(autoprefixer(autoprefixerOptions)) // add prefixer
      .pipe(gulp.dest(outputStyleWebsite)) // where to save the css file
      .pipe(browserSync.stream()) // strem to all browsers
  ); 
}

// Handlebars templates
var inputHandlebarsTemplates = './app/documentation/**/*.hbs';
function handlebarsTemplates() {
  return (
    gulp
      .src(inputHandlebarsTemplates) // where is my scss file
      .pipe(handlebars())
      .pipe(wrap('Handlebars.template(<%= contents %>)'))
      .pipe(declare({
        namespace: 'MyApp.templates',
        noRedeclare: true, // Avoid duplicate declarations
      }))
      .pipe(concat('templates.js'))
      .pipe(gulp.dest('documentation/js/'))
  );
}
 
var inputHandlebarsPartials = './app/documentation/partials/*.hbs';
function handlebarsPartials() {
  return ( 
    gulp
      // Assume all partials start with an underscore
      // You could also put them in a folder such as source/templates/partials/*.hbs
      .src(inputHandlebarsPartials)
      .pipe(handlebars())
      .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
        imports: {
          processPartialName: function(fileName) {
            // Strip the extension and the underscore
            // Escape the output with JSON.stringify
            return JSON.stringify(path.basename(fileName, '.js').substr(1));
          }
        }
      }))
      .pipe(concat('partials.js'))
      .pipe(gulp.dest('documentation/js/'))
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './app/'
    }
  });
  gulp.watch(inputStyleComponents, styleComponents); // run the style function if there's a change in any .scss file
  gulp.watch(inputStyleWebsite, styleWebsite); // run the style function if there's a change in any .scss file
  gulp.watch('./app/**/*.html').on('change', browserSync.reload);
  gulp.watch('./app/**/*.js').on('change', browserSync.reload);
  gulp.watch(inputHandlebarsTemplates, handlebarsTemplates);
  gulp.watch(inputHandlebarsPartials, handlebarsPartials);
}

exports.styleWebsite = styleWebsite;
exports.styleComponents = styleComponents;
exports.handlebarsTemplates = handlebarsTemplates;
exports.handlebarsPartials = handlebarsPartials;
exports.watch = watch;