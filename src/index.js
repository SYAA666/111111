class SmartCalculator {
  constructor(initialValue) {
      this.operands = ['^', '*','/', '-', '+'];
      this.toArray = [initialValue];
  }

  add(number) {
      this.toArray.push('+');
      this.toArray.push(number);
      return this;
  }

  subtract(number) {
      this.toArray.push('-');
      this.toArray.push(number);
      return this;
  }

  multiply(number) {
      this.toArray.push('*');
      this.toArray.push(number);
      return this;
  }

  devide(number) {
      this.toArray.push('/');
      this.toArray.push(number);
      return this;
  }

  pow(number) {
      this.toArray.push('^');
      this.toArray.push(number);
      return this;
  }

  valueOf() {
    this.operands.forEach((operand) => {
        for (let j = 0; j <= this.toArray.length; j++) {
          if (this.toArray[j] === operand) {
            switch (operand) {
              case '+': this.toArray[j] =  this.toArray[j - 1] + this.toArray[j +1]
                    break;
              case '-': this.toArray[j] =  this.toArray[j - 1] - this.toArray[j +1]
                    break;
              case '*': this.toArray[j] = this.toArray[j - 1] * this.toArray[j +1]
                    break;
              case '/': this.toArray[j] =  this.toArray[j - 1] / this.toArray[j +1]
                   break;
              case '^': this.toArray[j] = Math.pow(this.toArray[j - 1], this.toArray[j + 1])
                    break;
              default: return "How did you pass your school exams?";
            }
            this.toArray.splice(j + 1, 1);
            this.toArray.splice(j - 1, 1);
              j = 0;
          }
        }
    })
    return  this.toArray[0];
  }
}

module.exports = SmartCalculator;