"use strict"

function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
	let arr = [];
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
		return arr;

	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
		return arr;

	}
}

console.log (solveEquation (3, -4, -20))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = (percent / 100) / 12;
	let S = amount - contribution;
	let payment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	let totalScore = (payment * countMonths).toFixed(2);
	return +totalScore;
}

console.log(calculateTotalMortgage(10, 1000, 50000, 12));