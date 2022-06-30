module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASS,
  DATABASE: process.env.DB_NAME,
  dialect: "postgres",
  native: true, 
  ssl: false,
  extra:{
      ssl: {
        rejectUnauthorized: false,
    }
  },

  dialectOptions: {
    ssl: true
  },
  PORT : 5432,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
