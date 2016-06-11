var sqlite3 = require('sqlite3').verbose();
var _ = require('lodash');
var extend = require('util')._extend;


module.exports = {
res : [],
  findAll: function(callback) {
	//var res = [];
	var pippo = 0;

	var db = new sqlite3.Database('/Users/cristiano/Coding/NodeJs/woa-node/data/woa.db');
	 
	//db.serialize(function() {
	  // db.run("CREATE TABLE lorem (info TEXT)");
	 
	  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
	  // for (var i = 0; i < 10; i++) {
	  //     stmt.run("Ipsum " + i);
	  // }
	  // stmt.finalize();


	      pippo =10000;
	 
	  db.all("SELECT * FROM paziente", function(err, rows) {
	      callback(err, rows);  
	  });


	//});
	 
	db.close();
  },
       
  sayHelloInSpanish: function() {
    return "Hola";
  }
};