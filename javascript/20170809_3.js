/* 
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
대소문자를 구별하지 않으며 s에 ‘p’의 개수와 ‘y’의 개수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다. 
예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.
*/

function numPY(s){
    // 변수 초기화
    var pCount = 0;
    var yCount = 0;
    // 입력받은 문자열을 소문자화 한다.
    var res = s.toLowerCase();
    // 문자열의 각 문자가 p인지 y인지 문자열 길이만큼 반복해서 체크하고, 맞다면 pCount, yCount를 하나씩 증가시킨다.
    for (var i = 0; i < res.length; i++) {
        if (res.charAt(i) == 'p') {
            pCount++;
        } else if (res.charAt(i) == 'y') {
            yCount++;
        }
    }
    // pCount와 yCount가 일치하는지 체크.
    return (pCount == yCount) ? 'true' : 'false';
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('asdf')); // true