-- final database
CREATE DATABASE storage;

CREATE TABLE "Users" (
    user_id serial not null unique
        constraint user_pk
            primary key,
    user_name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null ,
    dob varchar(255),
    image text DEFAULT 'files/users/avatar2.jpg',
    privilege varchar(255) not null,
    rank integer,
    level integer,
    class integer,
    contribution integer
);
INSERT INTO "Users"(user_name, email, password, privilege, image) VALUES('Sutapa', 'tithisutapa52@gmail.com', '123', 'instructor', 'files/users/avatar2.jpg');
INSERT INTO "Users"(user_name, email, password, privilege, image) VALUES('Tithi', 'tithi123@gmail.com', '123', 'instructor', 'files/users/avatar2.jpg');
INSERT INTO "Users"(user_name, email, password, privilege, image) VALUES('Sudipta', 'sudiptadey@gmail.com', '123', 'instructor', 'files/users/Sudipta.jpg');
INSERT INTO "Users"(user_name, email, password, privilege, image) VALUES('Joya', 'sudiptadey2@gmail.com', '123', 'instructor', 'files/users/Joya.jpg');
INSERT INTO "Users"(user_name, email, password, privilege, class) VALUES('sudipa', '1605014@ugrad.cse.buet.ac.bd', '123', 'student', 5);


CREATE TABLE "User_History" (
    user_history_id serial not null unique
        constraint user_history_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "Users"
            on update cascade on delete cascade,
    instructor_id     integer not null
        constraint fk_instructor
            references "Users"
            on update cascade on delete cascade,
    content_id integer,
    content_type integer,
    content_status integer,
    time integer,
    image oid[],
    breakpoint_number integer[],
    score integer,
    remark varchar(255)
);

create table "Feedback"
(
    feedback_id   serial not null unique
        constraint feedback_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "Users"
            on update cascade on delete cascade,
    feedback text
);

create table "Forum_question"
(
    forum_ques_id   serial not null unique
        constraint forum_ques_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "Users"
            on update cascade on delete cascade,
    topic_name varchar(255),
    forum_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);
--
-- create table "Forum_question"
-- (
--     forum_ques_id   serial not null unique
--         constraint forum_ques_pk
--             primary key,
--     user_id     integer not null
--         constraint fk_user
--             references "User"
--             on update cascade on delete cascade,
--     topic_name varchar(255),
--     forum_text text,
--     figures oid[],
--     link varchar(255),
--     upvote integer,
--     downvote integer
-- );

create table "Forum_answer"
(
    forum_ans_id   serial not null unique
        constraint forum_ans_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "Users"
            on update cascade on delete cascade,
    forum_ques_id     integer not null
        constraint fk_forum_ques
            references "Forum_question"
            on update cascade on delete cascade,
    forum_ans_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);


create table "Topic"
(
    topic_id   serial not null primary key,
    topic_name varchar(255)    not null
);

create table "Subtopic"
(
    subtopic_id   serial not null unique
        constraint subtopic_pk
            primary key,
    topic_id     integer not null
        constraint fk_topic
            references "Topic"
            on update cascade on delete cascade,
    subtopic_name varchar(255)
);

create table "Category"
(
    category_id   serial not null unique
        constraint category_pk
            primary key,
    subtopic_id     integer not null
        constraint fk_subtopic
            references "Subtopic"
            on update cascade on delete cascade,
    category_name varchar(255)
);

Create Table "Tutorial"(
	tutorial_id serial not null unique
        constraint tutorial_pk
            primary key,
	subtopic_id integer not null
	    constraint fk_subtopic
            references "Subtopic"
            on update cascade on delete cascade,
    tutorial_title  varchar(255),
    tutorial_text   json,
    figure          text,
    link            varchar(255),
    video           text,
    tutorial_status integer DEFAULT 0,
    upvote          integer DEFAULT 0,
    downvote        integer DEFAULT 0,
    created_by      integer,
    about           text
);


