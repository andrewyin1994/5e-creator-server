ALTER TABLE characters
  DROP COLUMN IF EXISTS "userId";

DROP TABLE IF EXISTS dnd_users;