var getWeekDay = function(){
  var day = new Date().getDay() - 1;
  var week = [];
  week.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
  return week[day];
};

exports.date = getWeekDay;
