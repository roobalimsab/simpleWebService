var assert = require('assert');
var index = require('../index.js');
var stdout = require("test-console").stdout;

describe('Test simple web service', function() {
    it('should log message', function () {
        var inspect = stdout.inspect();
        index.logInfo();
        inspect.restore();
        assert.deepEqual(inspect.output, ["listening now\n"]);
    });
});