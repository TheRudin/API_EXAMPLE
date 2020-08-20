"use strict"

//Connectionstring noch mit JSON als COnfigfile auslagern
const Database = require('arangojs').Database;
const db = new Database('http://127.0.0.1:8089');

//Login data für ArangoDB
db.useBasicAuth("root", "rootpassword");

//Dem DB Treiber mitteilen, dass er folgende DB nutzen soll:
db.createDatabase('Fallstudie', function (err) {
  if (!err) console.log('Datenbank erstellt');
  else console.error('Failed to create database:', err);
});

db.useDatabase('Fallstudie');

//Die zu benutzende Collection definieren	
collection.create().then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);

const collection = db.collection('scheissCollection');

//Klassendefinitionen
class Document {
    constructor(document) {
        this.name = document;
    }
    static save(x) {
      collection.save(x).then(
      meta => console.log('Document saved:', meta._rev, x),
      err => console.error('Failed to save document:', err))
    };
    static get(x) {
      collection.all().toArray()
    };
}
module.exports=Document


//Dokument updaten mit kleiner Antwort:

/* 
collection.update('firstDocument', {d: 'qux'}).then(
  meta => console.log('Document updated:', meta._rev),
  err => console.error('Failed to update document:', err)
);
*/ 

//Dokument updaten mit grosse Antwort:


/*
collection.document('firstDocument').then(
    doc => console.log('Document:', JSON.stringify(doc, null, 2)),
    err => console.error('Failed to fetch document:', err)
  );
*/

//Dokument entfernen:

/*
collection.remove('firstDocument').then(
  () => console.log('Document removed'),
  err => console.error('Failed to remove document', err)
);
*/ 

//Alle Key values einer COllection anzeigen:

/*
collection.all().then(
  cursor => cursor.map(doc => doc._key)
).then(
  keys => console.log('All keys:', keys.join(', ')),
  err => console.error('Failed to fetch all documents:', err)
);
*/

/*
// DB erstellen

db.createDatabase('Fallstudie', function (err) {
  if (!err) console.log('Datenbank erstellt');
  else console.error('Failed to create database:', err);
});

*/

//Collection definierren:

/*
const collection = db.collection('scheissCollection');
*/

// Collection erstellen:
 
/*
collection.create().then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);

*/

//Dokumetn definieren:

/*
doc = {
  _key: 'timo.rudin@gmail.com',
  Vorname: 'Timo',
  Nachname: 'Rudin',
  c: Date()
}; 
 */
//Dokumetn abspeichern:

/*
collection.save(doc).then(
  meta => console.log('Document saved:', meta._rev),
  err => console.error('Failed to save document:', err)
);
*/
