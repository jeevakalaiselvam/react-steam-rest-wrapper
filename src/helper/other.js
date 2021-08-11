export const recent10Years = (currentYear = new Date().getFullYear()) => {
  let recentYears = [];
  let counter = 0;
  while (counter <= 10) {
    recentYears.push(currentYear);
    currentYear--;
    counter++;
  }
  return recentYears;
};
