/*
13. 소수 찾기
numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.
소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다. 즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …

예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.
*/
function numberOfPrime(n) {
  var result = 0;
  for (var i = 1; i <= n; i++) { // 입력받은 수 만큼 반복
    var pnumCheck = 0; 
    for (var j = 1; j <= i; j++) { // 입력받은 수 이하의 수를 자신 이하의 수로 나누어 떨어지는 수를 찾는다.
      if (i % j == 0) pnumCheck++; // 나누어 떨어진다면 pnumCheck를 +1 한다.
    }
    if (pnumCheck == 2) result++; // 나머지가 0인 결과(pnumCheck)가 정확히 두 번(1과 자신)이라면 결과(result)에 +1 한다.
  }
  return result;
}

console.log('13. 소수 찾기');
console.log(numberOfPrime(10)); // 4
console.log(numberOfPrime(30)); // 10
console.log(numberOfPrime(75)); // 21

/*
#14. 피보나치 수

피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 예를 들어 n = 3이라면 2를 반환한다.
*/

function fibonacci(n) {
  if (2 <= n) {
    var a = 0, b = 1;
    for (var i = 0; i < n; i++) { // 입력받은 수는 셈의 회수와 같다. 입력받은 회수만큼 계산을 실행한다.
      a += b;
      b = a - b;
    }    
  } else {
    return '2 이상의 수가 아닙니다.'
  }
  return a;
}

console.log('14. 피보나치 수');
console.log(fibonacci(1)); // 2 이상의 수가 아닙니다.
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(15)); // 610
