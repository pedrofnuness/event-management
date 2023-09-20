import { Request, Response } from 'express';

let clients = [];

const addClient =(res: Response): void => {
  clients.push(res);
};

const removeClient = (res: Response): void => {
  const index = clients.indexOf(res);
  if (index !== -1) {
    clients.splice(index, 1);
    res.end();
  }
};

export const SSEController = {
  sendUpdate(data: any): void {
    clients.forEach((client) => {
      client.write(`data: ${JSON.stringify(data)}\n\n`);
    });
  },

  connect(req: Request, res: Response): void {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    addClient(res);

    req.on('close', () => {
      removeClient(res);
    });
  }
};
