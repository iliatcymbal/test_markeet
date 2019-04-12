import chai from 'chai';
import sinon from 'sinon';
import faker from 'faker';
import { getUsers } from './users';

const { expect } = chai;
chai.should();

describe('getUsers()', () => {
    const testString = faker.lorem.word();

    const createStub = (isRejected) => {
        const stub = sinon.stub(window, 'fetch');
        stub.returns(Promise.resolve({
            json() {
                if (isRejected) throw testString;

                return Promise.resolve(testString);
            }
        }));

        return stub;
    };


    afterEach(() => {
        window.fetch.restore();
    });

    it('should call fetch()', () => {
        const stub = createStub();
        getUsers();

        expect(stub.called).to.be.true;
    });


    it('should call console.log with result if success', async () => {
        const fakeConsole = sinon.stub(console, 'log');

        createStub();
        await getUsers();

        console.log.restore();
        expect(fakeConsole.getCall(0).args[0]).to.equal(testString);
    });

    it('should call console.error with error text if failed', (done) => {
        const fakeConsole = sinon.stub(console, 'error');

        createStub(true);
        getUsers().then(() => {
            expect(fakeConsole.getCall(0).args[0]).to.equal(testString);
            done();
            fakeConsole.restore();
        });
    });
});
