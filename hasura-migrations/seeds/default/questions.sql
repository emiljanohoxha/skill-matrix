INSERT INTO "public"."questions" ("board_id", "question_type_id", "data")
VALUES ('1', 1, '{"text":"how do you feel444?"}'),
  ('2', 2, '{"text":"how do you feel555?"}'),
  ('3', 3, '{"text":"how do you feel666?"}'),
  ('1', 1, '{"text":"how do you feel777?"}'),
  ('2', 2, '{"text":"how do you feel888?"}'),
  ('3', 3, '{"text":"how do you feel999?"}'),
  ('1', 1, '{"text":"how do you feel111?"}'),
  ('2', 2, '{"text":"how do you feel122?"}'),
  ('3', 3, '{"text":"how do you feel133?"}') -- handle conflicts:
  ON CONFLICT ON CONSTRAINT "questions_pkey" DO
UPDATE
SET "board_id" = EXCLUDED."board_id"