const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        let res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');

        // if(res !== 44) {
        //     throw new Error(`Expected 44, got ${res}.`);
        // }
    });

    it('should square a number', () => {
        let res = utils.square(2);
        expect(res).toBe(4).toBeA('number');
    });

    it('Should verify first and last names are set', () => {
        let newUser = {
            location: 'Boston',
            age: 25
        };
        let res = utils.setName(newUser, 'Mike Kozlowski');

        expect(newUser).toInclude({
            firstName: 'Mike'
        }).toInclude({
            lastName: 'Kozlowski'
        }).toBeA('object').toEqual(res);
    });

    describe('Async Block', () => {
        //done must get called before test ends by mocha
        it('Should async add two numbers', (done) => {
            utils.asyncAdd(3, 2, (sum) => {
                expect(sum).toBe(5).toBeA('number');
                done();
            });
        });
    
        it('Should async square a number', (done) => {
            utils.asyncSquare(3, (square) => {
                expect(square).toBe(9).toBeA('number');
                done();
            }); 
        });
        
    });

});

//behavior driven development

it('should expect some values', ()  => {
    //expect(12).toNotBe(11).toBe(12).toBeA('number');
    //expect({name: 'Mike'}).toEqual({name: 'Mike'});
    //expect([2,3,4]).toExclude(1);
    expect({name: 'Mike', age: 25, location: 'Boston'}).toInclude({name: 'Mike'});
});



