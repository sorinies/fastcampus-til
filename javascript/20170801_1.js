var star = '';
var maxLine = 10; // 줄 수 설정

// 설정한 줄 수 만큼 반복
for (var i = 0; i < maxLine; i++) {
    // 첫번째 줄은 maxLine - 1 공백을 가진다. maxLine - 1을 j에 할당하고, 1씩 차감하며 반복.
    for (var j = maxLine - 1; j > i; j--) {
        star += ' ';
    }
    // 각 행의 별의 개수는 i(0부터 시작하는 반복회수)*2+1의 값을 가진다.
    for (var j = 0; j < 2 * i + 1; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);