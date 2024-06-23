import mongoose from 'mongoose';

export const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL, { dbName: 'Restaurant' })
    .then(() => {
      console.log('Database is Connected');
    })
    .catch((error) => {
      console.error(`Error Occured: ${error}`);
    });
};
