let numbers = [1, 2, 3, 4, 5];

console.log('익명 함수');
console.log(numbers.map(function(number) {
  return number + 1;
}));

console.log('화살표 함수');
console.log(numbers.map(number => number + 1));
