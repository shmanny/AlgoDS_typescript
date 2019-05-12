class HashTable {
  private keyMap: any[][];

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  public set(key: string, value: any) {
    const index = this.hash(key);
    if (this.keyMap[index]) this.keyMap[index].push([key, value]);
    else this.keyMap[index] = [[key, value]];
  }

  public get(key: string) {
    const index = this.hash(key);
    if (!this.keyMap[index]) return undefined;
    const value = this.keyMap[index].find(keyVal => keyVal[0] === key)[1];
    return value;
  }

  private hash(key: string) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total += (PRIME * value) % this.keyMap.length;
    }
    return total;
  }
}
