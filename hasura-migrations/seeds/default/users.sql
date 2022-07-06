INSERT INTO "public"."users" ( "name")
VALUES
  ( 'user2')
, ('user3')
, ( 'user4')
ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET "name" = EXCLUDED."name";
