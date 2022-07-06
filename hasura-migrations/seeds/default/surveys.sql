INSERT INTO "public"."surveys" ( "board_id")
VALUES
  ( '1')
, ( '2')
, ( '3')
, ( '4')
, ( '5')
-- handle conflicts:
ON CONFLICT ON CONSTRAINT "surveys_pkey"
DO UPDATE SET "board_id" = EXCLUDED."board_id";
