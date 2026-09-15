import { manikura } from './manikura';
import { pedikura } from './pedikura';
import { lashLift } from './lash-lift';
import { depilacija } from './depilacija';
import { masaza } from './masaza';
import type { Service, ServiceId } from './types';

export type { Service, ServiceId, ImageAsset, PriceItem, FaqItem, Step, SubService } from './types';

/**
 * Vse storitve v vrstnem redu prikaza (domača stran, hub, cenik, navigacija).
 * Nova storitev: nova datoteka v tej mapi + vnos tukaj.
 */
export const services: Service[] = [manikura, pedikura, lashLift, depilacija, masaza];

export function getService(id: ServiceId): Service {
  const service = services.find((s) => s.id === id);
  if (!service) throw new Error(`Neznana storitev: ${id}`);
  return service;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
