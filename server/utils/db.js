const Pool=require("pg").Pool;

const pool=new Pool({
    user:"postgres",
    password:"",
    host:"localhost",
    port:5432,
    database:"storage"
})

module.exports=pool;

// you can create the database running finalDatabase.sql