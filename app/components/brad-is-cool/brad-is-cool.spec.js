System.register(['angular2/testing', './brad-is-cool'], function(exports_1) {
    var testing_1, brad_is_cool_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (brad_is_cool_1_1) {
                brad_is_cool_1 = brad_is_cool_1_1;
            }],
        execute: function() {
            testing_1.describe('BradIsCool Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(brad_is_cool_1.BradIsCool).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=brad-is-cool.spec.js.map