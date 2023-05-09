class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5
	}

	set state(number) {
		if (number < 0) {
			this._state = 0
		}
		if (number > 100) {
			this._state = 100;
		} else(this._state = number)
	}

	get state() {
		return this._state
	}

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';

	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'book';
		this.author = author;
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic'
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel'
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective'
	}
}


class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}
	findBookBy(type, value) {
		let result = this.books.find((index) => index[type] == value);
		return result || null;
	}

	giveBookByName(bookName) {
		let search = this.books.find((ind) => ind['name'] == bookName)
		for (let i = 0; i < this.books.length; i++)
			if (this.books.find((ind) => ind['name'] == bookName)) {
				this.books.splice(i, 1)
				return search;
			}
		if (!search) {
			return null;
		}
	}


}

