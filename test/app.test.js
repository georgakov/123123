const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should respond with status 200 and "Hello World"', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World', done);
    });
});

