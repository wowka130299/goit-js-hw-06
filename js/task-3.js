class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue () {
    return this.#value;
  }
  padEnd(str) {
    let newStr = this.#value + str;
    this.#value = newStr;
  }

  padStart(str) {
    let newStr = str + this.#value;
    this.#value = newStr;
  }

  padBoth(str) {
    let newStr = str + this.#value + str;
    this.#value = newStr;
  }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

