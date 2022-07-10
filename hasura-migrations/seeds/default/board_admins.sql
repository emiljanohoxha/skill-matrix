INSERT INTO "public"."board_admins" ("board_admin_id", "user_id")
VALUES ('1', '1'),
  ('2', '1'),
  ('3', '1') -- handle conflicts:
  ON CONFLICT ON CONSTRAINT "board_admins_pkey" DO
UPDATE
SET "board_admin_id" = EXCLUDED."board_admin_id";