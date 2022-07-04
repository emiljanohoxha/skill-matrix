CREATE TABLE IF NOT EXISTS  "public"."questions"(
    "question_id" INT GENERATED ALWAYS AS IDENTITY,
    "board_id" INT,
    "type" VARCHAR,
    "data" JSON,
    CONSTRAINT "questions_pkey" PRIMARY KEY ("question_id"),
     FOREIGN KEY(board_id)
      REFERENCES boards(board_id)
);