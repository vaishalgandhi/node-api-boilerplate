var db=require('../../db-connect');

var Test = {
	tabelName: 'test',
	primaryKey: 'id',
	all:function(callback){
		return db.query(`Select * from ${this.tabelName}`,callback);
	},
	find:function(id, callback){
		return db.query(`select * from ${this.tabelName} where ${this.primaryKey}=?`, [id], callback);
	},
	insert:function(Test, callback){
		return db.query(`Insert into ${this.tabelName} (title, body) values(?,?)`,[Test.title,Test.body],callback);
	},
	update:function(id, Test, callback){
		return db.query(`update ${this.tabelName} set title=?, body=? where ${this.primaryKey}=?`,[Test.title,Test.body,id],callback);
	},
	delete:function(id, callback){
		return db.query(`delete from ${this.tabelName} where ${this.primaryKey}=?`,[id],callback);
	}
};

module.exports=Test;