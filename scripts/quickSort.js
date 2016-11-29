function fnQuickSort(arr, low, high){
	var pos;
	if (low < high)
	{
		pos = findPos(arr, low, high);
		fnQuickSort(arr, low, pos-1);
		fnQuickSort(arr, pos+1, high);
	}
	return arr;
}

function findPos(arr, low, high)
{
	var val = arr[low];
	while (low < high)
	{
		while (low < high && arr[high] >= val)
			--high;
		arr[low] = arr[high];
		while (low < high && arr[low] <= val)
			++low;
		arr[high] = arr[low];
	}
	arr[low] = val;
	return low;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnQuickSort(arr, 0, arr.length-1);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('快排时间：' + (endTime-startTime));
};