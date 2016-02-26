// Karma configuration
// Generated on Thu Feb 11 2016 03:47:44 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'bin/build/js/vendor/jquery-2.1.3.min.js',
        'bin/build/js/vendor/moment.min.js',
        'bin/build/js/vendor/angular.min.js',
        'unit_test/mocks/angular-mocks.js',
        'bin/build/js/vendor/angular-cookies.min.js',
        'bin/build/js/vendor/angular.ui.router.min.js',
        'bin/build/js/vendor/ui-bootstrap-tpls-0.13.0.min.js',
        'bin/build/jsvendor/calendar.js',
        'bin/build/jsvendor/fullcalendar.js',
        'bin/build/jsvendor/gcal.js',
        'bin/build/jsvendor/jquery.timepicker.min.js',
        'bin/build/js/vendor/load-image.all.min.js',
        'bin/build/js/vendor/bootstrap.min.js',
        'bin/build/jsvendor/angular.touch.js',
        'bin/build/jsvendor/angular-carousel.min.js',
        'bin/build/jsvendor/angular.animate.js',
        'bin/build/js/vendor/angular-sanitize.js',
        'bin/build/js/vendor/angulartics.min.js',
        'bin/build/js/vendor/angulartics-facebook-pixel.min.js',
        'bin/build/js/app/stub.data.js',
        'bin/build/js/app/providers/stubFactory.js',
        'abin/build/js/app/providers/AmplitudeFactory.js',
        'bin/build/js/app/constants.js',
        'bin/build/js/app/services.js',
        'bin/build/js/app/controllers.js',
        'bin/build/js/app/providers/CartService.js',
        'bin/build/js/app/providers/CheckoutService.js',
        'bin/build/js/app/providers/CLService.js',
        'bin/build/js/app/catalog/CatalogCtrl.js',
        'bin/build/js/app/catalog/CategoryCtrl.js',
        'bin/build/js/app/catalog/DetailCtrl.js',
        'bin/build/js/app/catalog/DisplayCtrl.js',
        'bin/build/js/app/cart/CartCtrl.js',
        'bin/build/js/app/checkout/CheckoutCtrl.js',
        'bin/build/js/app/status/OrdersCtrl.js',
        'bin/build/js/app/modal/ModalDirective.js',
        'bin/build/js/app/banner/TopBannerDirective.js',
        'bin/build/js/app/directives.js',
        'bin/build/js/app/app.js',
      'unit_test/specs/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
