function fnShellSort(arr){
	var len = arr.length;
	for(var fraction = Math.floor(len/2); fraction > 0; fraction = Math.floor(fraction/2)){
		for(var i = fraction; i < len; i++){
			for(var j = i-fraction; j >= 0 && arr[j] > arr[fraction+j]; j -= fraction){
				var temp = arr[j];
				arr[j] = arr[fraction+j];
				arr[fraction+j] = temp;
			}
		}
	}
	return arr;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnShellSort(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('希尔时间：' + (endTime-startTime));
};