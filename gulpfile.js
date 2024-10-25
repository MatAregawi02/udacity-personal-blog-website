//adapted from chatGPT for preprocessing purposes

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass1() {
    return gulp.src('scss-main/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('main-css'));
}




function watchFiles() {
    gulp.watch('scss-main/**/*.scss', compileSass1);
   
}

exports.default = gulp.series(compileSass1, watchFiles);
//dart-sass must be used next time