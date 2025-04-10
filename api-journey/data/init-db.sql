BEGIN ;

DROP TABLE IF EXISTS "journey" ;

CREATE TABLE journey (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "departure" TEXT NOT NULL,
  "destination" TEXT NOT NULL,
  "date" TIMESTAMPTZ NOT NULL,
  "seatsAvailable" INT NOT NULL,
  "price" FLOAT NOT NULL,
  "time" INT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL default(now()),
  "updatedAt" TIMESTAMPTZ
  
  -- Ajout des contraintes de validation
  CONSTRAINT chk_date CHECK ("date" > NOW()),
  CONSTRAINT chk_seats CHECK ("seatsAvailable" >= 0),
  CONSTRAINT chk_price CHECK ("price" >= 0),
  CONSTRAINT chk_time CHECK ("time" >= 0)
);

COMMIT;