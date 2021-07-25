const pool=require("../utils/db");
const {
    validateSignUpData,
    validateLoginData,
    reduceUserDetails,
  } = require("../utils/validators");

exports.signUp = async(req, res) => {
    console.log("signing up..")
    try {
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            pass: req.body.pass,
            roletype: req.body.roletype,
            classnum: req.body.class,
        };
        
        console.log("User credentials:");
        console.log(newUser.username);
        console.log(newUser.email);
        console.log(newUser.pass);
        console.log(newUser.roletype);
        console.log(newUser.classnum);

        const { valid, errors } = validateSignUpData(newUser);
  
        if (!valid) {
          return res.status(400).json(errors);
        }

        // have to check validity
        // const { valid, errors } = validateSignUpData(newUser);

        // check if user already exists
        pool.query("select exists(select 1 from \"Users\" where email=$1)",
            [newUser.email], (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("error");
                }
                console.log(result);
                console.log("user exists? ", result.rows[0].exists);
                if (result.rows[0].exists == true) {
                    return res.json("error");
                }
                else {
                    // check if new user
                    pool.query("INSERT INTO \"Users\"(user_name, email, password, privilege, class) VALUES($1, $2, $3, $4, $5) RETURNING user_id",
                        [newUser.username, newUser.email, newUser.pass, newUser.roletype, newUser.classnum], (err, result) => {
                            if (err) {
                                console.error('Error executing query', err.stack);
                                return res.json("error");
                            }
                            else {
                                return res.json(result.rows[0]);
                            }
                        }
                    )
                }
                    
                   
                })
     
    } catch (err) {   
        // have to handle more error code to send specific error
        console.log(err);
        return res.status(500).json({ error: err.code});
    }
}

exports.login = async(req, res) => {
    console.log("logging in..")
    try {
        const user = {
            email: req.body.email,
            pass: req.body.pass,
            roletype: req.body.roletype,
        };
        
        console.log("User credentials:");
        console.log(user.email);
        console.log(user.pass);
        console.log(user.roletype);

        const { valid, errors } = validateLoginData(user);
  
        if (!valid) {
          return res.status(400).json(errors);
        }

        // have to check validity
        // const { valid, errors } = validateSignUpData(newUser);
     
        // check if the user exists

        pool.query("select exists(select 1 from \"Users\" where email=$1 and password=$2 and privilege=$3)", 
                    [user.email, user.pass, user.roletype], (err, result) => {
            if (err) {
              console.error('Error executing query', err.stack)
              return res.json("error");
            }
            else {
                if(result.rows[0].exists == true) {

                    pool.query("select * from \"Users\" where email=$1 and password=$2 and privilege=$3", 
                    [user.email, user.pass, user.roletype], (err, result2) => {
                        if (err) {
                        console.error('Error executing query', err.stack)
                        return res.json("error");
                        }
                        else {
                            return res.json(result2.rows[0]);
                        }
                    })

                }
                else
                    return res.json("error");
            }
          })
        

        // return user profile
         //return res.json("User has successfully logged in.");
    } catch (err) {   
        console.log(err);
        return res.status(500).json({ error: err.code});
    }
}
