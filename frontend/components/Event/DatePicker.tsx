import { FC, HTMLAttributes } from 'react';

import { locale } from '../../helpers/locale';

interface DatePickerProps extends HTMLAttributes<HTMLDivElement> {
  dateStart: Date;
  dateEnd: Date;
}

const DatePicker: FC<DatePickerProps> = ({
  dateStart,
  dateEnd,
  className,
  ...rest
}) => {
  const dateFormat = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const timeFormat = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
  const dateFormatted = dateFormat.format(dateStart);
  const timeStart = timeFormat.format(dateStart);
  const timeEnd = timeFormat.format(dateEnd);

  return (
    <div {...rest} className={className}>
      <input name="dateStart" type="hidden" value={dateStart.toJSON()} />
      <input name="dateEnd" type="hidden" value={dateEnd.toJSON()} />
      <span className="text-slate-700 text-sm">
        {dateFormatted} {timeStart} to {timeEnd}
      </span>
    </div>
  );
};

export default DatePicker;
