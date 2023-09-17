import { AppDataSource } from '../../data-source';

AppDataSource.initialize()
  .then(() => {
    console.log("Database has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Database initialization: ", err)
  })