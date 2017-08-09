/* 
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
대소문자를 구별하지 않으며 s에 ‘p’의 개수와 ‘y’의 개수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다. 
예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.
*/

function numPY(s){
    // 어느 조건에도 해당되지 않아 문자열을 배열의 형태로 반환하지 못하는 경우를 대비하기 위해 빈 문자로 초기화
    var pFiltered = '', yFiltered = '';
    // 입력받은 문자열에 p 혹은 y가 있는지 체크해서 변수에 그 개수를 대입.
    if (/py/ig.test(s)) {
        var pFiltered = s.match(/p/ig);
        var yFiltered = s.match(/y/ig);
    }
    return (pFiltered.length == yFiltered.length) ? 'true' : 'false';
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('asdf')); // true