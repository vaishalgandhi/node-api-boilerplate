const db = require('../../database/db-connect');

const Model = {
  tabelName: 'test',
  primaryKey: 'id',
  all: (cb) => {
    return db.query(`SELECT * FROM ${Model.tabelName}`, cb);
  },
  find: (id, cb) => {
    return db.query(`SELECT * FROM ${Model.tabelName} WHERE ${Model.primaryKey}=?`, [id], cb);
  },
  insert: (Note, cb) => {
    return db.query(`INSERT INTO ${Model.tabelName} (title, body) VALUES (?,?)`, [Note.title,Note.body], cb);
  },
  update: (id, Note, cb) => {
    return db.query(`UPDATE ${Model.tabelName} SET title=?, body=? WHERE ${Model.primaryKey}=?`, [Note.title,Note.body,id], cb);
  },
  delete: (id, cb) => {
    return db.query(`DELETE FROM ${Model.tabelName} WHERE ${Model.primaryKey}=?`, [id], cb);
  }
};

module.exports = Model;