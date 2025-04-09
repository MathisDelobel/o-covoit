BEGIN ;

TRUNCATE TABLE journeys;

-- Insertion des fixtures
INSERT INTO journeys (departure, destination, date, seatsAvailable, price, time) VALUES
-- Trajets Paris (départs fréquents)
('Paris', 'Lyon', NOW() + INTERVAL 1 DAY, 4, 35.50, 290),
('Paris', 'Marseille', NOW() + INTERVAL 2 DAY, 2, 55.00, 480),
('Paris', 'Bordeaux', NOW() + INTERVAL 1 DAY, 3, 40.00, 350),
('Paris', 'Lille', NOW() + INTERVAL 3 DAY, 5, 25.00, 150),

-- Trajets depuis Lyon
('Lyon', 'Paris', NOW() + INTERVAL 1 DAY, 3, 32.00, 280),
('Lyon', 'Marseille', NOW() + INTERVAL 2 DAY, 4, 30.00, 180),
('Lyon', 'Toulouse', NOW() + INTERVAL 4 DAY, 2, 45.00, 320),

-- Trajets depuis Marseille
('Marseille', 'Nice', NOW() + INTERVAL 1 DAY, 4, 20.00, 120),
('Marseille', 'Lyon', NOW() + INTERVAL 3 DAY, 1, 28.00, 175),
('Marseille', 'Paris', NOW() + INTERVAL 5 DAY, 3, 50.00, 490),

-- Trajets depuis Bordeaux
('Bordeaux', 'Toulouse', NOW() + INTERVAL 2 DAY, 3, 15.00, 150),
('Bordeaux', 'Paris', NOW() + INTERVAL 1 DAY, 2, 38.00, 340),
('Bordeaux', 'Lyon', NOW() + INTERVAL 4 DAY, 4, 42.00, 360),

-- Trajets depuis d'autres villes
('Nantes', 'Rennes', NOW() + INTERVAL 1 DAY, 3, 12.00, 60),
('Strasbourg', 'Nancy', NOW() + INTERVAL 3 DAY, 2, 10.00, 45),
('Toulouse', 'Montpellier', NOW() + INTERVAL 2 DAY, 4, 18.00, 120),
('Lille', 'Bruxelles', NOW() + INTERVAL 1 DAY, 3, 20.00, 90),

-- Trajets avec peu de places disponibles
('Nice', 'Marseille', NOW() + INTERVAL 1 DAY, 1, 22.00, 130),
('Rennes', 'Paris', NOW() + INTERVAL 2 DAY, 1, 30.00, 240),

-- Trajets longue distance
('Paris', 'Nice', NOW() + INTERVAL 7 DAY, 4, 70.00, 600),
('Lyon', 'Bordeaux', NOW() + INTERVAL 5 DAY, 3, 50.00, 400);



COMMIT ;