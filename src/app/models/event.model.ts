export interface Event {
  day: string;
  month: string;
  /** Optional end day for multi-day events (same month if endMonth not provided) */
  endDay?: string;
  /** Optional end month (used when range crosses months) */
  endMonth?: string;
  title: string;
  time: string;
  location: string;
}
