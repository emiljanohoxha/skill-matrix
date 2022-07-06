INSERT INTO "public"."boards" ("name")
VALUES ('board1'),
  ('board2'),
  ('board3'),
  ('board4'),
  ('board5') -- handle conflicts:
  ON CONFLICT ON CONSTRAINT "boards_pkey" DO
UPDATE
SET "name" = EXCLUDED."name";