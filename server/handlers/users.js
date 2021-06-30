const pool=require("../utils/db");

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

        // have to check validity
        // const { valid, errors } = validateSignUpData(newUser);
     
        const newsub = await pool.query("INSERT INTO \"Users\"(user_name, email, password, privilege, class) VALUES($1, $2, $3, $4, $5)", 
                                        [newUser.username, newUser.email, newUser.pass, newUser.roletype, newUser.classnum]);
        
                                        // console.log("inserted");
        // INSERT INTO subtopics(topicName,subtopic_name) VALUES('Algebra','GCD/LCM')
        return res.json(newsub);
    } catch (err) {   
        // have to handle more error code to send specific error
        console.log(err);
        return res.status(500).json({ error: err.code});
    }
}

exports.login = (req, res) => {
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

        // have to check validity
        // const { valid, errors } = validateSignUpData(newUser);
     
        // check if the user exists
        

        // return user profile
         return res.json("User has successfully logged in.");
    } catch (err) {   
        console.log(err);
        return res.status(500).json({ error: err.code});
    }
}
