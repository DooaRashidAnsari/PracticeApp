import SQLite from "react-native-sqlite-storage";
import { Alert } from 'react-native'
import strings from './resources/Strings'
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import Session from './Session'
const session = new Session()



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
      tx.executeSql('CREATE TABLE IF NOT EXISTS User (user_id INTEGER PRIMARY KEY AUTOINCREMENT,Name,Password)');
      tx.executeSql('CREATE TABLE IF NOT EXISTS Todo (work_id INTEGER PRIMARY KEY AUTOINCREMENT,Work,Desc,Date,user_id)');
    }).then(() => {
      console.log("Table created successfully");
      this.closeDatabase(db)
    }).catch(error => {
      console.log(error);
    });
  }


  insertWork(work, desc,userId) {
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      )
        .then(DB => {
          DB.transaction((tx) => {
            tx.executeSql('INSERT INTO Todo (Work,Desc,Date,user_id) VALUES (?,?,?,?)', [work, desc, moment().format('LL'),userId]).then(([tx, results]) => {

            });
            resolve('inserted');
          }).then((result) => {

            // this.closeDatabase(DB);
            //Alert.alert(strings.toDoAdded);

          }).catch((err) => {
            console.log(err);
          });

        }).catch(error => {
          console.log(error);
        });

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
            tx.executeSql('SELECT Work,Desc,Date,work_id FROM Todo ORDER BY work_id DESC').then(([tx, results]) => {
              console.log("Query completed");
              var len = results.rows.length;
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                //console.log(`Work: ${row.Work}`)
                const { Work, Desc, Date, work_id } = row;
                works.push({
                  key: work_id,
                  work: Work,
                  desc: Desc,
                  date: Date,
                  isDescView: false
                });
              }
              resolve(works);
            });
          }).then((result) => {
            // this.closeDatabase(DB);

          }).catch((err) => {
            console.log(err);
          });

        }).catch(error => {
          console.log(error);
        });

    });
  }

  listWorksToday(userId) {
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
            tx.executeSql('SELECT Work,Desc,Date,work_id FROM Todo Where Date = ? AND user_id = ? ORDER BY work_id DESC', [moment().format('LL'),userId]).then(([tx, results]) => {
              console.log("Query completed");
              var len = results.rows.length;
              for (let i = 0; i < len; i++) {
                let row = results.rows.item(i);
                console.log(`Work: ${row.Work}`)
                const { Work, Desc, Date, work_id } = row;
                works.push({
                  key: work_id,
                  work: Work,
                  desc: Desc,
                  date: Date,
                  isDescView: false
                });
              }
              resolve(works);
            });
          }).then((result) => {
            // this.closeDatabase(DB);

          }).catch((err) => {
            console.log(err);
          });

        }).catch(error => {
          console.log(error);
        });

    });
  }

  insertUser(username, password) {
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      )
        .then(DB => {
          DB.transaction((tx) => {
            tx.executeSql('INSERT INTO User (Name,Password) VALUES (?,?)', [username, password]).then(([tx, results]) => {
              session.saveUserId(results.insertId).then(() => {
                console.log('create result')
                console.log(results)
                resolve(results.insertId);   
              })
             
            });
          }).then((result) => {
            //this.closeDatabase(DB);
            //Alert.alert(strings.userCreated);

          }).catch((err) => {
            console.log(err);
          });

        }).catch(error => {
          console.log(error);
        });


    });


  }

  updateWork(id, newValue, descValue) {
    return new Promise((resolve) => {
      console.log(id)
      console.log(newValue)
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      ).then(DB => {
        DB.transaction((tx) => {
          console.log('updating db')
          //  SELECT Work,work_id FROM Todo
          tx.executeSql('UPDATE Todo SET Work = ?,Desc = ? WHERE work_id = ?', [newValue, descValue, id]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          //this.closeDatabase(DB);
          //Alert.alert(strings.updatedValue);

        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });

    });


  }

  deleteWork(id) {
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      ).then(DB => {
        DB.transaction((tx) => {
          console.log('deleting value')
          //  SELECT Work,work_id FROM Todo
          tx.executeSql('DELETE FROM Todo WHERE work_id = ?', [id]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(DB);
          //Alert.alert(strings.updatedValue);

        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });

    });


  }

  deleteAll(userId) {
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      ).then(DB => {
        DB.transaction((tx) => {
          console.log('deleting all value')
          //  SELECT Work,work_id FROM Todo
          tx.executeSql('DELETE FROM Todo WHERE user_id = ?',[userId]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(DB);
          //Alert.alert(strings.updatedValue);

        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });

    });


  }

  deleteAllTodays(userId) {
    return new Promise((resolve) => {
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size
      ).then(DB => {
        DB.transaction((tx) => {
          console.log('deleting all value')
          //  SELECT Work,work_id FROM Todo
          tx.executeSql('DELETE FROM Todo WHERE user_id = ? AND Date = ?',[userId,moment().format('LL')]).then(([tx, results]) => {
            resolve(results);
          });
        }).then((result) => {
          this.closeDatabase(DB);
          //Alert.alert(strings.updatedValue);

        }).catch((err) => {
          console.log(err);
        });

      }).catch(error => {
        console.log(error);
      });

    });


  }



  searchUser(username, password, execute) {
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
            let isFound = false
            if (len > 0) isFound = true
            console.log('Saved userid')
            //console.log(results.rows.item(0).user_id)
            session.saveUserId(results.rows.item(0).user_id).then(() => {
              //console.log('after saved user'
             // )
              //console.log(result+'')
              if (isFound)
                execute(isFound)
            })
            
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