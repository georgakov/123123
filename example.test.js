// test/example.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); // Убедитесь, что путь к вашему приложению правильный

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /', function() {
    it('should return Hello World!', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello World!');
                done();
            });
    });
});

