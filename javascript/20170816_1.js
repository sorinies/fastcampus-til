/*
2) 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

hint)  
문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
*/
function countEight() {
    var intToStr = '';
    var numOfEight = 0;
    // 0부터 10000까지 반복한다. 10000에는 8이 없으니 반복에서 제외한다.
    for (var i = 0; i < 10000; i++) { 
        intToStr = i.toString(); // 증가하는 i를 문자열로 변환
        for (var j = 0; j < intToStr.length; j++) { // 문자열로 변환된 수의 길이 만큼 반복한다.
            //intToStr[j] == '8' ? numOfEight++ : console.log("meh");
            if (intToStr[j] == '8') { // 문자열을 앞에서부터 하나씩 대조하며 8이 있는 경우에만 numOfEight를 증가시킨다.
                numOfEight++;
            }

        }
    }
    return console.log(numOfEight);
}
countEight();

/*
3) 짝수와 홀수

evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.

단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.
*/
function evenOrOdd(num) {
    // 삼항 연산자
    (num % 2 == 0) ? console.log('Even') : console.log('Odd');
    /* if 문
    if (num % 2 == 0) {
        return console.log('Even');
    }else {
        return console.log('Odd');
    }*/
}

evenOrOdd(1);
evenOrOdd(2);

/*
4) 문자열 다루기

alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
s의 길이가 4 또는 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다
*/

function alphaString46(s) {
    // 4 부터 6 이하의 숫자중 5가 아니고, 길이가 4에서 6 사이인 숫자인 경우에만 실행
    if (3 < s.length <= 6 && s.length != 5 && /([0-9]){4,6}/g.test(s)) { 
        console.log('true');
    } else {
        console.log('false');
    }
    return;
}
console.log('수 4자리');
alphaString46('1234'); // true
console.log('수 5자리');
alphaString46('12345'); // false
console.log('수 6자리');
alphaString46('123456'); // true

// 이하 전부 false
console.log('숫자로 시작하는 혼합 4자리');
alphaString46('1to4');
console.log('숫자로 시작하는 혼합 5자리');
alphaString46('1five');
console.log('숫자로 시작하는 혼합 6자리');
alphaString46('1tosix');

console.log('문자로 시작하는 혼합 4자리');
alphaString46('one4');
console.log('문자로 시작하는 혼합 5자리');
alphaString46('onet5');
console.log('문자로 시작하는 혼합 6자리');
alphaString46('onesix');