DROP TABLE IF EXISTS users_pictures CASCADE;

CREATE TABLE users_pictures(
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id),
    picture_id INTEGER REFERENCES pictures(id)
);
