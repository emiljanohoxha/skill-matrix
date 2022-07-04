CREATE TABLE IF NOT EXISTS  "public"."survey_questions"(
    "survey_question_id" INT ,
    "question_id" INT,
    "type" VARCHAR,
    "data" JSON,
    CONSTRAINT "survey_questions_pkey" PRIMARY KEY ("survey_question_id"),
     FOREIGN KEY(survey_question_id)
      REFERENCES surveys(survey_id),
      FOREIGN KEY(question_id)
      REFERENCES questions(question_id)
);