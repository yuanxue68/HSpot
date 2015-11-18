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
               "./src/main/public/dist/module.js": ["./src/main/public/app/**/*.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: ["./src/main/public/app/**/*.js"],
            tasks: ["browserify"]
         }
      },
      jshint: {
         all: ['Gruntfile.js', '../src/main/public/app/**/*.js']
         },
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks("grunt-contrib-jshint");

   grunt.registerTask("default", ["jshint","browserify","watch"]);
   grunt.registerTask("build", ["browserify"]);
};