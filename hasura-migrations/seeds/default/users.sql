INSERT INTO "public"."users" ( "name")
VALUES
  ( 'user1')
ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET "name" = EXCLUDED."name";
