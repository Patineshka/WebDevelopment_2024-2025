const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function serve(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("style.css").on('change', browserSync.reload);
    gulp.watch("script.js").on('change', browserSync.reload);
    
    done();
}

exports.serve = serve;
