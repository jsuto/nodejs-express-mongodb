const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_URI = process.env.DB_URI

module.exports = {
  url: "mongodb+srv://" + DB_USER + ":" + DB_PASSWORD + "@" + DB_URI
};
