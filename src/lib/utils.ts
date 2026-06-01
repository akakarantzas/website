import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function parseCalendarDate(date: string) {
  const monthDate = date.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/);

  if (monthDate) {
    const [, monthName, day, year] = monthDate;
    const monthIndex = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ].indexOf(monthName.toLowerCase());

    return new Date(Date.UTC(Number(year), monthIndex, Number(day)));
  }

  return new Date(date);
}

export function formatDate(date: string | Date) {
  // Use UTC to ensure consistent formatting between server and client
  const dateObj = typeof date === "string" ? parseCalendarDate(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
