var call = require('chakram');
expect = call.expect;

testConfig = require('../../config.json');

describe("Temperature conversion", function () {
    it('should convert fahrenheit to centigrade', function () {
        return call.get(testConfig.APP_URL + testConfig.CONVERT_TO_CENTIGRADE_API + 100).then(function (response) {
            expect(response.response.body.fahrenheit).to.equal(100);
            expect(response.response.body.centigrade).to.equal(37);
        });
    });
});