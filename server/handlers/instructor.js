const pool = require("../utils/db");

exports.uploadQues = async(req, res) => {
    console.log("Uploading Ques..");
    console.log(req.body.Question);

    // if(req.body.Question.ques_type != 'MCQ')
    //     return res.json("not inserting other than MCQ");

    if(req.body.Question.ques_type == 'MCQ') {
        const Question = {
            ques_type: req.body.Question.ques_type,
            ques_text: req.body.Question.ques_text,
            option1: req.body.Question.option1, 
            option2: req.body.Question.option2,
            option3: req.body.Question.option3,
            option4: req.body.Question.option4,
            ans_text: req.body.Question.ans_text,
            explanation: req.body.Question.explanation,
            category: req.body.Question.category, 
            // ques_fig: req.body.Question.ques_figure
        }
        // console.log(Question.ques_fig);
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
    else if(req.body.Question.ques_type == 'Matching') {
        const Question = {
            ques_type: req.body.Question.ques_type,
            ques_text1: req.body.Question.ques_text1,
            ques_text2: req.body.Question.ques_text2,
            ans_text: 'matching',
            explanation: req.body.Question.explanation,
            category: req.body.Question.category, 
            // ques_fig: req.body.Question.ques_figure
        }
        console.log(Question);

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

                            pool.query("Insert into \"Match\"(question_id, ques_left, ques_right) VALUES($1, $2, $3)",
                                    [id, Question.ques_text1, Question.ques_text2], (err, result) => {
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
                                                    return res.json("Inserted Match");
                                                }
                                        });
                                    }
                                }
                            );
                        }
                    }
                    );
                }
            });
    
            
        } catch (error) {  
            return res.json("error");      
        }
                        
    }
    else if(req.body.Question.ques_type == 'True/False') {
        const Question = {
            ques_type: req.body.Question.ques_type,
            ques_text: req.body.Question.ques_text,
            ans_text: req.body.Question.is_true,
            explanation: req.body.Question.explanation,
            category: req.body.Question.category, 
            // ques_fig: req.body.Question.ques_figure
        }
        console.log(Question);

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

                            const options = ['0', '1'];
                            pool.query("Insert into \"True_False\"(question_id, ques_text, options) VALUES($1, $2, $3)",
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
                                                    return res.json("Inserted True/False");
                                                }
                                        });
                                    }
                                }
                            );
                        }
                    }
                    );
                }
            });
    
            
        } catch (error) {  
            return res.json("error");      
        }
    }
    else {
        return res.json("Invalid Question Type");
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


exports.uploadTutorial = async(req, res) => {
    console.log("Uploading Tutorial..");
    const Tutorial = {
        subtopic_name: req.body.subtopic,
        title: req.body.title,
        about: req.body.about,
        type: req.body.type,
        text: req.body.text
    };

    console.log(Tutorial);
    console.log(JSON.stringify(Tutorial.text));

    pool.query("SELECT subtopic_id FROM \"Subtopic\" WHERE subtopic_name = $1",
    [Tutorial.subtopic_name], (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.json("error");
        }
        else {
            const subtopic_id = result.rows[0].subtopic_id;
            console.log("subtopic id = ", subtopic_id);

            // insert question paper into database
            var tutorial_id;
            pool.query("Insert into \"Tutorial\"(subtopic_id, tutorial_title, about, tutorial_text) VALUES($1, $2, $3, $4) RETURNING tutorial_id",
            [subtopic_id, Tutorial.title, Tutorial.about, JSON.stringify(Tutorial.text)], 
            (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("ERROR");
                }
                else {
                    tutorial_id = result.rows[0].tutorial_id;
                    console.log("new tutorial_id --> ", tutorial_id);
                    return res.json(tutorial_id);
                }
            }
            );
           
        }
    })


}


exports.uploadWrittenQues = async(req, res) => {
    console.log("Uploading Written Question Paper..");
    try {
        const Question = req.body;
        console.log("req body --> ", Question);
        console.log("\n ---------- start ---------- ");
        console.log("inserting question paper into database --> ");

        var exam_id;

        // insert question paper into database
        exam_id = await pool.query("Insert into \"ExamQuestion\"(exam_title, exam_type, exam_level, ques_text, ans_text, rubrik) VALUES($1, $2, $3, $4, $5, $6) RETURNING exam_id",
        [Question.title, Question.type, Question.level, Question.question_array[0].ques_text, Question.question_array[0].ans_text, JSON.stringify(Question.question_array[0].rubrik)], 
        (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
            }
            else {
                exam_id = result.rows[0].exam_id;
                console.log("new exam id --> ", exam_id);

                for(var i = 1; i<Question.question_array.length; i++) {
                    // console.log("Question --> ", Question.question_array[i]);
                    //  console.log("Rubrik");
                    // console.log("Rubrik --> ", Question.question_array[i].rubrik);
        
                    // for(var j=0; j<Question.question_array[i].rubrik.length; j++){
                    //     // console.log(Question.question_array[i].rubrik[j]);
                    // }
        
                    // insert question paper into database
                    pool.query("Insert into \"ExamQuestion\"(exam_id, exam_title, exam_type, exam_level, ques_text, ans_text, rubrik) VALUES($1, $2, $3, $4, $5, $6, $7)",
                    [exam_id, Question.title, Question.type, Question.level, Question.question_array[i].ques_text, Question.question_array[i].ans_text, JSON.stringify(Question.question_array[i].rubrik)], 
                    (err, result) => {
                        if (err) {
                            console.error('Error executing query', err.stack);
                        }
                        else {
                            // exam_id = result.rows[0].exam_id;
                            console.log("current exam id --> ", exam_id);
                        }
                    }
                    );
                }


            }
        }
        );

       
        console.log(" ---------- end ---------- ");


        


        return res.json("OK");
    } catch (error) { 
        console.log(error);    
        return res.json("ERROR");   
    }
}

// Insert into "ExamQuestion"(ques_text, ans_text, rubrik) 
// Values('question?', 'answer..', '[{"breakpoint":"formula", "marks": 2},{"breakpoint": "calculation"},{"marks": 2.3}]');

// uploading file
var path = require('path');
var multer  = require('multer');

exports.uploadFile = async(req, res) => {
}
