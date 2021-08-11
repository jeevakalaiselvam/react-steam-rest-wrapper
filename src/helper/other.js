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
    let date = new Date(theDate);
    let day = "" + date.getDate();
    if (day.length === 1) day = `0${day}`;
    let month = "" + (date.getMonth() + 1);
    if (month.length === 1) month = `0${month}`;
    let year = date.getFullYear();
    dates = [...dates, `${year}-${month}-${day}`];
    theDate.setDate(theDate.getDate() + 1);
  }

  return dates;
};

export const transformAchievementsToDate = (achievements, dates) => {
  let allDateObjects = {};

  achievements.forEach((achievement) => {
    if (!allDateObjects[achievement.unlocked_time_desc]) {
      allDateObjects[achievement.unlocked_time_desc] = [];
    }
    allDateObjects[achievement.unlocked_time_desc].push(achievement);
  });

  return allDateObjects;
};
