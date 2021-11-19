export class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
    this.string = '';
  }

  load() {
    this.bufferView = new Uint16Array(this.buffer);
  }

  toString() {
    for (let i = 0; i < this.bufferView.length; i += 1) {
      this.string += String.fromCharCode(this.bufferView[i]);
    }
    return this.string;
  }
}
