var swap = function(arr, i, j){
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

function fnSelectSort(arr){
	var i = 0, j = 0, len = arr.length, k = 0;
	for(i = 0; i < len; i++){
		k = i;
		for (j = i + 1; j < len; j++) {
			if (arr[j] > arr[k]){
				k = j;
			}
		}
		swap(arr, k, i);
	}
	return arr;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnSelectSort(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('选择时间：' + (endTime-startTime));
};