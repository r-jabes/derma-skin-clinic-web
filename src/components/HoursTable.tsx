"use client";

import { useEffect, useState } from "react";

const days = [
  { name: "Monday", hours: "9:00 – 18:00" },
  { name: "Tuesday", hours: "9:00 – 18:00" },
  { name: "Wednesday", hours: "9:00 – 18:00" },
  { name: "Thursday", hours: "9:00 – 18:00" },
  { name: "Friday", hours: "9:00 – 18:00" },
  { name: "Saturday", hours: "9:00 – 18:00" },
  { name: "Sunday", hours: "Closed" },
] as const;

export function HoursTable() {
  // Highlight "today" in Kigali time after hydration to avoid server/client mismatch.
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        timeZone: "Africa/Kigali",
      }).format(new Date()),
    );
  }, []);

  return (
    <table className="w-full text-left">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {days.map((day) => {
          const isToday = today === day.name;
          const closed = day.hours === "Closed";
          return (
            <tr
              key={day.name}
              className={`border-b border-[var(--line)] ${
                isToday ? "bg-forest/[0.06]" : ""
              }`}
            >
              <th
                scope="row"
                className={`py-3.5 pl-3 pr-4 text-[0.95rem] font-medium ${
                  isToday ? "text-forest" : "text-charcoal/80"
                }`}
              >
                {day.name}
                {isToday && (
                  <span className="ml-3 bg-forest px-2 py-0.5 text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-ivory">
                    Today
                  </span>
                )}
              </th>
              <td
                className={`py-3.5 pr-3 text-right text-[0.95rem] ${
                  closed ? "text-muted" : "text-forest"
                } ${isToday ? "font-semibold" : ""}`}
              >
                {day.hours}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
