module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            build: {
                options: {
                    port: 8800,
                    base: 'build/',
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            webpack: {
                files: ['src/**/*.js', 'src/**/*.jsx'],
                tasks: ['webpack:build']
            },
            less: {
                files: 'src/less/**/*.less',
                tasks: ['less:build']
            },
            copy: {
                files: ['img/**/*', 'src/**/*.html'],
                tasks: ['copy:build']
            }
        },

        clean: {
            build: ['build/']
        },

        copy: {
            build: {
                files: [{
                    expand: true,
                    src: 'img/**',
                    dest: 'build/'
                }, {
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.html',
                    dest: 'build/'
                }, {
                    expand: true,
                    cwd: 'node_modules/bootstrap',
                    src: 'fonts/**',
                    dest: 'build/'
                }]
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
            }
        },

        webpack: {
            build: {
                entry: './src/index.js',
                output: {
                    path: 'build/',
                    filename: 'app.js'
                },
                stats: {
                    colors: true,
                    modules: false,
                    reasons: true
                },
                progress: true,
                keepalive: true,
                module: {
                    loaders: [
                        {
                            test: /\.js?$/,
                            exclude: /node_modules/,
                            loader: 'babel',
                            query: {
                                cacheDirectory: true,
                                presets: ['react', 'es2015']
                            }
                        }
                    ]
                }
            },
            devServer: {
                contentBase: 'build/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('build', ['clean:build', 'copy:build', 'less:build', 'webpack:build' ]);
    grunt.registerTask('default', ['connect:build', 'watch']);
}
