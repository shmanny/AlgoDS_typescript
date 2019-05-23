class HashTable {
  public keyMap: any[];

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  public set(key: string, value: any) {
    const index = this.hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  public get(key: string) {
    const index = this.hash(key);
    if (!this.keyMap[index]) return undefined;
    return this.keyMap[index].find(keyVal => keyVal[0] === key)[1];
  }

  public keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  public values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (values.indexOf(this.keyMap[i][j][1]) === -1) values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }

  private hash(key: string) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

const hashTable = new HashTable();
hashTable.set('hello', 'world');
hashTable.set('red', 'apple');
hashTable.set('yellow', 'banana');
hashTable.set('orange', 'orange');
console.log(hashTable.values());
