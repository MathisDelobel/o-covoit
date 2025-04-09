BEGIN ;

DROP TABLE IF EXISTS "journey" ;

CREATE TABLE journey (
  "id" INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  "departure" TEXT NOT NULL,
  "destination" TEXT NOT NULL,
  "date" DATETIME NOT NULL,
  "seatsAvailable" INT NOT NULL,
  "price" FLOAT NOT NULL,
  "time" INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Ajout des contraintes de validation
  CONSTRAINT chk_date CHECK (date > NOW()),
  CONSTRAINT chk_seats CHECK (seatsAvailable >= 0),
  CONSTRAINT chk_price CHECK (price >= 0),
  CONSTRAINT chk_time CHECK (time >= 0)
);

-- Création des index pour optimiser les recherches
CREATE INDEX idx_departure_destination ON journeys (departure, destination);
CREATE INDEX idx_date ON journeys (date);

COMMIT;