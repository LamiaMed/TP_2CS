module.exports = {
  HOST: "ec2-34-225-159-178.compute-1.amazonaws.com",
  USER: "fwrzasjnzfcgwq",
  PASSWORD: "e00e22ba2edddd51456e0c6f218806e07d43c42a802bf65e6ff2fb7bee4ae7c6",
  DB: "deu5fhhf39ht9r",
  dialect: "postgres",
  native: true, 
  ssl: true, 
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
