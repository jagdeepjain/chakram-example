module.exports = function(grunt) {
    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'TAP',
                    captureFile: 'results.txt',
                    quiet: false,
                    clearRequireCache: false
                },
                src: ['spec/**/*spec.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('test:rest-api', 'mochaTest');
    grunt.registerTask('default', ['jshint']);
    grunt.loadNpmTasks('grunt-contrib-jshint');
};