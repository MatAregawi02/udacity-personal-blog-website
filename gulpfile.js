const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass1() {
    return gulp.src('scss-main/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('main-css'));
}

function compileSass2() {
    return gulp.src('scss-post/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('post-css'));
}


function watchFiles() {
    gulp.watch('scss-main/*.scss', compileSass1);
    gulp.watch('scss-main/*.scss', compileSass2);
}

exports.default = gulp.series(gulp.parallel(compileSass1, compileSass2), watchFiles);