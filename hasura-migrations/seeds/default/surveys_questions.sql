INSERT INTO "public"."surveys_questions" ( "board_id")
VALUES
  ( '1'),
 ( '2'),
 ( '3')
-- handle conflicts:
ON CONFLICT ON CONSTRAINT "surveys_questions_pkey"
DO UPDATE SET "board_id" = EXCLUDED."board_id";
