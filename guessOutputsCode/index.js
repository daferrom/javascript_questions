// Guess the outputs of the following codes

// Code 1:

function func1(){
    setTimeout(()=>{
      // Fifth line printed x was printed
      console.log(x);
      // Fifth line printed y after 3 seconds
      console.log(y);
    },3000);
    /* even though let variables are not hoisted,
    due to the async nature of javascript,
    the complete function code runs before the setTimeout function.
    Therefore, it has access to both x and y.*/
    var x = 2;
    let y = 12;
  }
  func1();
  
  // Code 2:
  
  function func2(){
    for(var i = 0; i < 3; i++){
      /* Four line printed with not timeout of after 2 seconds
      iterated variable is 3 at the moment of printing three times it */
      setTimeout(()=> console.log(i),2000);
  }
  }
  func2();
  
  // Code 3:
  

  // The IIF has primacy over the other calls //
  (function(){
    setTimeout(()=> console.log(1),2000);
    // First line printed with not timeout
    console.log(24);
    // Third line printed timeout with 0 seconds
    setTimeout(()=> console.log(3),0);
    // Second line printed with not timeout
    console.log(4);
  })();