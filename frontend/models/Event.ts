import { BasicEntity } from './BasicEntity';

export interface Event extends BasicEntity {
  userId: number;
  dateStart: Date;
  dateEnd: Date;
  length: number;
  offset: number;
}

export type EventDto = Pick<Event, 'title' | 'dateStart' | 'dateEnd'>;

export interface Entry extends BasicEntity {
  today?: boolean; // FixMe
  weekend?: boolean; // FixMe
  events: Event[];
}

export interface Entries extends BasicEntity {
  entries: Entry[];
}
