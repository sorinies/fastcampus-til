/*
15. 하샤드 수
하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200

Harshad함수는 양의 정수 n을 매개변수로 입력받는다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.
예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.
*/

function isHarshad(n){
  if (10 <= n) {
    var splitNum = n.toString();
    splitNum = splitNum.split('');
    /* for문 활용법
    var result = 0;
    console.log(splitNum);
    for (var i = 0; i < splitNum.length; i++) {
      result += splitNum[i] * 1;
    }
    */
    var result = splitNum.reduce(function(a, b) { // 배열 내의 모든 수의 합을 반환한다. 
      return Number(a) + Number(b); // 배열로 만드는 과정에서 바뀐 자료형을 고려해 바꾸어 계산한다.
    }, 0);
    return n % result == 0 ? 'true' : 'false'; // 입력받은 수를 결과로 나누어 떨어지는 경우에 따라 boolean을 반환한다.
  } else {
    return '10의 자리 이상의 수를 입력해주세요';
  }
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
console.log(isHarshad(192)); // true
console.log(isHarshad(193)); // false

/*
#16. 두 정수 사이의 합

adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.
x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.
예를들어 x가 3, y가 5이면 12를 리턴한다.
*/

function adder(x, y){

}

console.log(adder(3, 5)); // 12
console.log(adder(14, 2)); // 104
console.log(adder(-5, -2)); // -14
console.log(adder(-3, 0)); // -6
console.log(adder(-3, 3)); // 0