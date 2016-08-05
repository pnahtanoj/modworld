class Sequence {
	constructor(steps) {
		this.steps = [];
		this.setLength(steps);
    return this;
	}

  setLength(len) {
    for(var i = 0; i < len; i++) {
      this.steps.push(new Step()); 
    }
    return this;
  }

  getLength() { 
    return this.steps.length; 
  }

  setStep(step, value) { // ONE BASED //
    if (step < 1 || step > this.getLength())
      throw Error('Tried to set step outside of current length: ', step, this.length());
    if (!value)
      value = 0;

    this.steps[step-1].value = (value % 4); // 0-3 //

    return this;
  }

  clearSteps() {
    while(this.steps.length) {
      this.steps.pop();
    }
    return this;
  }

}