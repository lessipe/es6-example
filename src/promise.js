const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('처리 결과');
  } else {
    reject('오류 메시지');
  }
});

promise.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
