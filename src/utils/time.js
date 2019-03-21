import moment from 'moment'

export class Timer {
  constructor () {
  }

   getMonthDateRange(year, month) {
    // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
    // array is 'year', 'month', 'day', etc
    var startDate = moment([year, month - 1]);

    // Clone the value before .endOf()
    var endDate = moment(startDate).endOf('month');
    // make sure to call toDate() for plain JavaScript date type
    return { start: startDate, end: endDate };
  }

   getDayDateRange(year, month, day) {
    // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
    // array is 'year', 'month', 'day', etc
    var startDate = moment([year, month-1,day]);

    // Clone the value before .endOf()
    var endDate = moment(startDate).endOf('day');
    // make sure to call toDate() for plain JavaScript date type
    return { start: startDate, end: endDate };
  }

   getYearDateRange(year) {
    // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
    // array is 'year', 'month', 'day', etc
    var startDate = moment([year, 0]);

    // Clone the value before .endOf()
    var endDate = moment(startDate).endOf('year');

    // make sure to call toDate() for plain JavaScript date type
    return { start: startDate, end: endDate };
  }

  findCurrentMonthYearDay() {
    var check = moment().local();
    var month = check.format('M');
    var day   = check.format('D');
    var year  = check.format('YYYY');

    return {day:day,month:month,year:year};
  }



  findDayInMonth() {
    return moment().local().daysInMonth();
  }

  returnPercentageBasedOnType(type) {
    /* return moment object*/

    const timeInfo = this.findCurrentMonthYearDay();
    const leapYear = moment([timeInfo.year]).isLeapYear();

    const dayMinutes = 1440;
    const monthMinutes = dayMinutes*this.findDayInMonth();
    var yearMinutes = 1;

    if(leapYear) {
       yearMinutes = 366*dayMinutes;
    }
    else {
       yearMinutes = 365*dayMinutes;
    }
    

    

    if(type=="y") {
      const startYearTime = this.getYearDateRange(timeInfo.year).start;
      const currentTime = moment().local();
      const duration = moment.duration(currentTime.diff(startYearTime));
      const minutes = duration.asMinutes();

      console.log(minutes);
      const percent = (minutes/(yearMinutes))*100;

      return Math.round(percent);
    }
    else if(type=="m") {
      const startMonthTime = this.getMonthDateRange(timeInfo.year,timeInfo.month).start;
      const currentTime = moment().local();
      const duration = moment.duration(currentTime.diff(startMonthTime));
      const minutes = duration.asMinutes();

      console.log(minutes);
      const percent = (minutes/(monthMinutes))*100;

      return Math.round(percent);
    }
    else if(type=="t") {
      const startDayTime = this.getDayDateRange(timeInfo.year,timeInfo.month,timeInfo.day).start;
      const currentTime = moment().local();

      const duration = moment.duration(currentTime.diff(startDayTime));
      const minutes = duration.asMinutes();

      const percent = (minutes/(dayMinutes))*100;

      return Math.round(percent);
    }




  }
}


