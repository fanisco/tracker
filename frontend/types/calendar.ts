export enum CalendarModes {
    Day = 'Day',
    Week = 'Week',
    Month = 'Month',
    Year = 'Year',
}

export type CalendarMode = keyof typeof CalendarModes;
