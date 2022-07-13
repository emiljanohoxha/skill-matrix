CREATE TABLE "public"."questions" (
  "question_id" INT GENERATED ALWAYS AS IDENTITY,
  "board_id" INT NOT NULL,
  "question_type_id" INT NOT NULL DEFAULT 1,
  "data" JSON NOT NULL,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT clock_timestamp(),
  CONSTRAINT "questions_pkey" PRIMARY KEY ("question_id"),
  CONSTRAINT "questions_board_id_fkey" FOREIGN KEY("board_id") REFERENCES "boards"("board_id")
) WITH (fillfactor = 100);