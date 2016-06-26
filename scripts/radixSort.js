function GetNumInPos(num,pos)
{
	var temp = 1;
	for (var i = 0; i < pos - 1; i++){
		temp *= 10;
	}
	return (Math.floor(num / temp) % 10);
}

function radixSorting(arr)
{
	var i = 0, j = 0, k = 0, pos = 0;
	var radixArrays = [];
	for(i = 0; i < 10; i++)
	{
		radixArrays[i] = [];
	}
	for(pos = 1; pos <= 6; pos++)
	{
		for(i = 0; i < arr.length; i++){
			var num = GetNumInPos(arr[i], pos);
			var index = radixArrays[num].length;
			radixArrays[num][index] = arr[i];
		}
		for(i = 0, j = 0; i < 10; i++){
			for (k = 0; k < radixArrays[i].length; k++){
				arr[j++] = radixArrays[i][k];
			}
			radixArrays[i] = [];
		}
	}
	return arr;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = radixSorting(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('基数排序时间：' + (endTime-startTime));
};