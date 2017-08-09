var arr = [];

for (var i = 0; i < 5; i++){
  arr[i] = (function (id) { // ②
    return function () {
      return id; // ③
    };
  })(i); // ①
}

for (var index = 0; index < arr.length; index++) {
  console.log(arr[index]());
}