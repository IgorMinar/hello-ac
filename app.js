System.register(['angular2/angular2', './app/hello-ac'], function(exports_1) {
    var angular2_1, hello_ac_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (hello_ac_1_1) {
                hello_ac_1 = hello_ac_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(hello_ac_1.HelloAcApp);
        }
    }
});
//# sourceMappingURL=app.js.map