-- CREATE DATABASE social_app;
-- CREATE DATABASE social_a

CREATE TABLE users(
id BIGSERIAL PRIMARY KEY NOT NULL,
username VARCHAR(50) NOT NULL,
email VARCHAR(200) NOT NULL,
password VARCHAR(50) NOT NULL,
UNIQUE (email)
);



insert into users (username,email, password) values ('Koray','koray@gmail.com', 'Pakistan');
insert into users (username,email, password) values ('boray','boray@gmail.com', 'kakistan');