const pool = require("../../config/database");

module.exports = {
  createAnswer: (req, res) => {
    const { answer, user_id, question_id } = req.body;

    if (!answer || !user_id || !question_id) {
      return res
        .status(400)
        .json({ msg: "Please provide all required fields" });
    }

    pool.query(
      `INSERT INTO answer(answer,user_id,question_id) VALUES (?, ?, ?)`,
      [answer, user_id, question_id],
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ msg: "Database connection error hello" });
        }

        return res.status(201).json({ msg: "Answer created successfully", data:results });
      }
    );
  },

 getAllAnswer: (req, res) => {
  pool.query(
    'SELECT * FROM answer',
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Database connection error' });
      }
     
      return res.status(200).json({ data: results });
    }
  );
},

    getAnswersForQuestion: (req, res) => {
      const { question_id } = req.params;

      pool.query(
        `SELECT answer_id, answer, question_id, registration.user_id, registration.user_name FROM answer LEFT JOIN registration ON answer.user_id = registration.user_id WHERE answer.question_id =?`,
        [question_id],
        // `SELECT * FROM answer WHERE question_id = ?`,
        // [question_id],
        (err, results) => {
          if (err) {
            console.log(err);

            return res.status(500).json({ msg: "Database connection error" });
          }

          return res.status(200).json({ data: results });
        }
      );
    },
};

