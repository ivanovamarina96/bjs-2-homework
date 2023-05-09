function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}
Student.prototype.addMarks = function(...marksToAdd) {
	if (this.marks) {
		this.marks.push(...marksToAdd);
	} else {
		delete this.marks;
	}
}
Student.prototype.getAverage = function() {
	if (this.marks && this.marks.length > 0) {
		let sum = this.marks.reduce((total, amount) => total + amount)
		return sum / this.marks.length
	} else {
		return 0
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	if (this.excluded) {
		delete this.marks;
		delete this.subject;
	}
}


let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)