CREATE TABLE IF NOT EXISTS  "public"."users" (
    "user_id" INT GENERATED ALWAYS AS IDENTITY,
    "name" varchar,
     CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);