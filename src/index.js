var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('/Users/cristiano/Coding/NodeJs/woa-node/_data/woa.db');
 
db.serialize(function() {
  // db.run("CREATE TABLE lorem (info TEXT)");
 
  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  // for (var i = 0; i < 10; i++) {
  //     stmt.run("Ipsum " + i);
  // }
  // stmt.finalize();
 
  db.each("SELECT * FROM paziente", function(err, row) {
      console.log(row.nome + ' ' + row.cognome);
  });
});
 
db.close();