const pool = require("../utils/db");

exports.uploadQues = async(req, res) => {
    console.log("Uploading Ques..");
    console.log(req.body.Question);

    // if(req.body.Question.ques_type != 'MCQ')
    //     return res.json("not inserting other than MCQ");

    if(req.body.Question.ques_type == 'MCQ') {
        const Question = {
            user_id: req.body.Question.user_id,
            ques_type: req.body.Question.ques_type,
            ques_text: req.body.Question.ques_text,
            option1: req.body.Question.option1, 
            option2: req.body.Question.option2,
            option3: req.body.Question.option3,
            option4: req.body.Question.option4,
            ans_text: req.body.Question.ans_text,
            explanation: req.body.Question.explanation,
            category: req.body.Question.category, 
            difficulty_level: req.body.Question.difficulty_level
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
    
                    pool.query("Insert into \"Question\"(ques_type, category_id, ques_status, created_by, level) VALUES($1, $2, $3, $4, $5) RETURNING question_id",
                    [1, id, 0, Question.user_id, Question.difficulty_level], (err, result) => {
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
                                                    return res.json(id);
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
            user_id: req.body.Question.user_id,
            ques_type: req.body.Question.ques_type,
            ques_text1: req.body.Question.ques_text1,
            ques_text2: req.body.Question.ques_text2,
            ans_text: 'matching',
            explanation: req.body.Question.explanation,
            category: req.body.Question.category, 
            difficulty_level: req.body.Question.difficulty_level
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
    
                    pool.query("Insert into \"Question\"(ques_type, category_id, ques_status, created_by, level) VALUES($1, $2, $3, $4, $5) RETURNING question_id",
                    [1, id, 0, Question.user_id, Question.difficulty_level], (err, result) => {
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
                                                    return res.json(id);
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
            user_id: req.body.Question.user_id,
            ques_type: req.body.Question.ques_type,
            ques_text: req.body.Question.ques_text,
            ans_text: req.body.Question.is_true,
            explanation: req.body.Question.explanation,
            category: req.body.Question.category, 
            difficulty_level: req.body.Question.difficulty_level
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
    
                    pool.query("Insert into \"Question\"(ques_type, category_id, ques_status, created_by, level) VALUES($1, $2, $3, $4, $5) RETURNING question_id",
                    [1, id, 0, Question.user_id, Question.difficulty_level], (err, result) => {
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
                                                    return res.json(id);
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
        user_id: req.body.user_id,
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
            pool.query("Insert into \"Tutorial\"(subtopic_id, tutorial_title, about, tutorial_text, created_by) VALUES($1, $2, $3, $4, $5) RETURNING tutorial_id",
            [subtopic_id, Tutorial.title, Tutorial.about, JSON.stringify(Tutorial.text), Tutorial.user_id], 
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

        var exam_id;
        var ques_id_list = [];

        // insert question paper into database
        await pool.query("Insert into \"ExamQuestion\"(exam_title, exam_type, exam_level, ques_text, ans_text, rubrik, created_by, ques_status) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING exam_id, question_id",
        [Question.title, Question.type, Question.level, Question.question_array[0].ques_text, Question.question_array[0].ans_text, JSON.stringify(Question.question_array[0].rubrik), Question.user_id, 0], 
        (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
            }
            else {
                exam_id = result.rows[0].exam_id;
                console.log("new exam id --> ", exam_id);
                ques_id_list.push(result.rows[0].question_id);

                if(Question.question_array.length == 1) {
                    console.log("will return this ques_id list --> ", ques_id_list);
                    // have to return the ques ids
                    return res.json(ques_id_list);
                }

                for(var i = 1; i<Question.question_array.length; i++) {
        
                    // insert question paper into database
                    pool.query("Insert into \"ExamQuestion\"(exam_id, exam_title, exam_type, exam_level, ques_text, ans_text, rubrik, created_by, ques_status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING question_id",
                    [exam_id, Question.title, Question.type, Question.level, Question.question_array[i].ques_text, Question.question_array[i].ans_text, JSON.stringify(Question.question_array[i].rubrik), Question.user_id, 0], 
                    (err, result2) => {
                        if (err) {
                            console.error('Error executing query', err.stack);
                        }
                        else {
                            // exam_id = result.rows[0].exam_id;
                            const q_id = result2.rows[0].question_id;
                            ques_id_list.push(q_id);

                            console.log(i, " --> ", Question.question_array.length);

                            if(i == Question.question_array.length) {
                                console.log("will return this ques_id list --> ", ques_id_list);
                                // have to return the ques ids
                                return res.json(ques_id_list);
                            }
                        }
                    }
                    );

                    
                }

                

            }
        }
        
        );
       
    } catch (error) { 
        console.log(error);    
        return res.json("ERROR");   
    }
}

exports.getAnswerPapers = async(req, res) => {
    console.log("Request for answer papers");

    const status = 0;
    try {
            pool.query("SELECT * FROM \"ExamAnswer\" WHERE answer_status = $1",
            [status], (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("error");
                }
                else {
                    // search for subtopics under this topic id
                    const papers = result.rows;
                    console.log("answer papers --> ", papers);
                    return res.json(papers);
                }
            });
    } catch (error) { 
        console.log(error);  
        return res.json(error);     
    }
}

exports.loadQues = async(req, res) => {
    const question_id = req.params.id;
    console.log("loading the question no ", question_id);

    try {
        pool.query("SELECT * FROM \"ExamQuestion\" WHERE question_id = $1",
        [question_id], (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return res.json("error");
            }
            else {
                // search for subtopics under this topic id
                const ques = result.rows[0];
                console.log("answer papers --> ", ques);
                return res.json(ques);
            }
        });
    } catch (error) { 
        console.log(error);  
        return res.json(error);     
    }
}


exports.gradeAns = async(req, res) => {
    const user_id = req.params.id;
    console.log("graded by --> ", user_id);

    const answer_id = req.body.answer_id;
    const rubrik = req.body.rubrik;
    console.log("inserting grades for answer id ", answer_id);
    console.log("grades --> ", rubrik);

    const status = 1;
    try {
            pool.query("UPDATE \"ExamAnswer\" SET rubrik=$1, answer_status=$2, evaluated_by=$4 WHERE answer_id = $3",
            [JSON.stringify(rubrik), status, answer_id, user_id], (err, result) => {
                if (err) {
                    console.error('Error executing query', err.stack);
                    return res.json("error");
                }
                else {
                    return res.json("OK");
                }
            });
    } catch (error) { 
        console.log(error);  
        return res.json("error");     
    }
}

exports.loadForwaredQues = async(req, res) => {
    console.log("loading forwarded questions");
    const user_id = req.params.id;

    const status = 2;
    try {
        pool.query("SELECT * FROM \"ExamQuestion\" WHERE ques_status = $1 AND created_by=$2",
        [status, user_id], (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return res.json("error");
            }
            else {
                // search for subtopics under this topic id
                const ques = result.rows;
                console.log("forwarded questions --> ", ques);
                return res.json(ques);
            }
        });
    } catch (error) { 
        console.log(error);  
        return res.json(error);     
    }
}

exports.uploadRevisedQues = async(req, res) => {
    const Question = req.body;
    console.log("Updating revised ques --> ", Question);

    // insert question paper into database
    const status = 3;
    pool.query("UPDATE \"ExamQuestion\" SET ques_text = $1, ans_text = $2, rubrik = $3, ques_status=$5 WHERE question_id = $4",
    [Question.ques_text, Question.ans_text, JSON.stringify(Question.rubrik), Question.question_id, status], 
    (err, result) => {
        if (err) {
            console.error('Error executing query', err.stack);
            return res.json(error);
        }
        else {
            return res.json("OK");
        }
    }
    );
}

exports.infoProblemWeek = async(req, res) => {
    const status = 1;
    try {
        pool.query("SELECT * FROM \"Problems_of_the_week\" WHERE this_week = $1",
        [status], (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return res.json("error");
            }
            else {
                // search for subtopics under this topic id
                const POW = result.rows;
                console.log("POW --> ", POW);
                return res.json(POW);
            }
        });
    } catch (error) { 
        console.log(error);  
        return res.json(error);     
    }
}

exports.contributionIn = async(req, res) => {
    const privilege = 'instructor';
    try {
        pool.query("SELECT * FROM \"Users\" WHERE privilege=$1",
        [privilege], (err, result) => {
            if (err) {
                console.error('Error executing query', err.stack);
                return res.json("error");
            }
            else {
                const users = result.rows;
                // console.log("users --> ", users);
                for(var i = 0; i<users.length; i++) {
                    const userID = users[i].user_id;
                    var contri = 0;
                    pool.query("SELECT COUNT(*) FROM \"Question\" WHERE created_by=$1 AND ques_status=1",
                        [userID], (err, result) => {
                            if (err) {
                                console.error('Error executing query', err.stack);
                                return res.json("error");
                            }
                            else {
                                // console.log(result.rows[0].count)
                                contri = contri + parseInt(result.rows[0].count);

                                pool.query("SELECT COUNT(*) FROM \"ExamQuestion\" WHERE created_by=$1 AND ques_status=1",
                                [userID], (err, result2) => {
                                    if (err) {
                                        console.error('Error executing query', err.stack);
                                        return res.json("error");
                                    }
                                    else {
                                        // console.log(result.rows[0].count)
                                        contri = contri +  parseInt(result2.rows[0].count);


                                        pool.query("SELECT COUNT(*) FROM \"Tutorial\" WHERE created_by=$1 AND tutorial_status=1",
                                        [userID], (err, result3) => {
                                            if (err) {
                                                console.error('Error executing query', err.stack);
                                                return res.json("error");
                                            }
                                            else {
                                                // console.log(result.rows[0].count)
                                                contri = contri +  parseInt(result3.rows[0].count);

                                                pool.query("SELECT COUNT(*) FROM \"ExamAnswer\" WHERE evaluated_by=$1",
                                                [userID], (err, result4) => {
                                                    if (err) {
                                                        console.error('Error executing query', err.stack);
                                                        return res.json("error");
                                                    }
                                                    else {
                                                        // console.log(result.rows[0].count)
                                                        contri = contri +  parseInt(result4.rows[0].count);

                                                        // -------------------------- update in users table, contribution
                                                        pool.query("UPDATE \"Users\" SET contribution=$1 WHERE user_id = $2",
                                                        [contri, userID], (err, result) => {
                                                            if (err) {
                                                                console.error('Error executing query', err.stack);
                                                                return res.json("error");
                                                            }
                                                            else {
                                                                // return res.json("OK");
                                                                // console.log(userID, " contributed --> ", contri);
                                                            }
                                                        });


                                                    }
                                                });


                                            }
                                        });


                                    }
                                });


                            }
                        });


                        if(i+1 == users.length) {
                            pool.query("SELECT * FROM \"Users\" ORDER BY contribution ASC",
                            [], (err, result) => {
                                if (err) {
                                    console.error('Error executing query', err.stack);
                                    return res.json("error");
                                }
                                else {
                                    // return res.json("OK");
                                    var newArray = result.rows.slice(0, 4);
                                    console.log("top contributed --> ", newArray);
                                    return res.json(newArray);
                                }
                            });
                        }
                        else {
                            console.log("top contributed --> ");
                        }

                }
            }
        });
    } catch (error) { 
        console.log(error);  
        return res.json(error);     
    }

}