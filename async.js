function a(){
    console.log("a");
}


function bAsync(callback_func){
    console.log("b");
    callback_func();
}


bAsync(a);

// When do we need to use a callback function? 
/* 
- Make sure that code after asynchronous calls does not rely on the asynchronous call completing
- If the code relies on the completion of the asynchronous calls, make it a callback
*/