describe('calculator.js', function(){
    describe('Calculator', function () {
        let calculator;
        let calculator2;
        beforeEach(function (){
            calculator = new Calculator();
            calculator2 = new Calculator();
        });
        afterEach (function() {

        })
        describe('add()', function () {
            it('should add numbers to total', function () {
                const calculator = new Calculator();
                calculator.add(5);
                expect(calculator.total).toBe(5);
            });
            it('returns total', function () {
                calculator.total = 50;
                expect(calculator.add(20)).toBe(70);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('number');
            });
            it('has common operations', function () {
                expect(calculator.add).toBeDefined();
                expect(calculator.subtract).toBeDefined();
                expect(calculator.divide).toBeDefined();
                expect(calculator.multiply).toBeDefined();
            });
            it ('add matchers', function () {
                jasmine.addMatchers(customMatchers);
                expect (calculator).toBeCalculator();
            });
            it('initialized unique object', function (){
                expect(calculator).not.toBe(calculator2);
            });
        });
        describe('subtract()', function () {
            it('should subtract numbers to total', function () {
                calculator.subtract(2);
                expect(calculator.total).toBe(-2);
              });
        });
        
        describe('multiply()', function () {
            it('should multiply numbers to total', function () {
                calculator.total = 10;
                calculator.multiply(4);
                expect(calculator.total).toBe(40);
                
            });
        });
        describe('divide()', function () {
            it('should divide numbers to total', function () {
                calculator.total = 20;
                calculator.divide(2);
                expect(calculator.total).toBe(10);
            });
        });
    });
});
