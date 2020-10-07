class MediaItems {
    constructor(label) {
    this.title = label;


    }

isAvailable() {
    return !this.isCheckedOut();
  }

  checkout() {
    this.checkedOut = true;
  }

  isCheckedOut() {
    return this.checkedOut;
  }

  isDamaged() {
    return this.damaged;
  }


  recordDamage() {
    this.damaged = true;
  }

  repair() {
    this.damaged = false;
  }







