var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var csscomb = require('gulp-csscomb');
var uglifycss = require('gulp-uglifycss');
var uglyfly = require('gulp-uglyfly');
var htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');

//1.less -> css 编译  合并  压缩
gulp.task("style",function(){
	gulp.src("src1/css/product.css")//入口文件		要处理哪里的文件
	.pipe(autoprefixer({
    	browsers: ['Android 2.3',
    	'Android >= 4',
    	'Chrome >= 20',
    	'Firefox >= 24', // Firefox 24 is the latest ESR 
    	'Explorer >= 8',
    	'iOS >= 6',
    	'Opera >= 12',
    	'Safari >= 6'],
        cascade: false
    }))
	.pipe(csscomb())
	.pipe(uglifycss())
	.pipe(gulp.dest("dest1/css"))//通过pipe管道	指定出口文件		处理完的文件放到哪儿
})

gulp.task("script",function(){
	gulp.src(["src1/js/iscroll.js"])
    	.pipe(uglyfly())
   		.pipe(gulp.dest('dest1/js'))
})

gulp.task("html",function(){
	gulp.src("src1/solution.html")
		.pipe(htmlmin({
		    collapseWhitespace: true,
		    removeComments: true
	    }))
		.pipe(gulp.dest('dest1'))
})

gulp.task('default', () => {
    return gulp.src('src1/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src1/js/es5'));
});

gulp.task('image',function () {  
    gulp.src('src1/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest1/img'))

})