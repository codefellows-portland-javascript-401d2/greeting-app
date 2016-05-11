var getWeekDay = function(){
  var week = [];
  week.push('Monday', 'Tuesday', 'Wednesday', 'Purrsday', 'Friday', 'Caturday', 'Sunday');

  var day = new Date().getDay() - 1;
  return week[day];
};

exports.date = getWeekDay;
