import { AppDataSource } from '../../data-source';
import { Host } from '../entities/Host';

export class HostService {
  async getHosts(): Promise<Host[]> {
    const hostRepository = AppDataSource.getRepository(Host);
    const hosts = await hostRepository.find();
    return hosts;
  }
}