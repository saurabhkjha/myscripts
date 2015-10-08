var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

console.log(
(function(foo) {
    return typeof foo.foo.bar;
})({
    foo: {
        bar: 1
    }
})
);

console.log(1+ '1'+'2');
console.log(1+ +'2'+'2');
console.log(1+ -'1'+'2');
console.log(+'1'+ '1'+'2');
console.log('A' - 'B'+'2');
console.log('A' - 'B'+2);

//recursive
//stack overflow
var list = readBigList();

var nextListItem = function(){
	var item = list.pop();

	if(item){
		//process
		nextListItem();//setTimeout(nextListItem,0) to prevent stack overflow
	}
}