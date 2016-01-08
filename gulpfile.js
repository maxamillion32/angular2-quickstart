var gulp = require("gulp");
var gutil = require("gulp-util");
var babel = require("gulp-babel");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('build', function() {
	return browserify({ entries: 'app/app.component.js', extensions: ['.js'], debug: true})
			.transform(babelify)
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('dist'));
});

gulp.task('babel', function() {
	return gulp.src(['app/*.js'])
	.pipe(sourcemaps.init())
	    .pipe(babel())
	.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dest/'));
});

gulp.task('watch' , function() {
	gulp.watch('app/*' , ['babel']);
});