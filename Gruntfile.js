module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      clean: ['build'],
      copy: {
        build: {
          files: [{
            expand: true,
            cwd: 'src',
            src: ['img/**/*', 'css/**/*'],
            dest: 'build/'
          }]
        }
      },
      bake: {
        build: {
          options: {
            removeUndefined: false,
            content: 'content.json'
          },
          files: [{
            expand: true,
            cwd: 'src',
            src: ['**/*.html', '**/*.js'],
            dest: 'build/'
          }]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-bake');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
  
    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'bake']);
  };
  