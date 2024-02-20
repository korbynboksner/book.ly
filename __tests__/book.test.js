const db = require("../db");
const Book = require("../models/book");




describe("Test Book class", function () {
    beforeEach(async function () {
      await db.query("DELETE FROM books");
      let u = await Book.create({
        isbn: "12345",
        amazon_url: "test.com",
        author: "John Smith",
        language: "Testish",
        pages: 420,
        publisher: "Test Press",
        title: "test title",
        year: 1984,
      });
    });
    test("can add book", async function () {
        let b = await Book.create({
            isbn: "12345",
            amazon_url: "test.com",
            author: "John Smith",
            language: "Testish",
            pages: 420,
            publisher: "Test Press",
            title: "1984",
            year: 1984,
        });
    
        expect(b.title).toBe("1984");
        expect(b.pages).not.toBe(undefined);
      });
    test("can get", async function () {
      let u = await Book.get("test");
        expect(u).toEqual({
            isbn: "12345",
            amazon_url: "test.com",
            author: "John Smith",
            language: "Testish",
            pages: 420,
            publisher: "Test Press",
            title: "test title",
            year: 1984,
        });
      });
      test("can get all", async function () {
        let u = await Book.findAll();
        expect(u).toEqual([{
            isbn: "12345",
            amazon_url: "test.com",
            author: "John Smith",
            language: "Testish",
            pages: 420,
            publisher: "Test Press",
            title: "test title",
            year: 1984,
        }]);
      });

});

    afterAll(async function() {
        await db.end();
      });
      