module.exports = {
  PORT: process.env.PORT || '8080',
  NODE_ENV: process.env.NODE_ENV || 'developement',
  DB_URL: process.env.DATABASE_URL || 'postgresql://dungeon-master@localhost/dungeons-and-dragons',
  JWT_SECRET: 'totally_secure_secret'
};