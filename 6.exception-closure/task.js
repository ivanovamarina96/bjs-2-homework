function parseCount(param) {
	let variable = Number.parseFloat(param);
	if (isNaN(variable)) {
		throw new Error ("Невалидное значение");
	}
	else {
	return variable;
	}
}

function validateCount(param) {
	try {
		return parseCount(param);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error ("Треугольник с такими сторонами не существует");
		}
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = 0.5 * (this.a + this.b + this.c);
        let square = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));
		return Number(square.toFixed(3));
	}
}

function getTriangle(c, d, f) {
	try {
		return new Triangle(c, d, f)
	} catch {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}



