const checkFive = require('../checkFive.js');


describe("checkFive", function(){
    
    test("if the num < 5, the loop returns 'num is less than 5.'", function(){
        
        let output = checkFive(2);
        expect(output).toBe("2 is less than 5.");

    });
    test("if num = 5, returns '5 is equal to 5.'", function(){

        let output = checkFive(5);
        expect(output).toBe("5 is equal to 5.");
    });
    test("if num > 5, returns, 'num is greater than 5.", function(){

        let output = checkFive(6);
        expect(output).toBe("6 is greater than 5.")
    });

});