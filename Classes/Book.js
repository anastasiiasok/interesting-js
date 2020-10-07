
  class Book extends MediaItems{
    constructor(options = {}) {
      super(options.title)
      this.length = options.length;
      this.author = options.author;
      this.format = options.format;
      this.language = options.language;
    }
  
  
    returnBook() {
      // return
      this.checkedOut = false;
    }
  
  
  
  
  }