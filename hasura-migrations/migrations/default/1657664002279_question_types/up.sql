CREATE TABLE IF NOT EXISTS "public"."question_types"(
    "question_type_id" INT UNIQUE,
    "question_type_name" TEXT NOT NULL DEFAULT 'star'
);
ALTER TABLE "public"."questions"
ADD CONSTRAINT "questions_type_id_constraint" FOREIGN KEY("question_type_id") REFERENCES "question_types"("question_type_id")