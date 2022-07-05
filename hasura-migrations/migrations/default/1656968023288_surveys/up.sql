CREATE TABLE IF NOT EXISTS  "public"."surveys"(
    "survey_id" INT GENERATED ALWAYS AS IDENTITY,
    "board_id" INT, 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "opens_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "closes_at" TIMESTAMPTZ NOT NULL DEFAULT now() + '1w'::interval,
    CONSTRAINT "surveys_pkey" PRIMARY KEY ("survey_id"),
     FOREIGN KEY(board_id) 
	  REFERENCES boards(board_id)
);

