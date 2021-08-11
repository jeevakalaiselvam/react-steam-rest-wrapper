import { end } from "@popperjs/core";

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

export const getDatesBetweenDates = (year = new Date().getFullYear()) => {
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);

  let dates = [];
  //to avoid modifying the original date
  const theDate = startDate;
  while (theDate <= endDate) {
    const date = new Date(theDate);
    dates = [
      ...dates,
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    ];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

export const transformAchievementsToDate = (achievements, dates) => {
  let allDateObjects = {};

  console.log("ALL DATES -> ", allDateObjects);
  achievements.forEach((achievement) => {
    if (!allDateObjects[achievement.unlocked_time_desc]) {
      allDateObjects[achievement.unlocked_time_desc] = [];
    }
    allDateObjects[achievement.unlocked_time_desc].push(achievement);
  });
  console.log(allDateObjects);

  return allDateObjects;
};
