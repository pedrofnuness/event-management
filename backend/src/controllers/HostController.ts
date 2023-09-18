import { Request, Response } from 'express';
import { HostService } from '../services/HostService';

export class HostController {
  async fetchHosts(req: Request, res: Response): Promise<void> {
    const hostService = new HostService();

    try {
      const hosts = await hostService.getHosts();
      res.status(200).json(hosts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}