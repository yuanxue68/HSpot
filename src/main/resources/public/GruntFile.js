module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
          dev: {
              options: {
                  browserifyOptions: {
                      debug: true
                  },
                  transform: [
                    ["babelify", {"presets":["es2015","react"]}]
                  ]
              },
              files: {
                  "./../../../../target/classes/public/dist/bundle.js": "app/**/*.js"
              }
          }
      },
      watch: {
         scripts: {
            files: ["./app/**/*.js","GruntFile.js"],
            tasks: ["browserify"]
         },
         sass: {
            files: ["./style/**/*.scss"],
            tasks: ["sass"]
         }
      },
      sass: {
         dist: {
            files: [{
               "./dist/main.css": "./style/main.scss"
            }]
         }
      }

   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");
   grunt.loadNpmTasks("grunt-contrib-sass");

   grunt.registerTask("default", ["browserify","sass","watch"]);
   grunt.registerTask("build", ["browserify","sass"]);
};