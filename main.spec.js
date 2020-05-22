describe ('main.js', function(){
    describe('calculate()', function(){
        it('calls add')
        it('calls multiply')
        it('calls divide')
        it('calls subtract')
        it('validate expressions with first number is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('a + 3');
            expect(window.updateResult).toHaveBeenCalled();     
            expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
        });
        it('validate expressions when second number is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('3 + a');
            expect(window.updateResult).toHaveBeenCalled();     
            expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
        });
        it('validate expressions  when operation is invalid', function () {
            spyOn(window, 'updateResult');
            calculate('3_4');
            expect(window.updateResult).toHaveBeenCalled();     
            expect(window.updateResult).toHaveBeenCalledWith('Operation is not recognized');
        });
    describe('Update result()', () => {
            let element;
        beforeAll(() => {
            element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);
            this.element = element;
        })
        afterAll(()  => {
            element = document.getElementById('result');
            document.body.removeChild(element);
        })
        it('add result to the Dom element', function (){

            updateResult('5');

            expect(element.innerText).toBe('5');
            });
        });
    });
});
