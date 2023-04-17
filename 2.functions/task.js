function getArrayParams(...arr) {
	let generalDataObject = {};
	generalDataObject.min = (Math.min.apply(null, arr));
	generalDataObject.max = (Math.max.apply(null, arr));
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	generalDataObject.avg = +(sum / arr.length).toFixed(2);

	console.log(generalDataObject);
}

function summElementsWorker(...arr) {
	let sum = arr.reduce(function(total, amount) {
		return total + amount
	}, 0);
	if (arr.lenght < 1) {
		return 0;
	} else {
		return sum;
	}
}



function differenceMaxMinWorker(...arr) {
	let max = Math.max.apply(null, arr);
	let min = Math.min.apply(null, arr);
	if (arr.length < 1) {
		return 0;
	} else {
		return max - min;
	}


}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i]
		} else {
			sumOddElement += arr[i];
		}
	}
	if (arr.length < 0) {
		return 0;
	} else {
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (arr.length < 1) {
		return 0;
	} else {
		return sumEvenElement / countEvenElement
	}
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}