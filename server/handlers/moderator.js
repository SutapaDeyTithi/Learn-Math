const pool = require("../utils/db");

/*exports.getTODOS = async (req, res) => {
  console.log("Request for todos");
  try {
    const alltodos = await pool.query('SELECT * FROM "TODO"');
    res.json(alltodos.rows);
  } catch (error) {
    console.error(error.message)
  }
};

exports.postTODOS = async (req, res) => {
  console.log("POST for todos");
  try {
    const {work,pseudo} = req.body
    console.log(work);

    const newTODO = await pool.query("INSERT INTO \"TODO\"(work,pseudo) VALUES($1,$2) RETURNING *",[work,pseudo])

    res.json(newTODO);
  } catch (error) {}
};*/


exports.get_forum_ques = async (req, res) => {
  console.log("Request for forum question");
  try {
    const allques = await pool.query('SELECT * FROM "Forum_question"');
    res.json(allques.rows);
  } catch (error) {
    console.error(error.message);
  }
};

exports.get_Topic = async (req, res) => {
  console.log("Request for topic");
  try {
    const allTopic = await pool.query('SELECT * FROM "Topic"');
    res.json(allTopic.rows);
  } catch (error) {
    console.error(error.message);
  }
};

exports.get_forum_answer = async (req, res) => {
  //console.log("Request for topic");
  try {
    const allAns = await pool.query('SELECT * FROM "Forum_answer"');
    res.json(allAns.rows);
  } catch (error) {
    console.error(error.message);
  }
};

exports.get_User = async (req, res) => {
  //console.log("Request for topic");
  try {
    const allUser = await pool.query('SELECT * FROM "Users"');
    res.json(allUser.rows);
  } catch (error) {
    console.error(error.message);
  }
};

exports.post_forum_ques = async (req, res) => {
  console.log("POST for forum_ques");
  try {
    console.log("Uploading ques..");

    const {
      user_id,
      topic_name,
      forum_text,
      figures,
      link,
      upvote,
      downvote,
      posted,
      name,
    } = req.body;


    const new_ques = await pool.query(
      "INSERT INTO \"Forum_question\"(user_id,topic_name,forum_text,figures,link,upvote,downvote,posted,name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
      [
        user_id,
        topic_name,
        forum_text,
        figures,
        link,
        upvote,
        downvote,
        posted,
        name,
      ]
    );

    res.json(new_ques);
  } catch (error) {}
};

exports.postforums = async (req, res) => {
  console.log("POST for forum");
  try {
    const { user_id, topic_name, forum_text, upvote, downvote,posted,name } = req.body;
    console.log(user_id,topic_name)
    const newTODO = await pool.query(
      'INSERT INTO "Forum_question"(user_id,topic_name,forum_text,upvote,downvote,posted,name) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *',
      [user_id, topic_name, forum_text,upvote,downvote,posted,name]
    );

    res.json(newTODO);
  } catch (error) {}
};

/*

const {
      user_id,
      topic_name,
      forum_text,
      figures,
      link,
      upvote,
      downvote,
      posted,
      name,
    } = req.body;



    'INSERT INTO "Forum_question"(user_id,topic_name,forum_text,figures,link,upvote,downvote,posted,name) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
      [
        user_id,
        topic_name,
        forum_text,
        figures,
        link,
        upvote,
        downvote,
        posted,
        name,
      ]
    );

*/