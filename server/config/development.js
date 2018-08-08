module.exports = {
  // enabled logging for development
  logging: true,
  // database connection
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  }
};
