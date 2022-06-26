module.exports = {
  HOST: "ec2-3-226-163-72.compute-1.amazonaws.com",
  USER: "afqnaeywqmdzlm",
  PASSWORD: "58c7b307a45009295baa346a736e144cb44c7d68a83fd1594eb782630300be1c",
  DATABASE: "d1s3crpo1vuf3b",
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
