require('dotenv').config();

const environment = process.env.NODE_ENV || "test";

const suffix = {
  prod: "",
  production: "",
  dev: "-dev",
  development: "-dev",
  test: "-test",
};

const options = {
  host: process.env.MYSQLHOST || process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQLPORT || process.env.MYSQL_PORT || '3306',
  database: 
    `${process.env.MYSQLDATABASE || process.env.MYSQL_DB_NAME || 'delivery-app'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQLUSER || process.env.MYSQL_USER || 'root',
  password: process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD || '12345678',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
