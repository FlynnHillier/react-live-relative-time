import { useCallback, useEffect, useState } from "react";

type TimeUnit = Exclude<Intl.RelativeTimeFormatUnitSingular, "quarter">;

const MAX_32_BIT = 2147483647 as const;

const TIMES = {
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 86400000,
  week: 604800000,
  month: 2629746000,
  year: 31556952000,
} as const satisfies Record<TimeUnit, number>;

/**
 * Display a message that references the given timestamp relative to the current moment.
 *
 * @param \{timestamp} the time to reference, given in ms-epoch format.
 */
export default function LiveRelativeTime({ timestamp }: { timestamp: number }) {
  const [intervalDelay, setIntervalDelay] = useState<number | null>(null);
  const [message, setMessage] = useState<String>();

  const refreshTime = useCallback(() => {
    const DIFF = timestamp - Date.now();
    const ABS_DIFF = Math.abs(DIFF);

    const UNIT: TimeUnit =
      ABS_DIFF >= TIMES.year
        ? "year"
        : ABS_DIFF >= TIMES.month
        ? "month"
        : ABS_DIFF >= TIMES.week
        ? "week"
        : ABS_DIFF >= TIMES.day
        ? "day"
        : ABS_DIFF >= TIMES.hour
        ? "hour"
        : ABS_DIFF >= TIMES.minute
        ? "minute"
        : "second";

    const ACCURATE_DELAY =
      DIFF < 0 ? TIMES[UNIT] - (ABS_DIFF % TIMES[UNIT]) : ABS_DIFF % TIMES[UNIT];

    // intervals convert numner to signed 32 bit integer, hence to prevent wrapping to negative (0ms intervals) numbers, we choose minimum of two
    setIntervalDelay(Math.min(MAX_32_BIT, ACCURATE_DELAY));

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    setMessage(
      rtf.format(DIFF > 0 ? Math.floor(DIFF / TIMES[UNIT]) : Math.ceil(DIFF / TIMES[UNIT]), UNIT)
    );
  }, [timestamp]);

  useEffect(() => {
    refreshTime();

    return () => {
      setIntervalDelay(null);
    };
  }, []);

  useEffect(() => {
    if (intervalDelay === null) return;

    const intervalID = setInterval(() => {
      refreshTime();
    }, intervalDelay);

    return () => {
      clearInterval(intervalID);
    };
  }, [intervalDelay]);

  return <>{message}</>;
}
