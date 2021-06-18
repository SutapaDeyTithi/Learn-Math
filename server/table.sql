-- final database 
CREATE TABLE "User" (
    user_id serial not null unique
        constraint user_pk
            primary key,
    user_name varchar(255) not null ,
    email varchar(255) not null ,
    password varchar(255) not null ,
    dob varchar(255),
    image oid,
    privilege integer not null,
    rank integer,
    level integer,
    contribution integer
);

CREATE TABLE "User_History" (
    user_history_id serial not null unique
        constraint user_history_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "User"
            on update cascade on delete cascade,
    instructor_id     integer not null
        constraint fk_instructor
            references "User"
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
            references "User"
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
            references "User"
            on update cascade on delete cascade,
    topic_name varchar(255),
    forum_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);

create table "Forum_question"
(
    forum_ques_id   serial not null unique
        constraint forum_ques_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "User"
            on update cascade on delete cascade,
    topic_name varchar(255),
    forum_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);

create table "Forum_answer"
(
    forum_ans_id   serial not null unique
        constraint forum_ans_pk
            primary key,
    user_id     integer not null
        constraint fk_user
            references "User"
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
    tutorial_name varchar(255),
    tutorial_text text,
    figures oid[],
    link varchar(255),
    video oid[],
    tutorial_status integer,
	upvote integer,
	downvote integer,
	created_by integer
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
    ques_status integer,
    ques_pattern integer,
	level integer,
	attempt integer,
	success integer,
	upvote integer,
	downvote integer,
	created_by   integer
);

CREATE TABLE "MCQ" (
    mcq_id serial not null unique
        constraint mcq_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures oid[],
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

CREATE TABLE "True_False" (
    tf_id serial not null unique
        constraint tf_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures oid[],
    options varchar(255)[2]
);

CREATE TABLE "Match" (
    match_id serial not null unique
        constraint match_pk
            primary key,
    question_id integer not null
	    constraint fk_question
            references "Question"
            on update cascade on delete cascade,
    ques_text text,
    figures oid[],
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
            references "User"
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
            references "User"
            on update cascade on delete cascade,
    discussion_answer_text text,
    figures oid[],
    link varchar(255),
    upvote integer,
    downvote integer
);

Create Table "Problems_of_the_week"(
	prb_week_id serial not null unique
        constraint prb_week_pk
            primary key,
	contest_name varchar(255),
	contest_date date,
	creators_id integer[],
	time_length varchar(255),
	questions_id integer[],
	total_participants integer,
	participants_rank integer[]
);