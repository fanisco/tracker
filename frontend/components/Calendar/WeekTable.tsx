import { memo } from 'react';

import type { Day, Entries, Hour } from '../../models';
import type { OnEventCreate, OnEventContextMenu } from '../Event';
import { HourEvent } from '../Events';

import Cell from './Cell';

interface WeekTableProps {
  days: Day[];
  hours: Hour[];
  data: Entries[];
  onEventCreate?: OnEventCreate;
  onEventContextMenu?: OnEventContextMenu;
}

const WeekTable = memo<WeekTableProps>(
  ({ days, hours, data, onEventCreate, onEventContextMenu }) => {
    return (
      <div className="w-full h-full grid grid-cols-7 relative">
        {days.map((day) => (
          <div key={day.id}>
            {hours.map((hour) => (
              <Cell
                key={hour.id}
                onDoubleClick={(event) => {
                  event.preventDefault();
                  onEventCreate?.(
                    new Date(
                      day.date.getFullYear(),
                      day.date.getMonth(),
                      day.date.getDate(),
                      hour.date.getHours(),
                      hour.date.getMinutes(),
                    ),
                  );
                }}
                weekend={day.weekend}
              ></Cell>
            ))}
          </div>
        ))}
        <div className="w-full h-full grid grid-cols-7 absolute top-0 left-0 pointer-events-none">
          {data.map((day) => (
            <div
              key={day.id}
              className="border border-l-0 border-t-0 border-transparent"
            >
              {day.entries.map((entry) => (
                <div key={entry.id} className="flex flex-col h-[8.3334%]">
                  {entry.events.map((entry) => (
                    <HourEvent
                      {...entry}
                      key={entry.id}
                      onContextMenu={(event) => {
                        event.preventDefault();
                        onEventContextMenu?.(entry);
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
          <div className="w-full h-full grid grid-cols-7 absolute top-0 left-0 pointer-events-none">
            {data.map((day) => (
              <div
                key={day.id}
                className="border border-l-0 border-t-0 border-transparent"
              >
                {day.entries.map((entry) => (
                  <div key={entry.id} className="flex flex-col h-[8.3334%]">
                    {entry.events.map((entry) => (
                      <HourEvent
                        key={entry.id}
                        onContextMenu={(event) => {
                          event.preventDefault();
                          onEventContextMenu?.(entry);
                        }}
                        {...entry}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export default WeekTable;
