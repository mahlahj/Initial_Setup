'use strict';

/* This is how we define node modules. We'll deal with the structure of node modules 
    and why we use this approach in the server-side*/
module.exports = function (grunt) {
    /* Time how long tasks take. Can help when optimizing build times. */
    require('time-grunt')(grunt);

    /* Automatically load required Grunt tasks. */
    require('jit-grunt')(grunt);

    /* Define the configuration for all the tasks. */
    grunt.initConfig ({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        }, /* Watch out for the commas. */
        watch: {
            files: 'css/*.scss', 
            tasks: ['sass']
        }, /* Watch out for the commas. */
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.scss',
                        '*.html',
                        'js/*.js'
                    ]
                }, /* WATCH THE COMMAS. */
                option: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            },
            imagemin: {
                dynamic: {
                    files: [{
                        expand:true,
                        dot: true,
                        cwd: './',
                        src: ['img/*.{png,jpg,gif'],
                        dest: 'dist/'
                    }]
                }
            }
        }
    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};