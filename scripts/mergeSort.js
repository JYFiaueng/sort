function merge(left, right){
	var result = [];
	while(left.length > 0 && right.length > 0){
		if(left[0] < right[0]){
		/*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
			result.push(left.shift());
		}else{
			result.push(right.shift());
		}
	}
	return result.concat(left).concat(right);
}
function fnMergeSort(arr){
	if(arr.length == 1){
		return arr;
	}
	var middle = Math.floor(arr.length/2),
		left = arr.slice(0, middle),
		right = arr.slice(middle);
	return merge(fnMergeSort(left), fnMergeSort(right));
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnMergeSort(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('归并时间：' + (endTime-startTime));
};