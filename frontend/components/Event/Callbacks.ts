import { Tracking } from '../../models';

export type OnEventCreate = (date: Date) => void;
export type OnEventContextMenu = (event: Tracking) => void;
