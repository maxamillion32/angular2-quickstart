var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var sourcemaps = require("gulp-sourcemaps");
var watchify = require("watchify");
var buffer = require("vinyl-buffer");


function build(watch) {
	var bundler = watchify(browserify('./app/boot.js',
							{debug: true}).transform(babelify));
	function rebundle() {
		bundler.bundle()
			.on('error', function(err) { console.error(err); this.emit('end');})
			.pipe(source('build.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true}))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./build'));	
	}
		

	if (watch) {
 		bundler.on('update', function() {
      		console.log('-> bundling...');
      		rebundle();
    	});	
    }

    rebundle();					 
}

function watch() {
	build(true);
}

gulp.task('build' , function() {
	build();
});

gulp.task('watch', function() {
	watch();
})