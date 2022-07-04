CREATE TABLE IF NOT EXISTS  "public"."invites"(
    "invite_id" INT GENERATED ALWAYS AS IDENTITY, 
    "survey_id" INT,
    "user_id" INT, 
    CONSTRAINT "invites_pkey" PRIMARY KEY ("invite_id"),
     FOREIGN KEY(survey_id) 
	  REFERENCES surveys(survey_id),
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
);