var cls = (function() {
    var i = 1;
    return function() {
        var a = ++i;
        console.log(a);
    };
})();

cls();