import type { Request } from 'express';

export function getRequestOrigin(req: Request): string {
  return `${req.protocol}://${req.get('host')}`;
}
