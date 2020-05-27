//problem 32
function prime_position(num) {
    var one = 1;
    var num2 = 1;
    var zero = 0;
    while(one <= num) {
        zero = 0;
        for (var i = 1; i < num2; i++) {
            if (num2 % i == 0) {
                zero++;
            }
            if (zero > 1) {
                break;
            }
        }
        if (zero == 1) {
            one++;
        }
        num2++;
    }
    return num2-1;
}
//problem 33
function sort_subtract(num) {
    var str = num.toString();
    var split = str.split("");
    var split2= str.split("");
    var sort = split.sort();
    var join = Number(sort.join(''));
    var x = split2.sort(function(sort,x){return x-sort});
    var join2 = Number(x.join(''));

    return join2-join;
}

