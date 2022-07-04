CREATE TABLE IF NOT EXISTS  "public"."surveys"(
    "survey_id" INT GENERATED ALWAYS AS IDENTITY,
    "board_id" INT, 
    "open_since" TIMESTAMP,
    "open_until" TIMESTAMP,
    CONSTRAINT "surveys_pkey" PRIMARY KEY ("survey_id"),
     FOREIGN KEY(board_id) 
	  REFERENCES boards(board_id)
);