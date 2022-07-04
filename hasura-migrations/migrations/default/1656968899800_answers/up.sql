CREATE TABLE IF NOT EXISTS  "public"."answers"(
    "answer_id" INT GENERATED ALWAYS AS IDENTITY,
    "user_id" INT,
    "survey_id" INT,
    "question_id" INT,
    "created_at" TIMESTAMP,
    "updated_at" TIMESTAMP,
    "SCORE" INT,
    "NOTES" varchar,
    CONSTRAINT "answers_pkey" PRIMARY KEY ("answer_id"),
    FOREIGN KEY(survey_id) 
	  REFERENCES surveys(survey_id),
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id),
      FOREIGN KEY(question_id)
      REFERENCES questions(question_id)
); 