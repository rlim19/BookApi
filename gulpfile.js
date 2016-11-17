var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    gulpMocha = require("gulp-mocha"),
    env = require("gulp-env"),
    supertest = require("supertest");

gulp.task("default", function(){
  nodemon({
    script: "app.js",
    ext: "js",
    env: {
      PORT: 8001
    },
    ignore: ["./node_modules/**"]
  })
  .on("restart", function(){
    console.log("RESTARTING");
  })
});

gulp.task("test", function(){
  gulp.src("tests/*.js", {read: false})
      .pipe(gulpMocha({reporter: "nyan"}))

})
