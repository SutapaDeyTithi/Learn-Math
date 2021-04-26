CREATE DATABASE topic;

CREATE table subtopic(
    subtopic_id SERIAL PRIMARY KEY,
    topicname VARCHAR(255),
    subtopic_name VARCHAR(255)
);