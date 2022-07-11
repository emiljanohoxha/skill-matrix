insert into answers (user_id, board_id, question_id, created_at)
select U.user_id,
    Q.board_id,
    Q.question_id,
    Q.created_at
from users as U,
    questions as Q