INSERT INTO "public"."users" ( "name")
VALUES
  ( 'user2')
, ('user3')
, ( 'user4')

ON CONFLICT ON CONSTRAINT "users_pkey"
DO UPDATE SET "name" = EXCLUDED."name";


INSERT INTO "public"."boards" ( "name")
VALUES
  ( 'board1')
, ( 'board2')
, ( 'board3')
, ( 'board4')
, ( 'board5')
-- handle conflicts:
ON CONFLICT ON CONSTRAINT "boards_pkey"
DO UPDATE SET "name" = EXCLUDED."name";

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


INSERT INTO "public"."board_admins" ( "board_admin_id","user_id")
VALUES
  ( '1','1')
, ( '2','2')
, ( '3','3')

-- handle conflicts:
ON CONFLICT ON CONSTRAINT "board_admins_pkey"
DO UPDATE SET "board_admin_id" = EXCLUDED."board_admin_id"

INSERT INTO "public"."questions" ( "board_id","type","data")
VALUES
  ( '1','type1','{"text":"how do you feel?"}')
, ( '2','type2','{"text":"how do you feel2?"}')
, ( '3','type3','{"text":"how do you feel3?"}')

-- handle conflicts:
ON CONFLICT ON CONSTRAINT "questions_pkey"
DO UPDATE SET "board_id" = EXCLUDED."board_id"

INSERT INTO "public"."surveys_questions" ( "board_id")
VALUES
  ( '1'),
 ( '2'),
 ( '3')

-- handle conflicts:
ON CONFLICT ON CONSTRAINT "surveys_questions_pkey"
DO UPDATE SET "board_id" = EXCLUDED."board_id"
