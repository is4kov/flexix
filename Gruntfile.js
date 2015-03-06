module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        less: {
            options: {
                compress: false
              /*use: [
                    function() {
                        return require('autoprefixer-stylus')('last 3 version', 'ie >= 9');
                    }
                ]*/
            },
            global: {
                files: {
                    'main.css': 'main.less'
                }
            }
        },

        watch: {
            global: {
                files: [
                    'inc/*.less',
                    'source/*.less'
                ],
                tasks: ['less:global']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less','watch']);
};