function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
   const name = 'An';
   callback(name);
}

processUserInput(greeting);