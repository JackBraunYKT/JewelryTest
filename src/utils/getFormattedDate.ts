export default function getFormattedDate(timestamp: number): string {
  const date: Date = new Date(timestamp);

  date.setUTCHours(date.getUTCHours() - 3);

  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  return (
    `${year}` +
    `${month < 10 ? "0" + month : month}` +
    `${day < 10 ? "0" + day : day}`
  );
}
