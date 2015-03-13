module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

   var appSrc = [
        //bower things
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery-ui/ui/core.js',
        'bower_components/jquery-ui/ui/widget.js',
        'bower_components/jquery-ui/ui/mouse.js',
        'bower_components/jquery-ui/ui/draggable.js',

        'bower_components/angular/angular.js',
        'bower_components/angular-animate/angular-animate.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        // module config
        'app.js',
        'App/Controllers/**.js',
        'App/Directives/**/*.js',
        'App/generated/**/*.js',
        'App/Models/**/*.js',

    ];


  grunt.initConfig({
    bowerCfg: grunt.file.readJSON('bower.json'),
    pkg: grunt.file.readJSON('package.json'),

    // Project settings
    appCfg: {
        // configurable paths
        webroot: 'app',
        src: 'app/!(bower_components)',
        dist: 'dist',
        analysis: 'analysis',
        coverage: 'coverage',
        banner: '/*! <%= bowerCfg.name %> - v<%= bowerCfg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> - ' +
                '<%= bowerCfg.authors %> */'
    },

    clean: {
        dist: {
            files: [{
                dot: true,
                src: [
                    '.tmp',
                    '<%= appCfg.dist %>'
                ]
            }]
        },
        bower: '<%= appCfg.webroot %>/bower_components',
        up: {
            files: [{
                dot: true,
                src: [
                    '.tmp',
                ]
            }]
        },
    },
    concurrent: {
        options: {
            logConcurrentOutput: true
        },
        dist: [
            // 'imagemin',
            'copy:fonts',
            'copy:cssFonts',
            'copy:files',
            'copy:dist'
        ]
    },
    copy: {
        files: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= appCfg.webroot %>',
                dest: '<%= appCfg.dist %>',
                src: ['files/**/*']
            }]
        },
        fonts: {
            files: [{
                expand: true,
                flatten: true,
                dot: true,
                cwd: '<%= appCfg.webroot %>',
                dest: '<%= appCfg.dist %>/fonts',
                src: ['bower_components/font-awesome/fonts/*.{eot,ttf,woff}',
                      'bower_components/bootstrap/fonts/*.{eot,ttf,woff}'],
            }]
        },
        cssFonts: {
            files: [{
                expand: true,
                flatten: true,
                dot: true,
                cwd: '<%= appCfg.webroot %>',
                dest: '<%= appCfg.dist %>/css/files/fonts/',
                src: ['files/fonts/*.{eot,ttf,woff}'],
            }]
        },
        dist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '<%= appCfg.webroot %>',
                dest: '<%= appCfg.dist %>',
                src: [
                    '.htaccess',
                    '*.html',
                    '!bower_components/**',
                    '!**/*.2js.html'],
            }]
        },
    },
    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= appCfg.src %>',
                src: [
                    // imagemin gifsicle is failing for glibc < 2.14
                    '**/*.{png,jpg,jpeg}'
                ],
                dest: '<%= appCfg.dist %>/css'
            }]
        }
    },
    htmlmin: {
        dist: {
            options: {
                collapseWhitespace: true,
                conservativeCollapse: true,
                collapseBooleanAttributes: true,
                removeCommentsFromCDATA: true,
                removeOptionalTags: true
            },
            files: [{
                expand: true,
                cwd: '<%= appCfg.dist %>',
                src: [
                    '*.html',
                    '**/*.html',
                ],
                dest: '<%= appCfg.dist %>'
            }]
        }
    },
    rev: {
        files: {
            src: [
                '<%= appCfg.dist %>/*.js',
                '<%= appCfg.dist %>/css/*.css',
                '!<%= appCfg.dist %>/**/*.{png,jpg,jpeg,gif}',
                '<%= appCfg.dist %>/**/*.{webp,eot,ttf,svg,woff}',
                //'!<%= appCfg.dist %>/css/**/*.{webp,eot,ttf,svg,woff}',
            ]
        }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    useminPrepare: {
        html: [
            '<%= appCfg.webroot %>/index.html',
            '<%= appCfg.webroot %>/appearance-preview.html'
        ],
        options: {
            dest: '<%= appCfg.dist %>',
            flow: {
                html: {
                    steps: {
                        js: ['concat', 'uglifyjs'],
                        css: ['cssmin']
                    },
                    post: {}
                }
            }
        }
    },
    usemin: {
        html: [
            '<%= appCfg.dist %>/**/*.html'
        ],
        css: ['<%= appCfg.dist %>/css/*.css'],
        options: {
            assetsDirs: ['<%= appCfg.dist %>', '<%= appCfg.dist %>/**/*']
        }
    },
    fileblocks: {
        options: {
            rebuild: true
        },
        dist: {
            src: '<%= appCfg.webroot %>/index.html',
            blocks: {
                app: {
                    cwd: '<%= appCfg.webroot %>',
                    src: appSrc
                }
            }
        }
    },
    html2js: {
        options: {
            base: '<%= appCfg.webroot %>'
        },
        main: {
            src: ['<%= appCfg.src %>/**/*.html'],
            dest: '<%= appCfg.webroot %>/generated/templates.js'
        }
    },
    cssmin: {
        options: {
            banner: '<%= appCfg.banner %>'
        }
    },
    uglify: {
        options: {
            banner: '<%= appCfg.banner %>'
        }
    },
    watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
    }
  });

  grunt.registerTask('test',    ['jshint']);

  // simple build task
  grunt.registerTask('build', [
      'clean:dist',
      'html2js',
      //'fileblocks',
      'useminPrepare',
      'concurrent:dist',
      'concat',
      'cssmin',
      'uglify',
      'rev',
      'usemin',
      'clean:up'
  ]);


  // simple build task
  grunt.registerTask('nuke', ['clean:dist']);

};
