const { parallel, watch, src, dest } = require('gulp');
const sass = require('gulp-sass');
const sass_compiler = require('node-sass');
const sassGlob = require('gulp-sass-glob');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleancss = require('gulp-clean-css');
const autopref = require('gulp-autoprefixer');
const bsync = require('browser-sync').create();
const responsive = require('gulp-responsive');
const newer = require('gulp-newer');

const SASS_WATCH = ["src/sass/**/*.scss", "src/sass/**/*.sass"];
const SASS_COMPILE = "src/sass/main.sass";
const JS_WATCH = "src/js/**/*.js";
const JS_COMPILE = JS_WATCH;
const HTML_WATCH = "index.html";

sass.compiler = sass_compiler;

function bsyncInit() {
    bsync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
}

function bundleStyles() {
    return src(SASS_COMPILE)
        .pipe(sassGlob())
        .pipe(sass().on("error", sass.logError))
        .pipe(src('fonts/*.css'))
        .pipe(concat("bundle.css"))
        .pipe(autopref())
        .pipe(dest("./"))
        .pipe(bsync.stream());
}

function bundleJs() {
    return src(JS_COMPILE)
        .pipe(concat("bundle.js"))
        .pipe(babel({
			presets: ['@babel/preset-env']
		}))
        .pipe(dest("./"))
        .pipe(bsync.stream());
}

let size_sm = 450,
    size_md = 1000,
    size_lg = 1440;
function optimizeImages() {
    return src('img/src/*')
        //.pipe(newer('img/dist/*'))
        .pipe(responsive({
            '*--sm*': [
                {
                    width: size_sm,
                    format: 'webp',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        imageName = imageNameMatches[1];
                        return {
                            basename: imageName,
                            suffix: '-sm'
                        }
                    }
                },
                {
                    width: size_sm,
                    format: 'jpg',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        imageName = imageNameMatches[1];
                        return {
                            basename: imageName,
                            suffix: '-sm'
                        }
                    }
                }
            ],
            '*--md*': [
                {
                    width: size_md,
                    format: 'webp',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        imageName = imageNameMatches[1];
                        return {
                            basename: imageName,
                            suffix: '-md'
                        }
                    }
                },
                {
                    width: size_md,
                    format: 'jpg',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        imageName = imageNameMatches[1];
                        return {
                            basename: imageName,
                            suffix: '-md'
                        }
                    }
                }
            ],
            '*--lg*': [
                {
                    width: size_lg,
                    format: 'webp',
                    max: true,
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        imageName = imageNameMatches[1];
                        return {
                            basename: imageName,
                            suffix: '-lg'
                        }
                    }
                },
                {
                    width: size_lg,
                    format: 'jpg',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        imageName = imageNameMatches[1];
                        return {
                            basename: imageName,
                            suffix: '-lg'
                        }
                    }
                }
            ],
            '*.{jpg,jpeg}': [
                {
                    format: 'webp',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        let imageName;
                        if (!imageNameMatches) {
                            imageName = path.basename;
                        } else {
                            imageName = imageNameMatches[1];
                        }
                        return {
                            basename: imageName,
                            suffix: '-orig'
                        }
                    }
                },
                {
                    format: 'jpg',
                    quality: 100,
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        let imageName;
                        if (!imageNameMatches) {
                            imageName = path.basename;
                        } else {
                            imageName = imageNameMatches[1];
                        }
                        return {
                            basename: imageName,
                            suffix: '-orig'
                        }
                    }
                }
            ],
            '*.png': [
                {
                    format: 'webp',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        let imageName;
                        if (!imageNameMatches) {
                            imageName = path.basename;
                        } else {
                            imageName = imageNameMatches[1];
                        }
                        return {
                            basename: imageName,
                            suffix: '-orig'
                        }
                    }
                },
                {
                    format: 'png',
                    rename: function(path) {
                        let imageNameMatches = path.basename.match(/(.*?)--/);
                        let imageName;
                        if (!imageNameMatches) {
                            imageName = path.basename;
                        } else {
                            imageName = imageNameMatches[1];
                        }
                        return {
                            basename: imageName,
                            suffix: '-orig'
                        }
                    }
                }
            ]
        }, {errorOnEnlargement: false})).on('error', (e) => {console.log(e)})
        .pipe(dest('img/dist/'));

}

function watchAll() {
    bsyncInit();

    options = {
        ignoreInitial: false
    }
    watch(SASS_WATCH, options, bundleStyles);
    watch(JS_WATCH, options, bundleJs);
    watch(HTML_WATCH, options, (done) => {bsync.reload(); done()});
}


exports.default = watchAll;
exports.img = optimizeImages;
exports.prod = parallel(
    function() {
        return src(SASS_COMPILE)
            .pipe(sassGlob())
            .pipe(sass().on("error", sass.logError))
            .pipe(cleancss())
            .pipe(concat("bundle.min.css"))
            .pipe(autopref())
            .pipe(dest("./"));
    },
    function() {
        return src(JS_COMPILE)
            .pipe(concat("bundle.js"))
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(dest("./"));
    });
