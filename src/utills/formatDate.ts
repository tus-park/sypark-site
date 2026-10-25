export function formatYearMonth(date: string): string {
  const [year, month] = date.split('-');
  return `${year}.${month}`;
}

formatYearMonth('2020-02-02'); // 'YYYY-MM'