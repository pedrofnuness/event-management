import { hostsMock } from '../src/mocks/hosts.mock';
import { seedDatabase } from '../src/services/seeds/seedDatabase';

jest.mock('../data-source', () => {
  const mockCount = jest.fn();
  const mockCreate = jest.fn();
  const mockSave = jest.fn();

  return {
    AppDataSource: {
      getRepository: jest.fn(() => ({
        count: mockCount,
        create: mockCreate,
        save: mockSave,
      })),
      initialize: jest.fn(),
      destroy: jest.fn(),
    },
  };
});

describe('Seed Script Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should seed hosts into the database when the database is empty', async () => {
    require('../data-source').AppDataSource.getRepository().count.mockResolvedValue(0);

    const mockCreate = require('../data-source').AppDataSource.getRepository().create;
    const mockSave = require('../data-source').AppDataSource.getRepository().save;

    await seedDatabase();

    expect(mockCreate).toHaveBeenCalled();
    expect(mockSave).toHaveBeenCalled();
    expect(mockCreate).toHaveBeenCalledWith(hostsMock[0]);
    expect(mockCreate).toHaveBeenCalledWith(hostsMock[1]);
    expect(mockCreate).toHaveBeenCalledWith(hostsMock[2]);
    expect(mockCreate).toHaveBeenCalledWith(hostsMock[3]);
  });

  it('should not seed hosts into the database when the database is not empty', async () => {
    require('../data-source').AppDataSource.getRepository().count.mockResolvedValue(1);

    const mockCreate = require('../data-source').AppDataSource.getRepository().create;
    const mockSave = require('../data-source').AppDataSource.getRepository().save;

    await seedDatabase();

    expect(mockCreate).not.toHaveBeenCalled();
    expect(mockSave).not.toHaveBeenCalled();
  });
});
