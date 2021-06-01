CREATE DATABASE topic;

CREATE table subtopic(
    subtopic_id SERIAL PRIMARY KEY,
    topicname VARCHAR(255),
    subtopic_name VARCHAR(255)
);
CREATE table category(
    id SERIAL PRIMARY KEY,
    sub_name VARCHAR(255),
    cate_name VARCHAR(255)
);
-- Insert into category(sub_name,cate_name) Values('Algebraic Formulae','Formula Use')
--  SELECT * FROM category;
-- Insert into category(sub_name,cate_name) Values('Algebraic Formulae','Value determination');

CREATE DATABASE final_topic;
CREATE table final_subtopic(
    subtopic_id SERIAL PRIMARY KEY,
    topicname VARCHAR(255),
    subtopic_name VARCHAR(255)
);
CREATE table topic(
    topic_id SERIAL PRIMARY KEY,
    topicname VARCHAR(255)
    );
CREATE table user_data(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    pass VARCHAR(255),
    roletype VARCHAR(255),
    class int
);
create table check_table(
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    secondname VARCHAR(255)
);

create table multiple_answer(
    id SERIAL PRIMARY KEY,
    qpattern VARCHAR(255),
    categoryid integer,
    questext text,
    options  integer[4] 
   
);
Insert into multiple_answer(qpattern,categoryid,questext,options) Values('MCQ',1,'Hablu and Dablu are two friends. One day they were playing together. While playing Hablu said that he had considered two numbers. Sum of them is 160 and one is three times of other. He challenged Dablu to correctly identify the numbers. Can you help him?','{40,50,60,70}');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Algebric Expression');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Algebric Formula');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Algebric Fraction');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Factor GCD_LCD');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Equation Solving');

INSERT INTO user_data(username,email,pass,roletype,class) VALUES('sudipa','1605014@ugrad.cse.buet.ac.bd','123','student',5);


Insert into topic(topicname) Values('Algebra');
Insert into topic(topicname) Values('Geometry');
Insert into topic(topicname) Values('BrainTeaser');
Insert into topic(topicname) Values('Number Theory');
Insert into topic(topicname) Values('Statistics');

Insert into category(sub_name,cate_name) Values('Algebric Expression','Simplify');
Insert into category(sub_name,cate_name) Values('Algebric Expression','Add_Subtract');
Insert into category(sub_name,cate_name) Values('Algebric Expression','Multiply_Divide');