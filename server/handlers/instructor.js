const pool = require("../utils/db");

exports.uploadQues = async(req, res) => {
    console.log("Uploading Ques..");
    // console.log(req.body.Question);
    const Question = {
        ques_type: req.body.Question.ques_type,
        ques_text: req.body.Question.ques_text,
        option1: req.body.Question.option1, 
        option2: req.body.Question.option2,
        option3: req.body.Question.option3,
        option4: req.body.Question.option4,
        ans_text: req.body.Question.ans_text,
        explanation: req.body.Question.explanation,
        category: req.body.Question.category
    }
    console.log(Question);
    const options = [Question.option1, Question.option2, Question.option3, Question.option4];

    try {   
        pool.query("SELECT * FROM \"Category\" WHERE category_name = $1",
        [Question.category], (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return res.json("error");
            }
            else {
                const id = result.rows[0].category_id;

                pool.query("Insert into \"Question\"(ques_type, category_id, ques_status) VALUES($1, $2, $3) RETURNING question_id",
                [1, id, 0], (err, result) => {
                    if (err) {
                        console.error('Error executing query', err.stack);
                    }
                    else {
                        const id = result.rows[0].question_id;

                        pool.query("Insert into \"MCQ\"(question_id, ques_text, options) VALUES($1, $2, $3)",
                                [id, Question.ques_text, options], (err, result) => {
                                    if (err) {
                                        console.error('Error executing query', err.stack);
                                        return res.json("error");
                                    }
                                    else {
                                        pool.query("Insert into \"Answer\"(question_id, ans_text) VALUES($1, $2)",
                                        [id, Question.ans_text], (err, result) => {
                                            if (err) {
                                                console.error('Error executing query', err.stack);
                                                return res.json("error");
                                            }
                                            else {
                                                return res.json("Inserted MCQ");
                                            }
                                    });
                                }
                            }
                        );
                    }
                });

            }
        });

        
    } catch (error) {  
        return res.json("error");      
    }
}


exports.getSubtopic_from_a_topic = async(req, res) => {
    console.log("Request for subtopics");
    console.log("req --> ", req.query.topic_name);
    const topic_name = req.query.topic_name;
    console.log("topic name --> ", topic_name)
    try {
            pool.query("SELECT * FROM \"Topic\" WHERE topic_name = $1",
            [topic_name], (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("error");
                }
                else {
                    // search for subtopics under this topic id
                    const topic_id = result.rows[0].topic_id;
                    console.log("topic id --> ", topic_id);

                    pool.query("SELECT * FROM \"Subtopic\" WHERE topic_id = $1",
                    [topic_id], (err, result) => {
                        if (err) {
                            console.error('Error executing query', err.stack);
                            return res.json("error");
                        }
                        else {
                            console.log("subtopics for topic = ", topic_name, " --> ");
                            const subtopic_array = [];
                            console.log(result.rows);
                            for(let i = 0; i<result.rows.length; i++)
                                subtopic_array.push(result.rows[i].subtopic_name);
                            return res.json(subtopic_array);
                        }
                    })
                }
            });


        // const newsub=await pool.query("SELECT * FROM \"Subtopic\" WHERE ");
        // console.log(newsub.rows);
        // res.json(newsub.rows);
    } catch (error) { 
        console.log(error);       
    }
}

exports.getCategory_from_a_subtopic = async(req, res) => {
    console.log("Request for categories");
    console.log("req --> ", req.query.subtopic_name);
    const subtopic_name = req.query.subtopic_name;
    console.log("subtopic name --> ", subtopic_name)
    try {
            pool.query("SELECT * FROM \"Subtopic\" WHERE subtopic_name = $1",
            [subtopic_name], (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("error");
                }
                else {
                    // search for subtopics under this topic id
                    const subtopic_id = result.rows[0].subtopic_id;
                    console.log("topic id --> ", subtopic_id);

                    pool.query("SELECT * FROM \"Category\" WHERE subtopic_id = $1",
                    [subtopic_id], (err, result) => {
                        if (err) {
                            console.error('Error executing query', err.stack);
                            return res.json("error");
                        }
                        else {
                            console.log("categories for topic = ", subtopic_name, " --> ");
                            const category_array = [];
                            console.log(result.rows);
                            for(let i = 0; i<result.rows.length; i++)
                                category_array.push(result.rows[i].category_name);
                            return res.json(category_array);
                        }
                    })
                }
            });


        // const newsub=await pool.query("SELECT * FROM \"Subtopic\" WHERE ");
        // console.log(newsub.rows);
        // res.json(newsub.rows);
    } catch (error) { 
        console.log(error);       
    }
}