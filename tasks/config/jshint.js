/* global process */
module.exports = function(grunt) {

  grunt.config.set('jshint', {
    options: {
      globals: {
        sails: true,
        process: true,
        __dirname: true,
        require: true,
        module: true,
        angular: true,
        define: true,
        jQuery: true,
        emit: true // CouchDB
      },
      sub: true,
      curly: true,
      latedef: true,
      noarg: true,
      freeze: true,
      shadow: true,
      unused: true,
      eqnull: true,
      browser: true,
      camelcase: true,
      devel: false,
      undef: true,
      reporter: require('jshint-stylish')
    },
    appLint: ['./api/**']
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
};