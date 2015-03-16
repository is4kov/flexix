module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        less: {
            options: {
                compress: false,
                sourceMap: true,
                sourceMapFilename: 'sourcemaps/main.map'
            },

            global: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },

        autoprefixer: {
            global: {
                options: {
                    browsers: ['last 3 versions', 'ie 9']
                },
                files: {
                    src: 'main.css',
                    dist: 'main.css'
                }
            }
        },

        watch: {
            global: {
                files: [
                    'inc/*.less',
                    'source/*.less'
                ],
                tasks: ['less', 'autoprefixer']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['less', 'watch', 'autoprefixer']);
};