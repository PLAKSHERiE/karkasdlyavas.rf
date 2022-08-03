import gulp from 'gulp';
import config from './gulp/config.js';
import clean from './gulp/tasks/clean.js';
import server from './gulp/tasks/server.js';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts.js';
import { pugBuild, pugWatch } from './gulp/tasks/pug.js';
import { stylesBuild, stylesWatch } from './gulp/tasks/styles.js';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets.js';
import { imagesBuild, imagesWatch } from './gulp/tasks/images.js';

config.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    scriptsBuild,
    pugBuild,
    assetsBuild,
    stylesBuild,
    imagesBuild,
  ),
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    scriptsWatch,
    pugWatch,
    assetsWatch,
    stylesWatch,
    imagesWatch,
  ),
);
