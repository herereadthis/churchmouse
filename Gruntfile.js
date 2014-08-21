
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            src: './src',
            build: './build',
            components: './src/components'
        },
        bowercopy: {
            build: {
                options: {
                    destPrefix: '<%= paths.build %>/js'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.min.js'
                }
            }
        },
        connect: {
            options: {
                livereload: 35729,
                port: 9000,
                // base: 'www-root',
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    passphrase: 'grunt',
                    open: 'http://localhost:9000',
                    // open: true,
                    base: '<%= paths.src %>/index.html'
                }
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= paths.src %>',
                    dest: '<%= paths.build %>',
                    src: [
                        '404.html',
                        'images/css/{,*/}*.*',
                        'images/homepage/{,*/}*.*'
                    ]
                }]
            }
        },
        // compiles LESS file to minified CSS
        less: {
            // 'less:redwall' will pull bellmaker's CSS into redwall CSS
            redwall: {
                options: {
                    paths: ["<%= paths.src %>/less"],
                    // yuicompress: true,
                    // compress: true,
                    cleancss: true
                },
                files: {
                    "<%= paths.build %>/css/code.css": "./src/less/code/code.less",
                    "<%= paths.build %>/css/main.css": "./src/less/main.less",
                    "<%= paths.build %>/css/404.css": "./src/less/404.less"
                }
            }
        },
        requirejs: {
            build: {
                options: {
                    baseUrl: "<%= paths.src %>/js/",
                    mainConfigFile: "<%= paths.src %>/js/main.js",
                    name: "main",
                    out: "<%= paths.build %>/js/main.js",
                    optimize: 'uglify2',
                }
            }
        },
        uglify: {
            options: {
                preserveComments: false
            },
            require: {
                files: {
                    '<%= paths.build %>/js/require.js': ['<%= paths.components %>/**/require.js']
                }
            }
        },
        watch: {
            images: {
                files: [
                    "<%= paths.src %>/images/{,*/}*.*"
                ],
                tasks: ["copy:build"]   
            },
            less: {
                files: ["./src/less/*", "./src/less/*/*"],
                tasks: ["less"]
            },
            html: {
                files: ['**/*.html'],
                tasks: ["xmlpoke:updateLastModified"]
            },
            js: {
                files: ['./src/js/*', '<%= paths.components %>/greeneyes/src/js/*'],
                tasks: ['requirejs']
            }
        }
    });
    grunt.registerTask('default', [
        'copy',
        'less',
        'requirejs',
        'uglify'
    ]);
    grunt.registerTask('devserver', [
        // 'uglify'
        'connect:livereload'
    ]);
    grunt.registerTask('server', [
        'watch'
    ]);
};