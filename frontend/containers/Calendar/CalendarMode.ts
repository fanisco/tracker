import type { LayoutProps } from '../../components/Calendar/Layout';
import type { Event } from '../../models';

export interface CalendarModeProps extends Pick<LayoutProps, 'modes' | 'heading' | 'navigation'> {
  events?: Event[];
}
