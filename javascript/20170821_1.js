/*
11. 배열의 최대/최소값 구하기
배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.
*/

function getMaxValueFromArray(array) {
  array.sort(function (a, b) { return b - a; }); // 배열 내림차순 정렬.
  return array[0]; // 정렬 이후 반환하는 것은 가장 큰 수
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  array.sort(); 
  return array[0];
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5


/*
12. 약수의 합
어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.
약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다
*/

function sumDivisor(num) {
  var result = 0;
  for (var i = 0; i <= num; i++) {
    result += num % i == 0 ? i : 0; // 입력받은 수 이하의 수의 나머지 값을 차례대로 구하고 그 값이 0일 때 결과에 더한다.
  }
  return result;
}

console.log(sumDivisor(12)); // 28
console.log(sumDivisor(25)); // 31