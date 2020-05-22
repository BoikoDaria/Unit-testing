const customMatchers = {
    toBeCalculator: function () {
        return {
            compare: function(actual){
                const result = {
                    pass: false,
                    message: ''
                }

            if (result.pass) {
                //todo
            } else {
                result.message = 'Expected' + actual + 'to be instance of Calculator';
            }

            return result;
            }
        }
    }
}