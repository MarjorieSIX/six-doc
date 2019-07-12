const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const handlebars    = require('gulp-compile-handlebars');
const rename        = require('gulp-rename');
const concat        = require('gulp-concat');
const uglify 	      = require('gulp-uglify');
const preprocess    = require('gulp-preprocess');
const svg           = require('gulp-svgstore');
const svgSprite     = require('gulp-svg-sprite');
//const data          = require('gulp-data');
//const json          = require('gulp-data-json');
//const through       = require('through2');

const autoprefixerOptions = {
  // test on https://browserl.ist/
  browsers: ['last 1 version', 'Safari 9', 'Safari 10', 'Safari 11', 'ie >= 11'],
  grid: false,
  supports: true
};

const paths = {
  icons: {
    // src: './src/assets/icons/**/*.svg',

    srcAll: './src/assets/icons/**/*.svg',
    
    /*srcFilledActions: './src/assets/icons/filled/actions/*.svg',
    srcFilledAlerts: './src/assets/icons/filled/alerts/*.svg',
    srcFilledContent: './src/assets/icons/filled/content/*.svg',
    srcFilledNavigation: './src/assets/icons/filled/navigation/*.svg',
    srcFilledProducts: './src/assets/icons/filled/products/*.svg',
    
    srcOutlinedActions: './src/assets/icons/outlined/actions/*.svg',
    srcOutlinedAlerts: './src/assets/icons/outlined/alerts/*.svg',
    srcOutlinedContent: './src/assets/icons/outlined/content/*.svg',
    srcOutlinedNavigation: './src/assets/icons/outlined/navigation/*.svg',
    srcOutlinedProducts: './src/assets/icons/outlined/products/*.svg',

    srcSocialNetworks: './src/assets/icons/filled/social-networks/*.svg',*/

    dest: './build/assets/images/'
  },
  styles: {
    components: {
      src: './build/components/**/*.scss',
      dest: './build/components/'
    },
    website: {
      src: './src/assets/scss/**/*.scss',
      dest: './build/css/'
    },
  },
  scripts: {
    src: './src/assets/js/*.js',
    dest: './build/js'
  },
  templates: {
    src: './src/templates/**/*.hbs',
    dest: './build/',
    batch: './src/partials',
    data: './src/datas'
  }
};

function svgSpriteAll() {
  return gulp
  .src(paths.icons.srcAll) // where my svg files are
  .pipe(svg())
  .pipe(gulp.dest(paths.icons.dest))
}

function svgSpriteCustom() {
  return gulp
  .src(paths.icons.srcAll) // where my svg files are
  .pipe(svgSprite())
  .pipe(gulp.dest(paths.icons.dest))
}


// Compile Scss from Components to CSS
function styleComponents() {
  return gulp
  .src(paths.styles.components.src, { sourcemaps: true }) // where is my scss file
  .pipe(sass().on('error', sass.logError)) // sass compiler
  .pipe(autoprefixer(autoprefixerOptions)) // add prefixer
  .pipe(gulp.dest(paths.styles.components.dest)) // where to save the css file
  .pipe(browserSync.stream()) // stream to all browsers
}

// Compile scss from the documentation website to css
function styleWebsite() {
  return gulp
  .src(paths.styles.website.src, { sourcemaps: true }) // where is my scss file
  .pipe(preprocess({context: { NODE_PATH: '$NODE_PATH:/node_modules'}})) //To set environment variables in-line
  .pipe(sass().on('error', sass.logError)) // sass compiler
  .pipe(autoprefixer(autoprefixerOptions)) // add prefixer
  .pipe(gulp.dest(paths.styles.website.dest)) // where to save the css file
  .pipe(browserSync.stream()) // stream to all browsers
}

function copyFonts() {
  return gulp
  .src('./src/assets/fonts/*.{ttf,woff,eof,woff2}')
  .pipe(gulp.dest('./build/assets/fonts'))
}

function copyImages() {
  return gulp
  .src('./src/assets/img/**/*.{svg,png,jpg}')
  .pipe(gulp.dest('./build/assets/images'))
}

// Minify all js scripts except for the components
function scripts() {
  return gulp
  .src(paths.scripts.src, {
    sourcemaps: true
  })
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(gulp.dest(paths.scripts.dest));
}

// Compile handlebars templates into html
function templates() {
  return gulp
  .src(paths.templates.src)
  .pipe(handlebars(null, 
    {
      ignorePartials: true, // ignores any unknown partials. Useful if you only want to handle part of the file
      batch: [paths.templates.batch],
      data: [paths.templates.data]
    }
  ))
  .pipe(rename({
    extname: '.html',
  }))
  .pipe(gulp.dest(paths.templates.dest))
  .pipe(browserSync.stream());
}

/*function inject() {
  return gulp
    .src('./src/build/** /*.html')
    .pipe(data((file) => {
        return require(file.path.replace('.html', '.json'));
    }))
    .pipe(frontMatter({
        property: 'data.frontMatter'
    }))
    .pipe(hb().data('./assets/data/** /*.js'))
    .pipe(gulp.dest('./app'));
}*/

/*
function i18n() {
  return gulp
    .src('.data/*.json')
    .pipe(through.obj((file, enc, cb) => {
      const locale = file.stem;
      const data = {
          locale: locale,
          i18n: JSON.parse(file.contents.toString())
    };
    gulp
      .src('./src/build/** /*.html')
      .pipe(hb().data(data))
      .pipe(gulp.dest('./dist/' + locale))
      .on('error', cb)
      .on('end', cb);
    }));
}
*/

function watch() {
  browserSync.init({
    server: {
      baseDir: ['./', './build/']
    }
  });
  gulp.watch('./src/assets/fonts/*.{ttf,woff,eof,woff2}', copyFonts);
  gulp.watch('./src/assets/img/**/*.{jpg,svg,png}', copyImages);
  //gulp.watch(paths.icons.src, svgSprite);
  gulp.watch(paths.styles.components.src, styleComponents); // run the style function if there's a change in any .scss file
  gulp.watch(paths.styles.website.src, styleWebsite); // run the style function if there's a change in any .scss file
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.templates.src, templates).on('change', browserSync.reload);
  //gulp.watch('./src/**/*.html').on('change', browserSync.reload);
  gulp.watch('./src/**/*.js').on('change', browserSync.reload);
}


var build = gulp.parallel(copyFonts, copyImages, styleComponents, styleWebsite, scripts, templates, watch);

gulp.task(build);
gulp.task('default', build);

exports.svgSpriteAll = svgSpriteAll;
exports.svgSpriteCustom = svgSpriteCustom;
exports.copyFonts = copyFonts;
exports.copyImages = copyImages;
exports.styleWebsite = styleWebsite;
exports.styleComponents = styleComponents;
exports.scripts = scripts;
exports.templates = templates;
//exports.inject = inject;
//exports.i18n = i18n;
exports.watch = watch;