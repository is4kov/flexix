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
                src: 'main.css',
                dest: 'main.css'
            }
        },

        watch: {
            global: {
                files: [
                    'inc/*.less',
                    'source/*.less'
                ],
                tasks: ['less', 'autoprefixer:global']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['less', 'watch', 'autoprefixer:global']);
};