Create Table "Question"(
	question_id serial not null unique
        constraint question_pk
            primary key,
	category_id integer not null
	    constraint fk_category
            references "Category"
            on update cascade on delete cascade,
	ques_type   integer not null,
    ques_status integer DEFAULT 0,
    ques_pattern integer,
	level integer,
	attempt integer DEFAULT 0,
	success integer DEFAULT 0,
	upvote integer DEFAULT 0,
	downvote integer DEFAULT 0,
	created_by   integer
);

-- change
CREATE TABLE "MCQ" (
    mcq_id serial not null unique
        constraint mcq_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figure_ques text,
    figure_explanation text,
    options varchar(255)[4]
);

CREATE TABLE "Fill_Blank" (
    fb_id serial not null unique
        constraint fb_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures oid[]
);

-- change
CREATE TABLE "True_False" (
    tf_id serial not null unique
        constraint tf_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figure_ques text,
    figure_explanation text,
    options varchar(255)[2]
);

-- change
CREATE TABLE "Match" (
    match_id serial not null unique
        constraint match_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_left text,
    ques_right text,
    figure_ques text,
    figure_explanation text,
    left_options varchar(255)[],
    right_options varchar(255)[]
);

CREATE TABLE "Descriptive_Question" (
    desc_id serial not null unique
        constraint desc_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures oid[]
);

CREATE TABLE "Answer" (
    answer_id serial not null unique
        constraint answer_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ans_text text,
    figures oid[],
    breakpoint_titles varchar(255)[],
    breakpoint_numbers integer[]
);

CREATE TABLE "Explanation" (
    explanation_id serial not null unique
        constraint explanation_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    explanation_text text,
    figures oid[],
    link varchar(255)
);

CREATE TABLE "Discussion_question" (
    diss_ques_id serial not null unique
        constraint diss_ques_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    user_id integer not null
	    constraint fk_user
            references "Users"
            on update cascade on delete cascade,
    discussion_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);

CREATE TABLE "Discussion_answer" (
    diss_ans_id serial not null unique
        constraint diss_ans_pk
            primary key,
    diss_ques_id integer not null
	    constraint fk_diss_ques
            references "Discussion_question"
            on update cascade on delete cascade,
    user_id integer not null
	    constraint fk_user
            references "Users"
            on update cascade on delete cascade,
    discussion_answer_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);
-- change
Create Table "Problems_of_the_week"(
	prb_week_id serial not null unique
        constraint prb_week_pk
            primary key,
	contest_name varchar(255),
	contest_date date,
	creator_id integer,
	time_length varchar(255),
	questions_id integer[],
	total_participants integer,
	participants_rank integer[],
    exam_id integer,
    this_week int DEFAULT 0
);

-- insert some data


Insert into "Topic"(topic_name) Values('Algebra');
Insert into "Topic"(topic_name) Values('Geometry');
Insert into "Topic"(topic_name) Values('BrainTeaser');
Insert into "Topic"(topic_name) Values('Number Theory');
Insert into "Topic"(topic_name) Values('Statistics');

Insert into "Subtopic"(topic_id,subtopic_name) Values(1,'Algebric Expression');
Insert into "Subtopic"(topic_id,subtopic_name) Values(1,'Algebric Formula');
Insert into "Subtopic"(topic_id,subtopic_name) Values(1,'Algebric Fraction');
Insert into "Subtopic"(topic_id,subtopic_name) Values(1,'Factor GCD_LCD');
Insert into "Subtopic"(topic_id,subtopic_name) Values(1,'Equation Solving');

Insert into "Category"(subtopic_id, category_name) Values(1,'Simplify');
Insert into "Category"(subtopic_id, category_name) Values(1,'Add_Subtract');
Insert into "Category"(subtopic_id, category_name) Values(1,'Multiply_Divide');

