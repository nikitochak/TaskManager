/*describe('MyCtrl', function() {
    var scope={};
    beforeEach( module('MyModule'));

    it('has correct initial values',   inject(function($controller) {
          ctrl = $controller('MyCtrl', { $scope: scope });
          expect(scope.value).toBe(0);
          expect(scope.maxValue).toBe(3);  
    }));
    
    it('increments correctly', function() {
        scope.incrementValue();
        expect(scope.value).toBe(1);
        scope.incrementValue();
        expect(scope.value).toBe(2);
        scope.incrementValue();
        expect(scope.value).toBe(3);
        scope.incrementValue();
        expect(scope.value).toBe(0);
    });
});*/
describe('UserService test baby', function() {
    var scope={};
    beforeEach( module('routerApp'));

    
     it('returns 1', function(){ //parameter name = service name

            expect( false ).toEqual(false);
            expect( 0 ).toEqual(0);
            
        }));
   /* it('increments correctly', function() {
        scope.incrementValue();
        expect(scope.value).toBe(1);
        scope.incrementValue();
        expect(scope.value).toBe(2);
        scope.incrementValue();
        expect(scope.value).toBe(3);
        scope.incrementValue();
        expect(scope.value).toBe(0);
    });*/
});