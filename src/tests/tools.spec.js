import chai from 'chai';
import { sum } from './tools';

const { assert, expect } = chai;
chai.should();

describe('sum()', () => {
    it('sum(2,3) should return 5', () => {
        assert.equal(sum(2,3), 5);
    });

    it('should return 2 for sum(2, 0)', () => {
        assert.equal(sum(2, 0), 2);
    });

    it('should return 0 for sum()', () => {
        assert.equal(sum(), 0);
    });

    it('test array', () => {
        expect([1, 2, 3].indexOf(2) !== -1).equal(true);
    });

    it('checking should', () => {
        sum(3, 7).should.equal(10);
    });
});
