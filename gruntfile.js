module.exports = function(grunt) {
	grunt.initConfig({

		jshint: {
		    all: ['Gruntfile.js', 'src/scripts/*.js']
		 }, //jshint

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					src: 'src/sass/*.scss',
					dest: 'builds/www/css/style.css'
				}]
			}
		}, //sass

		cssmin: {
			target: {
				files: [{
				expand: true,
				cwd: 'builds/www/css',
				src: ['*.css', '!*.min.css'],
				dest: 'builds/www/css',
				ext: '.min.css'
				}]
			}
		}, //cssmin

		responsive_images: {
			myTask: {
				options: {
					newFilesOnly: true,
					sizes: [{
						name: 'small',
						width: 320,
					},{
						name: 'medium',
						width: 640,
						suffix: "_x1",
						quality: 60
					},{
						name: "large",
						width: 1024,
						suffix: "_x2",
						quality: 60
					},{
						name: "xlarge",
						width: 2048,
						suffix: "_x3",
						quality: 60
					}]
				},
				files: [{
					expand: true,
					src: ['**/*.{jpg,gif,png}'],
					cwd: 'src/img/',
					dest: 'src/tmp/'
				}]
			}
		}, //responsive_images

		imagemin: {
	    dist: {
        options: {
        	progressive: true,
        },
        files: [{
	        expand: true,
	        cwd: 'src/tmp/',
	        src: ['*.{png,jpg,gif}'],
	        dest: 'builds/www/img/'
        }]
	    }
		}, //imagemin

		clean: {
			contents: ['builds/www/img/*', 'src/tmp/*']
		}, //clean

		copy: {
		  main: {
		    expand: true,
		    cwd: 'src/img/',
		    src: '**',
		    dest: 'src/tmp/',
		  },
		}, //copy

		responsive_images_extender: {
			target: {
				options: {},
				files: [{
				expand: true,
				src: ['**/*.{html,htm,php}'],
				cwd: 'src/',
				dest: 'builds/'
				}]
			}
		}, //responsive_images_extender

		concat: {
			options: {
				separator: '\n\n//========================================\n',
				banner: '\n\n//========================================\n'
			},
			dist: {
				src: ['src/scripts/*.js'],
				dest: 'builds/www/js/script.js'
			}
		}, //concat

		bower_concat: {
			all: {
				dest: 'builds/www/js/_bower.js',
				cssDest: 'builds/www/css/_bower.css'
			}
		}, //bower_concat

		wiredep: {
			task: {
				src: 'builds/www/*.html'
			}
		}, //wiredep

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'builds/www',
					livereload: true
				}
			}
		}, //connect

    htmlmin: {                                     // Task
	    dist: {                                    // Target
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				files: {                                   // Dictionary of files
					'builds/www/index.html': 'src/index.html',     // 'destination': 'source'
				}
	    },
	    dev: {                                       // Another target
				files: {                                   // Dictionary of files
					'builds/www/index.html': 'src/index.html',     // 'destination': 'source'
				}
	    }
		}, //htmlmin

		watch: {
			options: {
	    	spawn: false,
	    	livereload: true
	    },
			scripts: {
		    files: ['Gruntfile.js',
				'src/scripts/*.js',
				'src/sass/*.scss',
				'builds/www/css/*.css',
				'src/index.html'],
		    tasks: ['jshint', 'concat', 'sass', 'cssmin', 'htmlmin']
		  },
		} //watch

	}); //initConfig

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-responsive-images-extender');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('image', ['clean', 'responsive_images', 'copy', 'imagemin']);
	grunt.registerTask('default', ['htmlmin', 'concat', 'sass', 'cssmin', 'jshint', 'connect', 'watch']);

}; //wrapper function