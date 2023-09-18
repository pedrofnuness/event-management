import { HostService } from '../src/services/HostService';
import { Host } from '../src/entities/Host';
import { AppDataSource } from '../data-source';
import { hostsData } from '../src/mocks/hosts.mock';

jest.mock('../data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn(),
  },
}));

describe('Host Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch hosts from the database', async () => {
    const mockHostRepository = {
      find: jest.fn().mockResolvedValue(hostsData),
    };

    AppDataSource.getRepository = jest.fn().mockReturnValue(mockHostRepository);
    AppDataSource.getRepository(Host);

    const hostService = new HostService();
    const hosts = await hostService.getHosts();

    expect(mockHostRepository.find).toHaveBeenCalled();
    expect(hosts).toEqual(hostsData);
  });

  it('should handle database errors', async () => {
    const mockHostRepository = {
      find: jest.fn().mockRejectedValue(new Error('Database error')),
    };
    AppDataSource.getRepository = jest.fn().mockReturnValue(mockHostRepository);
    AppDataSource.getRepository(Host);

    const hostService = new HostService();

    try {
      await hostService.getHosts();
    } catch (error) {
      expect(mockHostRepository.find).toHaveBeenCalled();

      expect(error.message).toBe('Database error');
    }
  });
});