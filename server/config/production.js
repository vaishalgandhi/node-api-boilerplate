module.exports = {
  // disbable logging for production
  logging: false,
  // database connection
  db: {
  	dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
};
