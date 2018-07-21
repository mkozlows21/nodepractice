const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app.js');


describe('App', () => {
    
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Mike', 25);
        expect(spy).toHaveBeenCalledWith('Mike', 25);
    });

    it('Should call saveUser with user object', () => {
        let email = 'mike@mike.com';
        let password = '12345';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});