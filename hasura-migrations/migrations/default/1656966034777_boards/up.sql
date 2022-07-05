CREATE TABLE IF NOT EXISTS  "public"."boards" (
    "board_id" SERIAL NOT NULL,
    "name" varchar,
    CONSTRAINT "boards_pkey" PRIMARY KEY ("board_id")
);


