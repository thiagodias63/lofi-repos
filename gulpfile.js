"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")

sass.compiler = require("node-sass")

gulp.task("default", watch);

gulp.task("sass", compileSass);

function compileSass () {
    return gulp.src("scss/*.scss").pipe(sass().on('error', sass.logError)).pipe(gulp.dest("css"));
}

function watch() {
    return gulp.watch("scss/*scss", compileSass);
}