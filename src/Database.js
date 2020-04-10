import SQLite from "react-native-sqlite-storage";
import { Alert} from 'react-native'
import strings from './resources/Strings'
SQLite.DEBUG(true);
SQLite.enablePromise(true);
const database_name = "Reactoffline.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;


export default class Database {

  closeDatabase(db) {
    if (db) {
      console.log("Closing DB");
      db.close()
        .then(status => {
          console.log("Database CLOSED");
        })
        .catch(error => {
          this.errorCB(error);
        });
    } else {
      console.log("Database was not OPENED");
    }
  };


  initDB() {
    let db;
    return new Promise((resolve) => {
      this.openDatabase()
      
    });
  };


  openDatabase() {
    SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size
    )
      .then(DB => {
        this.createTables(DB)
      }).catch(error => {
        console.log(error);
      });
  }

  createTables(db) {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS User (Name,Password)');
      tx.executeSql('CREATE TABLE IF NOT EXISTS Todo (Work)');
    }).then(() => {
      console.log("Table created successfully");
      this.closeDatabase(db)
    }).catch(error => {
      console.log(error);
    });
  }


  insertWork(work) {
    SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size
    )
      .then(DB => {
        DB.transaction((tx) => {
          tx.executeSql('INSERT INTO Todo VALUES (?)', [work]).then(([tx, results]) => {
            
          });
        }).then((result) => {
          this.closeDatabase(DB);
          Alert.alert(strings.toDoAdded);

        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });


  }


  listWorks() {
    const works = [];
      
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      )
        .then(DB => {
          DB.transaction((tx) => {
            tx.executeSql('SELECT Work FROM Todo', []).then(([tx,results]) => {
              console.log("Query completed");
              var len = results.rows.length;
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                console.log(`Work: ${row.Work}`)
                const {Work} = row;
                works.push({
                  key:i,
                  work :Work
                });
              }
              resolve(works);
            });
          }).then((result) => {
            this.closeDatabase(db);
          }).catch((err) => {
            console.log(err);
          });  
  
        }).catch(error => {
          console.log(error);
        });
         
    });  
  }


  insertUser(username, password) {
    SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size
    )
      .then(DB => {
        DB.transaction((tx) => {
          tx.executeSql('INSERT INTO User VALUES (?,?)', [username, password]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(DB);
          Alert.alert(strings.userCreated);

        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });


  }

  searchUser(username,password,execute){
    var len = 0
    SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size
    )
      .then(DB => {
        DB.transaction((tx) => {
          tx.executeSql('SELECT * FROM User WHERE Name = ? AND Password = ? ', [username, password]).then(([tx, results]) => {
            len = results.rows.length;
            console.log(len)
            if(len > 0)
                 execute()
          });
        }).then((result) => {
          this.closeDatabase(DB);
    
        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });

  }

}