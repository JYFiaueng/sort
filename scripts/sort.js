onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = arr.sort(function(a,b){
		return a - b;
	});
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('sort方法时间：' + (endTime-startTime));
};