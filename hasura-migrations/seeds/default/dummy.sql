-- INSERT INTO "public"."users" ( "name")
-- VALUES
--   ( 'user2')
-- , ('user3')
-- , ( 'user4')

-- ON CONFLICT ON CONSTRAINT "users_pkey"
-- DO UPDATE SET "name" = EXCLUDED."name";


-- INSERT INTO "public"."boards" ( "name")
-- VALUES
--   ( 'board1')
-- , ( 'board2')
-- , ( 'board3')
-- , ( 'board4')
-- , ( 'board5')
-- -- handle conflicts:
-- ON CONFLICT ON CONSTRAINT "boards_pkey"
-- DO UPDATE SET "name" = EXCLUDED."name";

-- INSERT INTO "public"."surveys" ( "board_id")
-- VALUES
--   ( '1')
-- , ( '2')
-- , ( '3')
-- , ( '4')
-- , ( '5')
-- -- handle conflicts:
-- ON CONFLICT ON CONSTRAINT "surveys_pkey"
-- DO UPDATE SET "board_id" = EXCLUDED."board_id";
