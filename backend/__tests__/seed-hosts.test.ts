import { hostsData } from '../src/mocks/hosts.mock';
import { seedHosts } from '../src/services/seeds/seed-host';

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

    await seedHosts();

    expect(mockCreate).toHaveBeenCalledTimes(hostsData.length);
    expect(mockSave).toHaveBeenCalledTimes(hostsData.length);
    expect(mockCreate).toHaveBeenCalledWith(hostsData[0]);
    expect(mockCreate).toHaveBeenCalledWith(hostsData[1]);
    expect(mockCreate).toHaveBeenCalledWith(hostsData[2]);
    expect(mockCreate).toHaveBeenCalledWith(hostsData[3]);
  });

  it('should not seed hosts into the database when the database is not empty', async () => {
    require('../data-source').AppDataSource.getRepository().count.mockResolvedValue(1);

    const mockCreate = require('../data-source').AppDataSource.getRepository().create;
    const mockSave = require('../data-source').AppDataSource.getRepository().save;

    await seedHosts();

    expect(mockCreate).not.toHaveBeenCalled();
    expect(mockSave).not.toHaveBeenCalled();
  });
});
