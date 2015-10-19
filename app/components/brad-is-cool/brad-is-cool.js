System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var BradIsCool;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            BradIsCool = (function () {
                function BradIsCool() {
                }
                BradIsCool = __decorate([
                    angular2_1.Component({
                        selector: 'brad-is-cool',
                        templateUrl: 'app/components/brad-is-cool/brad-is-cool.html',
                        styleUrls: ['app/components/brad-is-cool/brad-is-cool.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], BradIsCool);
                return BradIsCool;
            })();
            exports_1("BradIsCool", BradIsCool);
        }
    }
});
//# sourceMappingURL=brad-is-cool.js.map