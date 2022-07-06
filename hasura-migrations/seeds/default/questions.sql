INSERT INTO "public"."questions" ( "board_id","type","data")
VALUES
  ( '1','type1','{"text":"how do you feel?"}')
, ( '2','type2','{"text":"how do you feel2?"}')
, ( '3','type3','{"text":"how do you feel3?"}')
-- handle conflicts:
ON CONFLICT ON CONSTRAINT "questions_pkey"
DO UPDATE SET "board_id" = EXCLUDED."board_id"
