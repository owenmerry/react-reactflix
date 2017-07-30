/* file: gulpfile.js */

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    less = require('gulp-less'),
    babel = require('gulp-babel');
;




// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('build', ['build-css','build-js']);
gulp.task('buildbabel', ['build-browerify']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


/*## run css ##*/
gulp.task('build-css', function() {
  return gulp.src('css/mystyles.scss')
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(sass())
      //only minify if gulp is ran with '--type production'  
    .pipe(gutil.env.type === 'production' ? minifycss() : gutil.noop()) 
    .pipe(rename('stylesheet.css'))    
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('dist/'));
});

/*## run css ##*/
gulp.task('build-css-less', function() {
  return gulp.src('css/mystyles.less')
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(less())
      //only minify if gulp is ran with '--type production'  
    .pipe(gutil.env.type === 'production' ? minifycss() : gutil.noop()) 
    .pipe(rename('stylesheet.css'))    
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('dist/'));
});
 

/*## run javascript ##*/
gulp.task('build-js', function () {
  return browserify('js/myscript.js')
    .bundle()
    .pipe(source('scriptsheet.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-babel', function () {
    return gulp.src('js/myscript.jsx')
        .pipe(babel({
            presets: ["react", "es2015"]
        }))
        .pipe(gulp.dest('js/dist'));
}); 
 
gulp.task('build-browerify', ['build-babel'], function() {
    // Assumes a file has been transformed from
    // ./app/src/main.jsx to ./app/dist/main.js
    return browserify('js/dist/myscript.js')
        .bundle() 
        .on('error', gutil.log)
        .pipe(source('scriptsheet.js'))
        .pipe(gulp.dest('dist'))
});


/* updated watch task to include sass */

gulp.task('watch', function() {
 // gulp.watch('js/**/*.js', ['jshint']);
  gulp.watch('css/**/*.scss', ['build-css']);
  //gulp.watch('js/**/*.js', ['build-js']);
  gulp.watch('js/*.jsx', ['build-browerify']); 
});

