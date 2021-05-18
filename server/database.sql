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
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Algebric Expression');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Algebric Formula');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Algebric Fraction');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Factor GCD_LCD');
Insert into final_subtopic(topicname,subtopic_name) Values('Algebra','Equation Solving');


Insert into category(sub_name,cate_name) Values('Algebric Expression','Simplify');
Insert into category(sub_name,cate_name) Values('Algebric Expression','Add_Subtract');
Insert into category(sub_name,cate_name) Values('Algebric Expression','Multiply_Divide');