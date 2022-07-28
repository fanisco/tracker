import { Event } from '../../models';

export type OnEventCreate = (date: Date) => void;
export type OnEventContextMenu = (event: Event) => void;
