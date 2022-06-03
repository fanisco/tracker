require('dotenv').config({
  path: `.${process.env.NODE_ENV || 'development'}.env`,
});

module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRESS_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRES_DB,
  },
  test: {
    dialect: 'postgres',
    host: process.env.CI_POSTGRES_HOST,
    port: Number(process.env.CI_POSTGRESS_PORT),
    username: process.env.CI_POSTGRES_USER,
    password: process.env.CI_POSTGRESS_PASSWORD,
    database: process.env.CI_POSTGRES_DB,
  },
  production: {
    dialect: 'postgres',
    host: process.env.PROD_POSTGRES_HOST,
    port: Number(process.env.PROD_POSTGRESS_PORT),
    username: process.env.PROD_POSTGRES_USER,
    password: process.env.PROD_POSTGRESS_PASSWORD,
    database: process.env.PROD_POSTGRES_DB,
  },
};
