CREATE TABLE IF NOT EXISTS "public"."board_admins"(
    "board_admin_id" INT ,
    "user_id" INT,
    CONSTRAINT "board_admins_pkey" PRIMARY KEY ("board_admin_id"),
    FOREIGN KEY(board_admin_id) 
	  REFERENCES boards(board_id),
      FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
);