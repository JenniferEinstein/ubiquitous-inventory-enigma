\c fellows_dev;

INSERT INTO fellow (name, lastCohort, looper, capstone, gender, tags, location, notes)
VALUES 
('Jennifer Einstein', '9.6', true, 'Completed 01/18/2024, Happiness Exchange', 'f', 'insert tags later', 'Forest Hills, Queens, NY', 'use the notes fields for something at some point'),
('Hillary Brito', '9.5', false, 'Completed 01/17/2024, Game Seeker', 'f', 'insert tags later', 'TX (and NY)', 'use the notes fields for something at some point'),
('Irfan Hanjra', '9.5', true, 'Completed 01/17/2024, Game Seeker', 'm', 'insert tags later', 'unknown', 'use the notes fields for something at some point');

INSERT INTO item (name, category, year_acquired, notes, current) VALUES
('Teddy Bear', 'toy', 1976, 'from Grandpa Syd', 'yes' ),
('Honey Bear', 'toy', 2015, 'from Ruben', 'yes'),
('yellow bar stool', 'furniture', 1997, 'Boston. Not sure of year', 'yes');