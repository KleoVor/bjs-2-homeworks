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
            if (type === "автор" && book.author === value) {
                return book;
            } else if (type === "название" && book.name === value) {
                return book;
            } else if (type === "год выпуска" && book.releaseDate === value) {
                return book;
            } else if (type === "тип" && book.type === value) {
                return book;
            }
        }
        return null; // Книга не найдена
    }

    giveBookByName(bookName) {
        const bookToRemove = this.findBookBy("название", bookName);
        if (bookToRemove) {
            this.books = this.books.filter(book => book.name !== bookName);
        }
        return bookToRemove;
    }
}