var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var ghPages = require('gulp-gh-pages');

// gulp sass

gulp.task('sass', function() {
	var plugins = [
        autoprefixer({browsers: ['last 5 version']})
    ];
    return gulp.src('./sourse/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
    gulp.watch('./sourse/sass/**/*.scss', ['sass']);
});

gulp.task('deploy', function() {
  return gulp.src('./public/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['sass', 'watch']);