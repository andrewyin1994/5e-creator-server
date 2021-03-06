module.exports = {
  PORT: process.env.PORT || '8080',
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgresql://dungeon-master@localhost/dungeons-and-dragons',
  JWT_SECRET: process.env.JWT_SECRET || 'totally-secure-secret'
};