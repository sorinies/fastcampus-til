// name.js

// `module.exports`에 저장한 값은 다른 모듈에서 불러올 수 있음.
// exports에는 기본적으로 빈 객체가 있다.
// 객체 전체를 변경할 때에는 module.exports 를 입력 후 변경할 수 있다.
module.exports = {
  familyName: '백',
  givenName: '승훈',
  fullName: function() {
    return this.familyName + this.givenName
  }
}