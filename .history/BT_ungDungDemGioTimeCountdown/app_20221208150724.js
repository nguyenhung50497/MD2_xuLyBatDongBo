function message() {
    let result = 'first!';
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });
}

message().then(result => {
   console.log(result)
})