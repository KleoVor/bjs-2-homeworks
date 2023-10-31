class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = null;
    }

    fix() {
        if (this._state > 0) {
            this._state *= 1.5;
            if (this._state > 100) {
                this._state = 100;
            }
        }
    }

    set state(new_state) {
        if (new_state < 0) {
            this._state = 0;
        } else if (new_state > 100) {
            this._state = 100;
        } else {
            this._state = new_state;
        }
    }

    get state() {
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }

}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
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
        } else {
            return "Состояние объекта неудовлетворительное. Сначала подклйте книгу или журнал"
        }
    }


    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (type === "author" && book.author === value) {
                return book;
            } else if (type === 'name' && book.name === value) {
                return book;
            } else if (type === "releaseDate" && book.releaseDate === value) {
                return book;
            } else if (type === "value" && book.type === value) {
                return book;
            }
        }
        return null; // Книга не найдена
    }

    giveBookByName(bookName) {
        const bookToRemove = this.findBookBy("name", bookName);
        if (bookToRemove) {
            this.books = this.books.filter(book => book.name !== bookName);
        }
        return bookToRemove;
    }
}



class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(subject, mark) {
        if (mark < 2 || mark > 5) {
            console.log('Оценка должна быть в диапозоне от 2 до 5.');
            return;
        }
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }
        const subjectMarks = this.marks[subject];
        const sum = subjectMarks.reduce((total, mark) => total + mark, 0);
        const avg = sum / subjectMarks.length;
        return avg;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        const sumMarks = subjects.reduce((total, subject) => {
            return total + this.getAverageBySubject(subject)
        }, 0);
        const avg = sumMarks / subjects.length;
        return avg;
    }
}