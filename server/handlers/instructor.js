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
        explanation: req.body.Question.explanation
    }
    console.log(Question);
    const options = [Question.option1, Question.option2, Question.option3, Question.option4];

    try {   
        pool.query("Insert into \"Question\"(ques_type, category_id) VALUES($1, $2) RETURNING question_id",
        [1, 1], (err, result) => {
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
    } catch (error) {  
        return res.json("error");      
    }
}
