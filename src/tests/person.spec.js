import chai from 'chai';
import faker from 'faker';
import { Person } from './Person';

const { assert, expect } = chai;
chai.should();

describe('Person class', () => {
    let person, name;

    beforeEach(() => {
        person = new Person();
        name = faker.name.firstName();
    });

    it('should create instance with field name', () => {
        person.name.should.equal('John');
    });

    it('should create instance with field creation which is Date', () => {
        person.creation.should.instanceof(Date);
    });

    it('should create instance with field name', () => {
        const person = new Person(name);

        person.name.should.equal(name);
    });

    it('should return name on getName()', () => {
        person.getName().should.equal(person.name);
    });

    it('should set name on setName(name)', () => {
        person.setName(name);
        person.name.should.equal(name);
    });

    it('should return "night child" on getCreation() if 3 hours', () => {
        person.creation.setHours(3);
        person.getCreation().should.equal('night child');
    })

});
