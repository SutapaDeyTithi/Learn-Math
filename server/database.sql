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