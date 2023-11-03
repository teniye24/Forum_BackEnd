const pool = require("../../config/database");

module.exports = {
  createQuestion: (req, res) => {
    const { question, question_description, user_id } = req.body;
    // const {  user_id } = req.users;

    if (!question) {
      return res
        .status(400)
        .json({ msg: "Please provide all required fields" });
    }

    pool.query(
      `INSERT INTO question (question, question_description, user_id) VALUES (?, ?, ?)`,
      [question, question_description, user_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ msg: "Database connection error" });
        }
        return res.status(201).json({ msg: "Question created successfully" });
      }
    );
  },

  getQuestions: (req, res) => {
    pool.query(`SELECT * FROM question`, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({ data: results });
    });
  },
};
