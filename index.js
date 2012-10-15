var Pot = function (ns) {
        this.ns = ns || '';
        Pot.prototype.ks[this.ns] = Pot.prototype.ks[this.ns] || {};
    };

    Pot.prototype.ks = {};

    Pot.prototype.get = function (key) {
        return Pot.prototype.ks[this.ns][key];
    };

    Pot.prototype.set = function (key, val) {
        Pot.prototype.ks[this.ns][key] = val;
        return this;
    };

module.exports = Pot;
