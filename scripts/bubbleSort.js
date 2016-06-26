var swap = function(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

function fnBubbleSort(arr){
	var i = 0, j = 0, len = arr.length;
	for(i = 0; i < len; i++){
		for(j = len-1; j > i; j--){
			if(arr[j] > arr[j-1]){
				swap(arr, j, j-1);
			}
		}
	}
	return arr;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnBubbleSort(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('冒泡时间：' + (endTime-startTime));
};