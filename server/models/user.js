const conn = require('./mysql_connection');//require is part of the common js

const model = {
    getAll(cb){//cb is a function from controller
        conn.query("SELECT * FROM 2019spring_persons", (err, data) => {
            cb (err, data)
        });
    },
    get(id,cb) {
        conn.query("SELECT * FROM 2019Spring_Persons Id = ?", id, (err, data) => {
            cb (err, data)
        })

    },
    add(input,cb) {
        if (input.Password.length<8){
            cb(Error('A longer Password required.'));
        }
        conn.query("INSERT INTO 2019Spring_Persons (FirtName,LastName,Birthday,Password,created_at) VALUES (?)",
                    [[input.FirstName, input.LastName, input.Birthday, input.Password, new Date()]],
                    (err, data) => {
                        if (err) {
                            cb(err);
                            return
                        }
                        model.get(data.insertID, (err, data) => {
                            cb (err, data)
                        })
    })
  }
}

module.exports = model;