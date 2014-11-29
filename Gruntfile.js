module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'dealmelocal/js/<%= pkg.name %>.min.js'
            }
        },
        vulcanize: {
            default: {
                options: {
                    csp: true,
                    strip: true
                    // Task-specific options go here.
                },
                files: {
                    'dealmelocal/www/index.html': 'dealmelocal/www/dev2.html'
                    // Target-specific file lists and/or options go here.
                },
            },
        },

        jshint: {
            all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
            options: {
                jshintrc: '.jshintrc'
            }
        },


        validation: {
            options: {
                reset: grunt.option('reset') || false,
                stoponerror: false,
                relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors
            },
            files: {
                src: ['dealmelocal/www/dev2.html']
            }
        },
        csscss: {
            dist: {
                options: {},
                files: {
                    'cssoutput.css': ['/dealmelocal/www/css/main.css']
                },
                src: ['dealmelocal/www/css/*.css']
            }
        },
less: {
  development: {
    options: {
      paths: ["assets/css"]
    },
    files: {
      "dealmelocal/www/main.css": "dealmelocal/www/main.less"
    }
  },
  production: {
    options: {
      paths: ["assets/css"],
      cleancss: true
      
    },
    files: {
      "dealmelocal/www/main.css": "dealmelocal/www/main.less"
    }
  }
}


    });
    grunt.loadTasks('tasks');
    // Load  plugins.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-internal');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-csscss');
grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['vulcanize'], ['validation']);
    grunt.registerTask('test', ['jshint', 'clean', 'csslint', 'nodeunit']);
    grunt.registerTask('default', ['jshint', 'build-contrib']);
};
