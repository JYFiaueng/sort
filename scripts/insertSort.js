function fnInsertSort(arr){
	var i = 0, j = 0, len = arr.length, t = 0;
	for(i = 1; i < len; i++){
        if(arr[i - 1] > arr[i]){
            t = arr[i];
            j = i;
            while (j > 0 && arr[j - 1] > t)
            {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = t;
        }
    }
    return arr;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnInsertSort(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('直接插入时间：' + (endTime-startTime));
};