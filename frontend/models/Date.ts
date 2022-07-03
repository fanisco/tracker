export interface Hour {
  id: number;
  title: string;
  date: Date;
}

export interface Day {
  id: number;
  title: string;
  weekend: boolean;
  weekday: string;
  date: Date;
  today: boolean;
}

export interface Month {
  id: number;
  title: string;
  year: string;
  date: Date;
}
