INSERT INTO "public"."questions" ("board_id", "question_type_id", "data")
VALUES ('1', 1, '{"text":"How much do you like React Js?"}'),
  ('2', 2, '{"text":"How much do you like Python?"}'),
  ('3', 3, '{"text":"Have you ever heard of Hasura?"}'),
  ('1', 1, '{"text":"How much do you like Haskell?"}'),
  ('2', 2, '{"text":"How much do you like Elixir?"}'),
  ('3', 3, '{"text":"Have you ever heard of Clojure?"}'),
  ('1', 1, '{"text":"How much do you like Java?"}'),
  ('2', 2, '{"text":"How much do you like Javascript?"}'),
  ('3', 3, '{"text":"Have you ever heard of Scheme?"}') -- handle conflicts:
  ON CONFLICT ON CONSTRAINT "questions_pkey" DO
UPDATE
SET "board_id" = EXCLUDED."board_id"