const request = require('supertest');
const expect = require('expect');
const app = require('./server.js').app;


it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});

it('Should return my user object', (done) => {
    request(app)
        .get('/user')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({name: 'Mike', age: 25});
        })
        .end(done);
});