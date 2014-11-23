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
          }


     });

     // Load the plugin that provides the "uglify" task.
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-vulcanize');

     // Default task(s).
     grunt.registerTask('default', ['vulcanize']);

};
