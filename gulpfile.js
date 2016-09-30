// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var cssmin=require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');

/*js检查任务*/
gulp.task('jshints', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
/*jade转换任务*/
gulp.task('templates',function(){
    gulp.src('./src/view/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/view'));
})

/*Sass转换任务*/
gulp.task('sass', function() {
    gulp.src('./src/sass/*.scss')
        .pipe(concat('all.scss'))
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rename('all.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'));
});

// 合并，压缩文件
gulp.task('scripts',['jshints'], function() {
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js'));
});

/*image照片压缩*/
gulp.task('imgmin',function(){
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
})

// 默认任务
gulp.task('default', function(){
    gulp.run( 'sass', 'scripts','templates','imgmin');
});

// 监听文件变化

gulp.watch([
    './src/js/*.js',
    './src/sass/*.scss',
    './src/view/*.jade'
], function(){
    gulp.run( 'default');
});
