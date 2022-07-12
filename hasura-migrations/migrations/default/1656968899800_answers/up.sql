CREATE TABLE IF NOT EXISTS "public"."answers"(
    "answer_id" INT GENERATED ALWAYS AS IDENTITY,
    "user_id" INT,
    "board_id" INT,
    "question_id" INT,
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP,
    "SCORE" INT DEFAULT 0,
    "NOTES" varchar DEFAULT '',
    "data" JSON NOT NULL DEFAULT '{}',
    CONSTRAINT "answers_pkey" PRIMARY KEY ("user_id", "question_id"),
    FOREIGN KEY(board_id) REFERENCES boards(board_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);