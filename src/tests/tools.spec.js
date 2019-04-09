const assert = require('assert');
import { sum } from './tools';

describe('sum()', () => {
    it('sum(2,3) should return 5', () => {
        assert.equal(sum(2,3), 5);
    });
});
