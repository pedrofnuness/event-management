import { AppDataSource } from '../data-source';

describe('Database connection', () => {
  it('should successfully connect and disconnect to the database', async () => {
    await AppDataSource.initialize();
    expect(AppDataSource.isInitialized).toBe(true);

    await AppDataSource.destroy();
    expect(AppDataSource.isInitialized).not.toBe(true);
  });

  it('should fail to connect to the database with incorrect credentials', async () => {
    AppDataSource.initialize = jest.fn().mockRejectedValue(new Error("Error during Database initialization"));

    try {
      await AppDataSource.initialize();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('Error during Database initialization');
    }
  });
});
