//问题1
const removeRepeat = () => {
    const arr = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    // 输出[1, 2, 3, "a", "b"]
    const a = [...new Set(arr)]
    console.log(a);
}
removeRepeat();

//问题2
const findRepeat= () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    const result = [...new Set(array.filter(i => array.indexOf(i) !== array.lastIndexOf(i)))]
    console.log(result);
    // 输出[2, 3, "a"]
}
findRepeat();


//问题3
const clone= (obj) => {

    //todo
    return{...obj}
}
const obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
console.log(obj1.string === obj.string);


//问题4
const question4= () => {
    for (var i = 0; i < 5; i++) {
        (j => {
            setTimeout(function() {
                console.log(j)
            }, j * 1000)
        })(i)
    }
    console.log(i)
    // todo
    //修改代码输出 5,0,1,2,3,4
}
question4();
