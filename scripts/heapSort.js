//调整函数
function headAdjust(arr, pos, len){
	//将当前节点值进行保存
	var swap = arr[pos];
	//定位到当前节点的左边的子节点
	var child = pos * 2 + 1;
	//递归，直至没有子节点为止
	while(child < len){
		//如果当前节点有右边的子节点，并且右子节点较大的场合，采用右子节点和当前节点进行比较
		if(child + 1 < len && arr[child] < arr[child + 1]){
			child += 1;
		}
		//比较当前节点和最大的子节点，小于则进行值交换，交换后将当前节点定位于子节点上
		if(arr[pos] < arr[child]){
			arr[pos] = arr[child];
			pos = child;
			child = pos * 2 + 1;
		}else{
			break;
		}
		arr[pos] = swap;
	}
}
//构建堆
function buildHeap(arr){
	//从最后一个拥有子节点的节点开始，将该节点连同其子节点进行比较，
	//将最大的数交换与该节点,交换后，再依次向前节点进行相同交换处理，
	//直至构建出大顶堆（升序为大顶，降序为小顶）
	for(var i=arr.length/2; i>=0; i--){
		headAdjust(arr, i, arr.length);
	}
}
function fnHeapSort(arr){
	//构建堆
	buildHeap(arr);
	//从数列的尾部开始进行调整
	for(var i = arr.length-1; i > 0; i--){
		//堆顶永远是最大元素，故，将堆顶和尾部元素交换，将最大元素保存于尾部，并且不参与后面的调整
		var swap = arr[i];
		arr[i] = arr[0];
		arr[0] = swap;
		//进行调整，将最大元素调整至堆顶
		headAdjust(arr, 0, i);
	}
	return arr;
}

onmessage = function (evt){
	var arr = evt.data;//通过evt.data获得发送来的数据
	var startTime = +new Date();
	var arrSort = fnHeapSort(arr);
	var endTime = +new Date();
	// console.log(arrSort);
	postMessage('堆排序时间：' + (endTime-startTime));
};