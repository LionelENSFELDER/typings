const gulp = require('gulp');
const browserSync = require('browser-sync').create();


function server() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: 'index.html',
        },
        host: 'aboutme',
        https: false,
        port: 8001,
        scrollProportionally: false,
        directory: true
    });
};

function watch() {
    //gulp.watch("./src/sass/custom.scss").on('change', sassCompile, browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./*.css").on('change', browserSync.reload);
    gulp.watch("./*.js").on('change', browserSync.reload);
};

function log() {
    console.log("--Watch function is ready. Gang !");
};

module.exports = {
    default: gulp.parallel(server, watch, log)
};