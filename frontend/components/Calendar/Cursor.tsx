import { FC, useEffect, useRef, useState } from 'react';
import { locale } from '../../helpers/locale';

const CURSOR_POS_UPDATE_INTERVAL = 60000;
const CELL_SIZE = 8.3334;

const calcPosition = (date: Date = new Date()) =>
  `${(date.getHours() + date.getMinutes() / 60) * CELL_SIZE}%`;

const Cursor: FC<{ children?: never }> = () => {
  const elemRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timer>();

  const now = new Date();
  const timeFormatted = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(now);
  const [style, setStyle] = useState({
    top: calcPosition(now),
  });

  useEffect(() => {
    if (elemRef.current) {
      elemRef.current.scrollIntoView();
    }

    timerRef.current = setInterval(() => {
      setStyle({
        top: calcPosition(),
      });
    }, CURSOR_POS_UPDATE_INTERVAL);

    () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div
      ref={elemRef}
      className="w-full flex items-start absolute pointer-events-none"
      style={style}
    >
      <span className="w-16 px-3 -mt-1.5 leading-none text-xs text-red-500">{timeFormatted}</span>
      <div className="w-full h-[1px] bg-red-500"></div>
    </div>
  );
};

export default Cursor;
