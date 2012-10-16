var expect = require('expect.js');
var Pot = require(__dirname + '/../index.js');

describe('Pot', function () {

    describe('Constructor', function () {
        it('provides a default namespace', function () {
            var p = new Pot();
            expect(p.ns).to.be('');
            expect(Pot.prototype.ks['']).to.be.an(Object);
        });
        it('initializes a new namespace', function () {
            var p = new Pot('a');
            expect(p.ns).to.be('a');
            expect(Pot.prototype.ks['a']).to.be.an(Object);
        });
        it('mantains an old namespace', function () {
            expect(Pot.prototype.ks['b']).to.be(undefined);
            var p = new Pot('b');
            expect(p.ns).to.be('b');
            expect(Pot.prototype.ks['b']).to.be.an(Object);
            p.set('testkey', 'testvalue');
            var q = new Pot('b');
            expect(q.ns).to.be('b');
            expect(Pot.prototype.ks['b']).to.be.an(Object);
            expect(q.get('testkey')).to.be('testvalue');
        });
    });

    describe('.get(key)', function () {
        it('returns the value if the key exists', function () {
            var p = new Pot('c');
            p.set('testkey', 'testvalue');
            expect(p.get('testkey')).to.be('testvalue');
        });
        it('returns undefined if the key does not exist', function () {
            var p = new Pot('d');
            expect(p.get('testkey')).to.be(undefined);
        });
        it('namespaces work properly', function () {
            var p = new Pot('e');
            var q = new Pot('f');
            p.set('testkey', 'testvalue');
            expect(p.get('testkey')).to.be('testvalue');
            expect(q.get('testkey')).to.be(undefined);
        });
    });

    describe('.set(key, val)', function () {
        it('sets a key', function () {
            var p = new Pot('g');
            p.set('testkey', 'testvalue');
            expect(p.get('testkey')).to.be('testvalue');
        });
        it('namespaces work properly', function () {
            var p = new Pot('h');
            var q = new Pot('i');
            p.set('testkey', 'testvalue');
            expect(p.get('testkey')).to.be('testvalue');
            expect(q.get('testkey')).to.be(undefined);
        });
    });

    describe('.del(key)', function () {
        it('deletes a key', function () {
            var p = new Pot('j');
            p.set('testkey', 'testvalue').del('testkey');
            expect(p.get('testkey')).to.be(undefined);
        });
        it('namespaces work properly', function () {
            var p = new Pot('k');
            var q = new Pot('l');
            p.set('testkey', 'testvalue');
            q.set('testkey', 'testvalue').del('testkey');
            expect(p.get('testkey')).to.be('testvalue');
            expect(q.get('testkey')).to.be(undefined);
        });
    });

    describe('.flush()', function () {
        it('removes all keys', function () {
            var p = new Pot('m');
            p.set('testkey0', 'testvalue0');
            p.set('testkey1', 'testvalue1');
            p.set('testkey2', 'testvalue2');
            p.set('testkey3', 'testvalue3');
            p.set('testkey4', 'testvalue4');
            p.set('testkey5', 'testvalue5');
            p.flush();
            expect(p.get('testkey0')).to.be(undefined);
            expect(p.get('testkey1')).to.be(undefined);
            expect(p.get('testkey2')).to.be(undefined);
            expect(p.get('testkey3')).to.be(undefined);
            expect(p.get('testkey4')).to.be(undefined);
            expect(p.get('testkey5')).to.be(undefined);
        });
        it('namespaces work properly', function () {
            var p = new Pot('n');
            var q = new Pot('o');
            p.set('testkey0', 'testvalue0');
            p.set('testkey1', 'testvalue1');
            p.set('testkey2', 'testvalue2');
            p.set('testkey3', 'testvalue3');
            p.set('testkey4', 'testvalue4');
            p.set('testkey5', 'testvalue5');
            q.set('testkey', 'testvalue');
            p.flush();
            expect(p.get('testkey0')).to.be(undefined);
            expect(p.get('testkey1')).to.be(undefined);
            expect(p.get('testkey2')).to.be(undefined);
            expect(p.get('testkey3')).to.be(undefined);
            expect(p.get('testkey4')).to.be(undefined);
            expect(p.get('testkey5')).to.be(undefined);
            expect(q.get('testkey')).to.be('testvalue');
        });
    });

});
