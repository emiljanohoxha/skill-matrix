

 CREATE TABLE IF NOT EXISTS "public"."surveys_questions_pkey" (
   "survey_question_id" INT GENERATED ALWAYS AS IDENTITY, 
   "board_id" INT NOT NULL,
   "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "opens_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
   "closes_at" TIMESTAMPTZ NOT NULL DEFAULT now() + '1w'::interval,
   CONSTRAINT "surveys_questions_pkey" PRIMARY KEY ("survey_question_id"),
   CONSTRAINT "surveys_board_id_fkey" FOREIGN KEY("board_id") REFERENCES "boards"("board_id")
 );
