module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            build: {
                options: {
                    port: 8800,
                    base: 'build/',
                    livereload: true,
                    open: true
                },
            }
        },
        clean: {
            build: ['build'],
            dist: ['dist']
        },
        watch: {
            options: {
                livereload: true,
            },
            react: {
                files: ['src/**/*.js', 'src/**/*.jsx'],
                tasks: ['browserify:build']
            },
            less: {
                files: 'src/less/*.less',
                tasks: ['less:build']
            },
            html: {
                files: 'src/**/*.html',
                tasks: ['htmlmin:build']
            }
        },
        browserify: {
            options: {
                transform: [['babelify', {presets: ['react']}]]
            },
            build: {
                src: ['src/**/*.js', 'src/**/*.jsx'],
                dest: 'build/app.js'
            }
        },
        less: {
            build: {
                options: {
                    paths: 'src/'
                },
                files: {
                    'build/style.css': 'src/less/main.less'
                }
            },
        },
        htmlmin: {
            build: {
                files: {
                    'build/index.html': 'src/index.html'
                }
            },
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/app.js': 'build/app.js'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/style.css': 'build/style.css'
                }
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    src: 'img/**',
                    dest: 'build/'
                }, {
                    expand: true,
                    cwd: 'node_modules/bootstrap/',
                    src: 'fonts/**',
                    dest: 'build/'
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    src: 'img/**',
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'node_modules/bootstrap/',
                    src: 'fonts/**',
                    dest: 'dist/'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean:build', 'copy:build', 'browserify:build', 'less:build', 'htmlmin:build']);
    grunt.registerTask('dist', ['clean:dist', 'copy:dist', 'build', 'htmlmin:dist', 'uglify:dist', 'cssmin:dist']);
    grunt.registerTask('default', ['connect:build', 'watch']);
};
