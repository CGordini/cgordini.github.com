/*global module:false*/
module.exports = function(grunt) {

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Project settings
    appCfg: {
        // configurable paths
        webroot: 'app',
        src: 'app/!(bower_components)',

    },

    // Task configuration.
    jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            unused: true,
            boss: true,
            eqnull: true,
            globals: {
              jQuery: true
            }
          },
          gruntfile: {
            src: 'Gruntfile.js'
          },
          lib_test: {
            src: ['lib/**/*.js', 'test/**/*.js']
          }
    },
    watch: {
        js: {
            files: [
                '<%= appCfg.webroot %>/*.js',
                '<%= appCfg.src %>/**/*.js',
            ],
            tasks: ['newer:jshint:all', 'newer:jscs', 'karma:unit:run'],
            options: {
                livereload: true
            }
        },
        css: {
            files: [
                '<%= appCfg.webroot %>/*.css',
                '<%= appCfg.src %>/**/*.css'
            ],
            tasks: ['copy:css']
        },
        gruntfile: {
            files: '<%= jshint.gruntfile.src %>',
            tasks: ['jshint:gruntfile']
        },
        lib_test: {
            files: '<%= jshint.lib_test.src %>',
            tasks: ['jshint:lib_test']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= appCfg.webroot %>/*.html',
                '<%= appCfg.src %>/**/*.html',
                '.tmp/css/{,*/}*.css',
                '<%= appCfg.src %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    },
    connect: {
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            open: 'http://localhost:9000',
            base: [
                '.tmp',
                '<%= appCfg.webroot %>'
            ],
            livereload: 35729
        },
        // livereload: {
        //     options: {
        //         open: 'http://localhost:9000',
        //         base: [
        //             '.tmp',
        //             '<%= appCfg.webroot %>'
        //         ],
        //     }
        // }
    }


  });

    grunt.registerTask('serve', function() {
        grunt.task.run([
            //'clean:server',
            //'concurrent:server',
            //'configureProxies:server',
            'connect',
            'watch'
      ]);
    });

};
