export const pipeDuration = (minutes: number): string => {
  const mins = minutes % 60;
  const hours = Math.floor(minutes / 60);
  const HH = hours.toString().padStart(2, '0');
  const MM = mins.toString().padStart(2, '0');
  return `${HH}:${MM}`;
};
