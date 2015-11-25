module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ["babelify", {"presets":["es2015","react"]}]
               ]
            },
            files: {
               // if the source file has an extension of es6 then
               // we change the name of the source file accordingly.
               // The result file's extension is always .js
               "./dist/module.js": ["./app/**/*.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["./app/**/*.js"],
            tasks: ["browserify"]
         }
      },

   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["browserify","watch"]);
   grunt.registerTask("build", ["browserify"]);
};