var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('browserify',function(){
	return browserify({entries: "./app/main.js", debug:true})
		.transform('babelify', {presets: ['es2015','react']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./../../../../target/classes/public/dist/'));
});

gulp.task('sass', function(){
	gulp.src('./style/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./../../../../target/classes/public/dist/'));
})

gulp.task('watch', function(){
	gulp.watch('./app/**/*.js',['browserify']);
	gulp.watch('./style/**/*.scss',['sass']);
});

gulp.task('default', ['browserify','sass','watch']);