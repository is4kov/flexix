module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        less: {
            options: {
                compress: false,
                firebug: false,
                use: [
                    function() {
                        return require('autoprefixer-stylus')('last 3 version', 'ie >= 9');
                    }
                ]
            },
            global: {
                files: {
                    'main.css': 'main.styl'
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
//    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('less');

    grunt.registerTask('default', ['less','watch']);
};