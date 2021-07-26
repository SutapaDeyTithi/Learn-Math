Insert into "ExamQuestion"(exam_title, exam_type, exam_level, ques_text,figure_ques, ans_text, rubrik)
Values('All about circles', 'POTW', 'level 3', 'Find the circumference of the circle [10] +Find the area [5] + Draw a circle with double area shown in the picture [10]','Circle1.png', 'answer..', '[{"breakpoint":"formula", "marks": 2},{"breakpoint": "calculation"},{"marks": 2.3}]');
CREATE TABLE "MCQS" (
    mcq_id serial not null unique
        constraint mcqs_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures varchar(255),
    options varchar(255)[4]
);
--tumi ei data ta tomar MCQ table e rakhba
Insert into "MCQS"(question_id, ques_text,figures, options) Values(1,'Hablu and Dablu are two friends. One day they were playing together. While playing Hablu said that he had considered two numbers. Sum of them is 160 and one is three times of other. He challenged Dablu to correctly identify the numbers. Can you help him?','Friend','{40,50,60,70}');
CREATE TABLE "True_Falsee" (
    tf_id serial not null unique
        constraint tff_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures oid[],
    options varchar(255)[2]
);
INSERT INTO "True_Falsee"(question_id, ques_text, options) VALUES (2,'( Identify the given statement is True or False )
If x = 7 , y = 6 ,then the value of 16x2 - 40xy + 25y2 = 8.','{True,False}');



--------------------------ager gula niso hoyto
drop table past_challenges;
create table "past_challenges"(
    user_id integer,
    contest_name text unique,
    time text,
    duration integer,
    creators text,
    level text,
    registered integer,
    standings text

)
