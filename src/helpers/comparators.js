exports.comparatorCompletionDesc = (game1, game2) => {
  if (game1.completion > game2.completion) {
    return -1;
  }
  if (game1.completion < game2.completion) {
    return 1;
  }
  return 0;
};

exports.comparatorPlaytimeDesc = (game1, game2) => {
  if (game1.playtime_minutes > game2.playtime_minutes) {
    return -1;
  }
  if (game1.playtime_minutes < game2.playtime_minutes) {
    return 1;
  }
  return 0;
};

exports.comparatorNameDesc = (game1, game2) => {
  if (game1.name.toLowerCase() < game2.name.toLowerCase()) {
    return -1;
  }
  if (game1.name.toLowerCase() > game2.name.toLowerCase()) {
    return 1;
  }
  return 0;
};

exports.comparatorNameAsc = (game1, game2) => {
  if (game1.name.toLowerCase() > game2.name.toLowerCase()) {
    return -1;
  }
  if (game1.name.toLowerCase() < game2.name.toLowerCase()) {
    return 1;
  }
  return 0;
};
