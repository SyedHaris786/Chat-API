-- CREATE DATABASE social_app;
-- CREATE DATABASE social_a

CREATE TABLE users(
id BIGSERIAL PRIMARY KEY NOT NULL,
username VARCHAR(50) NOT NULL,
email VARCHAR(200) NOT NULL,
password VARCHAR(100) NOT NULL,
UNIQUE (email)
);




CREATE TABLE (message_id BIGSERIAL PRIMARY KEY NOT NULL,
from_user text,
to_user text,
)



insert into users (username,email, password) values ('Koray','koray@gmail.com', 'Pakistan');
insert into users (username,email, password) values ('boray','boray@gmail.com', '$2b$05$jZ7SjVBKAD9WaVcvmPcrQOGwv5qUdBP2KLELGKA2mXJY4wvX59un.');