Insert into "Question"(category_id, ques_type) VALUES (1, 1);
Insert into "MCQ"(question_id, ques_text, options) Values(1,'Hablu and Dablu are two friends. One day they were playing together. While playing Hablu said that he had considered two numbers. Sum of them is 160 and one is three times of other. He challenged Dablu to correctly identify the numbers. Can you help him?','{40,50,60,70}');

-- NEW TABLES 
-- change
create table "ExamQuestion"
(
    question_id        serial not null primary key,
    exam_id            serial not null,
    exam_title         text not null,
    exam_type          text not null,
    exam_level         text not null,
    ques_text          text   not null,
    ans_text           text   not null,
    explanation        text,
    figure_ques        text,
    figure_ans         text,
    figure_explanation text,
    ques_status        integer,
    attempt            integer DEFAULT 0,
    success            integer DEFAULT 0,
    upvote             integer DEFAULT 0,
    downvote           integer DEFAULT 0,
    created_by         integer,
    rubrik             json
);


-- change
create table "ExamAnswer"
(
    question_id        serial not null,
    exam_id            serial not null,
    answer_id          serial not null primary key,
    answer             text,
    answer_status      integer DEFAULT 0,
    submitted_by       integer,
    rubrik             json,
    evaluated_by       integer
);
-- ------------------- SUDIPA
Insert into "ExamQuestion"(exam_title, exam_type, exam_level, ques_text,figure_ques, ans_text, rubrik)
Values('All about circles', 'POTW', 'level 3', 'Find the circumference of the circle [10] +Find the area [5] + Draw a circle with double area shown in the picture [10]','Circle1.png', 'answer..', '[{"breakpoint":"formula", "marks": 2},{"breakpoint": "calculation", "marks": 2}]');

Insert into "ExamQuestion"(exam_title, exam_type, exam_level, ques_text, ans_text, rubrik)
Values('Circle', 'Regular Exam', 'level 3', 'question?', 'answer..', '[{"breakpoint":"formula", "marks": 2},{"breakpoint": "calculation", "marks": 2}]');

Insert into "ExamAnswer"(question_id, exam_id, answer) Values(1, 1, 'files/answers/ans1.png');
Insert into "ExamAnswer"(question_id, exam_id, answer) Values(2, 2, 'files/answers/ans2.jpg');



Insert into "Tutorial"(subtopic_id, tutorial_text) Values(1, '{"html_text":"<p>bnbvn</p>\n"}');






------------ trash ------------------------
-- temp image table
-- create table "Images"
-- (
-- 	id serial not null,
-- 	image oid
-- );

-- create unique index images_id_uindex
-- 	on "Images" (id);

-- alter table "Images"
-- 	add constraint images_pk
-- 		primary key (id);


-- ------------------- SUDIPA
Insert into "ExamQuestion"(exam_title, exam_type, exam_level, ques_text,figure_ques, ans_text, rubrik)
Values('All about circles', 'POTW', 'level 3', 'Find the circumference of the circle [10] +Find the area [5] + Draw a circle with double area shown in the picture [10]','Circle1.png', 'answer..', '[{"breakpoint":"formula", "marks": 2},{"breakpoint": "calculation"},{"marks": 2.3}]');

Insert into "ExamQuestion"(exam_title, exam_type, exam_level, ques_text, ans_text, rubrik)
Values('Circle', 'Regular Exam', 'level 3', 'question?', 'answer..', '[{"breakpoint":"formula", "marks": 2},{"breakpoint": "calculation"},{"marks": 2.3}]');

Insert into "ExamAnswer"(question_id, exam_id, answer) Values(1, 1, 'files/answers/ans1.png');
Insert into "ExamAnswer"(question_id, exam_id, answer) Values(2, 2, 'files/answers/ans2.jpg');



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
Insert into "Question"(category_id, ques_type) VALUES (1, 1);
INSERT INTO "True_Falsee"(question_id, ques_text, options) VALUES (2,'( Identify the given statement is True or False )
If x = 7 , y = 6 ,then the value of 16x2 - 40xy + 25y2 = 8.','{True,False}');
