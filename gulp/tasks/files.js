import gulp from "gulp";
import config from "../config.js";

const filesHandler = () => (
    gulp.src(`${config.src.files}/**/*`)
        .pipe(gulp.dest(config.dest.files))
);

const phpHandler = () => (
    gulp.src(`${config.src.php}/**/*`)
        .pipe(gulp.dest(config.dest.php))
);

export const filesBuild = gulp.parallel(filesHandler, phpHandler);

export const filesWatch = () => gulp.watch(`${config.src.files}/**/*`, filesHandler);
export const phpWatch = () => gulp.watch(`${config.src.php}/**/*`, phpHandler);
