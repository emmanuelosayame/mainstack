export const toDateLong = (date: string | undefined) =>
  date
    ? new Date(date).toLocaleDateString('en', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : undefined;

export const getInitials = (word: string) =>
  word
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join(' ');

export const minMaxDates = (dates: string[]) => {
  const orderedDates = dates.sort((a, b) => Date.parse(a) - Date.parse(b));

  return {
    min: orderedDates.length > 0 ? orderedDates[0] : undefined,
    max:
      orderedDates.length > 0
        ? orderedDates[orderedDates.length - 1]
        : undefined,
  };
};
