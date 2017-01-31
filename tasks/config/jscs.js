/* global process */
module.exports = function(grunt) {

  grunt.config.set('jscs', {
    src: source,
    options: jscsSettings
  });

  // grunt.loadNpmTasks('grunt-jscs');
  
};

/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */
module.exports = function(grunt) {

  grunt.config.set('jscs', {
    src: ['./api/**'],
    options: {
      plugins: [
        require('jscs-jsdoc')
      ],
      preset: 'google',
      reporter: require('jscs-stylish')
        .path,
      maxErrors: -1,
      jsDoc: {
        checkAnnotations: {
          preset: 'jsdoc3'
        },
        checkParamExistence: true,
        checkParamNames: true,
        requireParamTypes: true,
        checkRedundantParams: true,
        checkReturnTypes: true,
        checkRedundantReturns: true,
        requireReturnTypes: true,
        enforceExistence: true,
        requireParamDescription: true,
        requireNewlineAfterDescription: true,
        leadingUnderscoreAccess: 'private',
        checkRedundantAccess: 'enforceLeadingUnderscore',
        checkTypes: true,
        requireReturnDescription: true
      },
      requireSpaceAfterLineComment: true,
      requireDotNotation: {
        allExcept: ['snake_case']
      },
      requirePaddingNewLinesAfterBlocks: true,
      maximumLineLength: 100
    }
  });

  grunt.loadNpmTasks('grunt-jscs');
};
