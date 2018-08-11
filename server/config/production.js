module.exports = {
  // disbable logging for production
  logging: false,
  // database connection
  db: {
  	dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
};
