//process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a','b',100000,512,'sha512',function(){
    console.log('1: ',Date.now()-start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',function(){
    console.log('2: ',Date.now()-start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',function(){
    console.log('3: ',Date.now()-start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',function(){
    console.log('4: ',Date.now()-start);
});

crypto.pbkdf2('a','b',100000,512,'sha512',function(){
    console.log('5: ',Date.now()-start);
});

//--------------------Running only two functions---------------------------\\

//A cpu ececutes every instruction one by one if all instructions are on the same thread.
//If is there any event loop then it takes ~~2sec but it takes only one.
// This makes a posiblity of node.js is multithreaded without the event loop.