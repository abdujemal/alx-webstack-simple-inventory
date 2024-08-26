
export const aggregateDataByDayForMonth = (data) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
  
    const lastMonthDate = new Date(currentYear, currentMonth - 1);
  
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  
    const aggregatedDataCurrentMonth = {};
    const aggregatedDataLastMonth = {};
  
    // Initialize for the current month
    for (let i = 1; i <= daysInMonth; i++) {
      aggregatedDataCurrentMonth[i] = {
        key: `current-${i}`, // Ensure a unique key
        day: i,
        totalValue: 0,
      };
    }
  
    // Initialize for the last month
    for (let i = 1; i <= daysInLastMonth; i++) {
      aggregatedDataLastMonth[i] = {
        key: `last-${i}`, // Ensure a unique key
        day: i,
        totalValue: 0,
      };
    }
  
    // Aggregate data for the current month
    data.forEach((item) => {
      const date = new Date(item.date);
      const day = date.getDate();
  
      if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) {
        if (aggregatedDataCurrentMonth[day]) {
          aggregatedDataCurrentMonth[day].totalValue += getPrice(item);
        }
      }
    });
  
    // Aggregate data for the last month
    data.forEach((item) => {
      const date = new Date(item.date);
      const day = date.getDate();
  
      if (date.getMonth() === lastMonthDate.getMonth() && date.getFullYear() === lastMonthDate.getFullYear()) {
        if (aggregatedDataLastMonth[day]) {
          aggregatedDataLastMonth[day].totalValue += getPrice(item);
        }
      }
    });
  
    return {
      currentMonthData: Object.values(aggregatedDataCurrentMonth),
      lastMonthData: Object.values(aggregatedDataLastMonth),
    };
  };
  
  

  export const aggregateDataByMonthAndYear = (data) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const previousYear = currentYear - 1;
  
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Initialize objects to store aggregated data for all months of both years
    const aggregatedDataCurrentYear = {};
    const aggregatedDataLastYear = {};
  
    for (let month = 0; month < 12; month++) {
        const currentYearKey = `${monthNames[month]}`;
        aggregatedDataCurrentYear[currentYearKey] = {
            key: `current-${currentYearKey}`,
            month: currentYearKey,
            totalValue: 0,
        };
      }
    
    for (let month = 0; month < 12; month++) {
        const previousYearKey = `${monthNames[month]}`;
        aggregatedDataLastYear[previousYearKey] = {
            key: `last-${previousYearKey}`,
            month: previousYearKey,
            totalValue: 0,
        };
    }
  
    // Aggregate data by month for both years
    data.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth(); // Get the month (0-11)
      const year = date.getFullYear();
  
      const key = `${monthNames[month]}`;
  
      if (year === currentYear && aggregatedDataCurrentYear[key]) {
        aggregatedDataCurrentYear[key].totalValue += getPrice(item);
      } else if (year === previousYear && aggregatedDataLastYear[key]) {
        aggregatedDataLastYear[key].totalValue += getPrice(item);
      }
    });
  
    // Convert the aggregated data back to an array for use in charts
    return {
      currentYearData: Object.values(aggregatedDataCurrentYear),
      lastYearData: Object.values(aggregatedDataLastYear),
    };
  };
  
  export const aggregateDataByDayForWeek = (data) => {
    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const currentDate = new Date();
    const currentWeekStartDate = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay()));
    const lastWeekStartDate = new Date(currentWeekStartDate);
    lastWeekStartDate.setDate(lastWeekStartDate.getDate() - 7);
  
    const aggregatedDataCurrentWeek = {};
    const aggregatedDataLastWeek = {};

  
    // Initialize objects for each day of the current and last week
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(currentWeekStartDate);
      currentDay.setDate(currentDay.getDate() + i);
  
      const lastDay = new Date(lastWeekStartDate);
      lastDay.setDate(lastDay.getDate() + i);

      const currentDayKey = daysOfWeek[currentDay.getDay()];
      const lastDayKey = daysOfWeek[lastDay.getDay()];

      aggregatedDataCurrentWeek[currentDayKey] = {
        day: currentDayKey,
        totalValue: 0,
      };
      aggregatedDataLastWeek[lastDayKey] = {
        day: lastDayKey,
        totalValue: 0,
      };
    }
  
    const currentWeekNumber = getWeekNumber(currentDate);
    const startOfCurrentWeek = getStartOfWeek(currentDate);
    const startOfLastWeek = new Date(startOfCurrentWeek);
    startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);

    data.forEach((item) => {
        const date = new Date(item.date);
        const itemWeekNumber = getWeekNumber(date);

        // Check if date is in the current week or last week
        if (itemWeekNumber === currentWeekNumber) {
            const dayKey = daysOfWeek[date.getDay()];
            if (!aggregatedDataCurrentWeek[dayKey]) {
                aggregatedDataCurrentWeek[dayKey] = { totalValue: 0 };
            }
            aggregatedDataCurrentWeek[dayKey].totalValue += getPrice(item);
        } else if (itemWeekNumber === currentWeekNumber - 1) {
            const dayKey = daysOfWeek[date.getDay()];
            if (!aggregatedDataLastWeek[dayKey]) {
                aggregatedDataLastWeek[dayKey] = { totalValue: 0 };
            }
            aggregatedDataLastWeek[dayKey].totalValue += getPrice(item);
        }
    });
  
    return {
      currentWeekData: Object.values(aggregatedDataCurrentWeek),
      lastWeekData: Object.values(aggregatedDataLastWeek),
    };
  };
  
  export const aggregateDataBy6Months = (data) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // 0-11 (January is 0)
  
    // Calculate start dates for the current and previous 6 months
    const sixMonthsAgoDate = new Date(currentDate.setMonth(currentMonth - 5));
    const previousSixMonthsAgoDate = new Date(currentDate.setMonth(currentMonth - (5+6)));
  
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const aggregatedDataCurrent6Months = {};
    const aggregatedDataLast6Months = {};

     // Initialize the object for the last 6 months
    for (let i = 1; i <= 7; i++) {
        const date = new Date(previousSixMonthsAgoDate.setMonth(previousSixMonthsAgoDate.getMonth() + i));
        const month = date.getMonth();
        const year = date.getFullYear();
        const key = `${month}`;
        aggregatedDataLast6Months[key] = {
          month: `${key} ${year}`,
          totalValue: 0,
        };
    }
  
    // Initialize the object for the current 6 months
    for (let i = 0; i < 6; i++) {
      const date = new Date(sixMonthsAgoDate.getFullYear(), sixMonthsAgoDate.getMonth() + i);
      const month = date.getMonth();
      const year =  date.getFullYear();
      const key = `${month}`;
      aggregatedDataCurrent6Months[key] = {
        month: key,
        totalValue: 0,
      };
    }   
  
    // Aggregate data for the current 6 months
    data.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth();
      const year = date.getFullYear();
  
      const key = `${month}`;
  
      if (aggregatedDataCurrent6Months[key]) {
        aggregatedDataCurrent6Months[key].totalValue += getPrice(item);
      }
    });
  
    // Aggregate data for the last 6 months
    data.forEach((item) => {
      const date = new Date(item.date);
      const month = date.getMonth();
      const year = date.getFullYear();
  
      const key = `${month}`;
  
      if (aggregatedDataLast6Months[key]) {
        aggregatedDataLast6Months[key].totalValue += getPrice(item);
      }
    });
  
    return {
      current6MonthsData: Object.values(aggregatedDataCurrent6Months),
      last6MonthsData: Object.values(aggregatedDataLast6Months),
    };
  };
  

const getPrice = (item)=>{
    return item.pPrice * 1//item.pStock;
}

const getWeekNumber = (date) => {
    const start = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - start) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + start.getDay() + 1) / 7);
};

const getStartOfWeek = (date) => {
    const day = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - day);
    return startOfWeek;
};