for(var i=1; i <= 100; i++) {
    var isMultiple3 = i%3 === 0;
    var isMultiple5 = i%5 === 0;
    if(isMultiple3 || isMultiple5) {
      if(isMultiple3 && isMultiple5) {
        window.console.log("Marco! Polo!");
      }
      else if(isMultiple3) {
        window.console.log("Marco!");
      }
      else {
        window.console.log("Polo!");
      }
    }
  }