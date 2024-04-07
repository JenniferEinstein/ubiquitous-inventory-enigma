DROP DATABASE IF EXISTS fellows_dev;

CREATE DATABASE fellows_dev;

\c fellows_dev;

DROP TABLE IF EXISTS fellow;

CREATE TABLE fellow (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    lastCohort TEXT,
    looper BOOLEAN,
    capstone TEXT,
    gender TEXT,
    tags TEXT,
    location TEXT,
    notes TEXT
);

DROP TABLE IF EXISTS item;

CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    category TEXT NOT NULL,
    year_acquired INTEGER,
    notes TEXT,
    current TEXT
);






-- psql -U postgres -f db/schema.sql 
-- translation: 
    -- connect to the postgres terminal 
    -- as the user postgres 
    -- and run this file 
    -- which is located at db/schema.sql