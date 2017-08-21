/*
# 6. 이상한 문자만들기

toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
바꾼 문자열을 리턴하도록 함수를 완성하라.
예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.
*/

function toWeirdCase(s) {
  var splitWord = s.split(' '); // 입력받은 텍스트를 공백문자 단위로 분할해 배열로 저장한다.
  for (var i = 0; i < splitWord.length; i++) { 
    var splitText = splitWord[i].split(''); // 분리된 각 배열을 문자 단위로 분할해 배열로 저장한다.
    for (var j = 0; j < splitText.length; j++) {
      if (j % 2 == 0) { // 0을 포함한 짝수번째의 순서에 해당하는 문자만 아래 구문을 실행한다.
        splitText[j] = splitText[j].toUpperCase();
      }
    }
    splitWord[i] = splitText.join(''); // 변환이 완료된 단어는 단어별 분리된 배열에 저장한다.
  }
  return splitWord.join(' '); // 분리된 단어를 공백문자로 구분해 문자열로 만들어 반환한다.
}
console.log('6. 이상한 문자 만들기');
console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'
console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); //

/*
# 7. 핸드폰번호 가리기

핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.
*/

function hideNumbers(str){
  var hideNum = str.substring(0, str.length - 4); // 입력받은 전체 문자열 중, 마지막 네 자리를 제외하고 변수에 담는다.
  hideNum = hideNum.replace(/\d/g, "*"); // 마지막 네 자리를 제외하고 담은 변수의 문자열을 모두 *로 변경한다.
  return hideNum.concat("", str.substring(str.length - 4, str.length)); // 가려진 문자열과 가려지지 않은 문자열을 구분 문자 없이 이어 반환한다.
}

console.log('\n7. 핸드폰 번호 가리기');
console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888

/*
# 8. 문자열을 숫자로 바꾸기

strToInt 메소드는 문자열 str을 매개변수로 받는다.
str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.
예를들어 str이 ‘1234’이면 1234를 반환하고, ‘-1234’이면 -1234를 반환한다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.
*/

function strToInt(str){
  return str * 1;
}

console.log('\n8. 문자열을 숫자로 바꾸기');
console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234

/*
# 9. 수박수박수박수박수박수?

waterMelon 함수는 정수 n을 매개변수로 입력받는다.
길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다.
*/

function waterMelon(n){
  var stackText = ''; // 반환할 문자열을 담을 변수를 만든다.
  for (var i = 0; i < n; i++) { // 입력받은 정수만큼 반복
    stackText += (i % 2) ? '박' : '수' // 짝수인 경우에는 '수'를 변수에 더하고, 이외에는 '박'에 더한다. (0 == false)
  }
  return stackText;
}

console.log('\n9. 수박수박수박수박수박수?');
console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));

/*
# 10. 정수제곱근 판별하기

nextSquare함수는 정수 n을 매개변수로 받는다.
n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’을 리턴하는 함수를 작성하라.
예를 들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.

*/

function nextSquare(n){
  var radicalRoot = Math.sqrt(n);
  if (Number.isInteger(radicalRoot)) { // 제곱근이 정수인 경우를 판별한다.
    return Math.pow(radicalRoot + 1, 2)
  } else {
    return 'no';
  }
  // return Number.isInterger(radicalRoot) ? Math.pow(radicalRoot + 1, 2) : 'no';
}

console.log('\n10.정수제곱근 판별하기');
console.log(nextSquare(3));   // no
console.log(nextSquare(121)); // 144
console.log(nextSquare());    // no
console.log(nextSquare(0));   // 1
console.log(nextSquare(1));   // 4
console.log(nextSquare(2));   // no
console.log(nextSquare(3));   // no
console.log(nextSquare(121)); // 144
console.log(nextSquare(165)); // no
console.log(nextSquare(400)); // 441