/** Common config for bookstore. */


let DB_URI

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql://korb:123@localhost:5432/bookstore_test"
} else {
  DB_URI = process.env.DATABASE_URL || "postgresql://korb:123@localhost:5432/bookstore";
}


module.exports = { DB_URI };