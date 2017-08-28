/*
ES2017에서 도입되어, 비동기식 코드를 동기식 코드처럼 쓸 수 있는 문법 제공
Chrome 55, Node.js 8.0.0 부터 사용가능
async function 안에서 반환된 값은 최종적으로 Promise 객체로 변환되어 반환된다.
async function 안에서 쓸 수 있는 await 키워드는 현재 함수를 중단시키고 Promise 객체가 충족될 때까지 기다리지만, 스레드를 block 하지 않는다.
에러 처리는 동기식 코드처럼 try, catch 블록을 통해서 한다.
*/
const tenSec = require('./tensec')

async function resolveAfterTenSec() {
  await tenSec()
  return 1
}

resolveAfterTenSec().then(value => {
  console.log(value)
})