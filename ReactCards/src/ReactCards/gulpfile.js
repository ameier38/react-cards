/// <binding BeforeBuild='default' />

var gulp = require('gulp');
var source = require('vinyl-source-stream2'); // Used to stream bundle for further handling, using stream2 because of error on stream
var browserify = require('browserify');
var reactify = require('reactify');
var project = require("./project.json");

var paths = {
    WEBROOT: "./" + project.webroot + "/",
    OUT: 'main.js',
    DEST: "./" + project.webroot + "/js",
    ENTRY_POINT: "./" + project.webroot + "/js/jsx/PageContainer.jsx"
};

gulp.task("browserify", function () {
    browserify({
        entries: [paths.ENTRY_POINT], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true // Gives us sourcemapping
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.DEST));
});

gulp.task("default", ["browserify"]);
