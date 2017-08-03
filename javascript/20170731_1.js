/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex) 
0
2
4
6
8
*/
console.log('1번 문제');
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
ex) 02468
*/
console.log('\n2번 문제');
var k = '';
for (var j = 0; j < 10; j++) {
    if (j % 2 == 0) {
      k += j;
    }
}
console.log(k);

/*
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1
*/
console.log('\n3번 문제');
for (var x = 10; x > 0; x--) {
    if (x % 2 != 0) {
        console.log(x);
    }
}

/*
while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8
*/
console.log('\n4번 문제');
var y = 0;
while (y < 10) {
    if (y % 2 == 0) {
        console.log(y);
    }
    y++;
}

/*
while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1
*/
console.log('\n5번 문제');
var z = 10;
while (z > 0) {
    if (z % 2 != 0) {
        console.log(z);
    }
    z--;
}

/*
삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****

*/
console.log('\n6번 문제');
var star1 = '';
for (var a = 0; a < 5; a++) {
    for (var b = 0; b <= a; b++) {
        star1 += '*';
    }
    star1 += '\n';
}
console.log(star1);

/*
트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****

*/
console.log('\n7번 문제');
var star2 = '';
for (var c = 0; c < 3; c++) {
    for (var d = 0; d <= c; d++) {
        star2 += '*';
    }
    star2 += '\n';
}
for (c = 0; c < 5; c++) {
    for (d = 0; d <= c; d++) {
        star2 += '*';
    }
    star2 += '\n';
}
console.log(star2);