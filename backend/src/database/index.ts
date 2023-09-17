import { AppDataSource } from '../../data-source';

AppDataSource.initialize()
  .then(() => {
    console.log("Database has been initialized!")
  })
  .catch((err) => {
    throw new Error(`Database failed to initialize. ${err}`,)
  })