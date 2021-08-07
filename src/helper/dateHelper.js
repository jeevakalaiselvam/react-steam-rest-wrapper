export const getFullDate = (date) => {
  switch (date.split("-")[1]) {
    case "1":
      return `Jan ${date.split("-")[2]},${date.split("-")[0]}`;
    case "2":
      return `Feb ${date.split("-")[2]},${date.split("-")[0]}`;
    case "3":
      return `Mar ${date.split("-")[2]},${date.split("-")[0]}`;
    case "4":
      return `Apr ${date.split("-")[2]},${date.split("-")[0]}`;
    case "5":
      return `May ${date.split("-")[2]},${date.split("-")[0]}`;
    case "6":
      return `Jun ${date.split("-")[2]},${date.split("-")[0]}`;
    case "7":
      return `Jul ${date.split("-")[2]},${date.split("-")[0]}`;
    case "8":
      return `Aug ${date.split("-")[2]},${date.split("-")[0]}`;
    case "9":
      return `Sep ${date.split("-")[2]},${date.split("-")[0]}`;
    case "10":
      return `Oct ${date.split("-")[2]},${date.split("-")[0]}`;
    case "11":
      return `Nov ${date.split("-")[2]},${date.split("-")[0]}`;
    case "12":
      return `Dec ${date.split("-")[2]},${date.split("-")[0]}`;

    default:
      return "";
  }
};
