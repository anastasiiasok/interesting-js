class CD extends MediaItems {
    constructor(options = {}) {
      super(options.title)
      this.runtime = options.runtime;
      this.artist = options.artist;
      this.label = options.label;
    }
  
  
    returnCD() {
      this.checkedOut = false;
    }
  
  
  }