export const toDateLong = (date: string) =>
  new Date(date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const getInitials = (word: string) =>
  word
    ?.split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join(' ');
