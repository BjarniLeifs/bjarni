'use strict';
const babel      = require('gulp-babel'),
			concat     = require('gulp-concat'),
			cssmin     = require('gulp-cssmin'),
			jshint     = require('gulp-jshint'),
			less       = require('gulp-less'),
			livereload = require('gulp-livereload'),
			rename     = require('gulp-rename'),
			uglifyjs   = require('gulp-uglify'),
			gulp       = require('gulp');

gulp.task('js', () => {
	livereload.listen();
	gulp.watch('rafndal/js/*.js', () => {
		gulp.src('rafndal/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(babel({ presets : [ 'es2015' ]}))
		//.pipe(concat('all.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('public/min/js'))
		.pipe(livereload());
	});
});

gulp.task('less', () => {
	livereload.listen();
	gulp.watch('rafndal/less/*.less', () => {
		gulp.src('rafndal/less/*.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(concat('all.min.css'))
		.pipe(gulp.dest('public/min/css'))
		.pipe(livereload());
	});
});

gulp.task('html', () => {
	livereload.listen();
	gulp.watch('public/views/*.html', () => {
		gulp.src('public/views/*.html')
		.pipe(livereload());
	});
});

gulp.task('run', [ 'js', 'less', 'html' ]);

