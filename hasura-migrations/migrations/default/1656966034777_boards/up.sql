CREATE TABLE IF NOT EXISTS  "public"."boards" (
    "board_id" INT GENERATED ALWAYS AS IDENTITY,
    "name" varchar,
    CONSTRAINT "boards_pkey" PRIMARY KEY ("board_id")
);