var HashTable = /** @class */ (function () {
    function HashTable(size) {
        if (size === void 0) { size = 53; }
        this.keyMap = new Array(size);
    }
    HashTable.prototype.set = function (key, value) {
        var index = this.hash(key);
        if (!this.keyMap[index])
            this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
    };
    HashTable.prototype.get = function (key) {
        var index = this.hash(key);
        if (!this.keyMap[index])
            return undefined;
        return this.keyMap[index].find(function (keyVal) { return keyVal[0] === key; })[1];
    };
    HashTable.prototype.keys = function () {
        var keys = [];
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (var j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keys;
    };
    HashTable.prototype.values = function () {
        var values = [];
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (var j = 0; j < this.keyMap[i].length; j++) {
                    if (values.indexOf(this.keyMap[i][j][1]) === -1)
                        values.push(this.keyMap[i][j][1]);
                }
            }
        }
        return values;
    };
    HashTable.prototype.hash = function (key) {
        var total = 0;
        var PRIME = 31;
        for (var i = 0; i < Math.min(key.length, 100); i++) {
            var char = key[i];
            var value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    };
    return HashTable;
}());
var hashTable = new HashTable();
hashTable.set('hello', 'world');
hashTable.set('red', 'apple');
hashTable.set('yellow', 'banana');
hashTable.set('orange', 'orange');
console.log(hashTable.values());
