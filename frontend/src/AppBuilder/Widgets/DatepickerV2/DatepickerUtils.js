import moment from 'moment-timezone';

export const getUnixTime = (date, displayFormat) => {
  if (!date && date !== 0) return null;
  if (!isNaN(Number(date))) return Number(date);
  const val = moment(date, displayFormat).valueOf();
  return val === 'Invalid date' ? null : val;
};

export const getSelectedTimestampFromUnixTimestamp = (unixTimestamp, displayTimezone, isTimezoneEnabled) => {
  if (!isTimezoneEnabled || !unixTimestamp) return unixTimestamp;
  const localTimeOffset = moment(unixTimestamp).utcOffset();
  const selectedTimeOffset = moment(unixTimestamp).tz(displayTimezone).utcOffset();
  const modifiedTime = moment(unixTimestamp).subtract(localTimeOffset - selectedTimeOffset, 'minutes');
  return modifiedTime.valueOf() ? null : modifiedTime.valueOf();
};

export const getUnixTimestampFromSelectedTimestamp = (selectedTime, displayTimezone, isTimezoneEnabled) => {
  if (!isTimezoneEnabled || !selectedTime) return selectedTime;
  const localTimeOffset = moment(selectedTime).utcOffset();
  const selectedTimeOffset = moment(selectedTime).tz(displayTimezone).utcOffset();
  const modifiedTime = moment(selectedTime).add(localTimeOffset - selectedTimeOffset, 'minutes');
  return modifiedTime.valueOf() === 'Invalid date' ? null : modifiedTime.valueOf();
};

export const convertToIsoWithTimezoneOffset = (timestamp, timezone) => {
  const val = moment.tz(timestamp, timezone).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
  return val === 'Invalid date' ? null : val;
};

export const getFormattedSelectTimestamp = (selectedTime, displayFormat) => {
  const val = moment(selectedTime).format(displayFormat);
  return val === 'Invalid date' ? null : val;
};

export const is24HourFormat = (displayFormat) => {
  const uses24HourTokens = /H{1,2}/.test(displayFormat);
  const hasAmPm = /[aA]/.test(displayFormat);
  return uses24HourTokens && !hasAmPm;
};

export const isMinTimeValid = (minTime, selectedDate) => {
  try {
    if (!minTime) return true;
    const momentObj = moment(selectedDate);
    const [minHour, minMinute] = minTime.split(':');
    const [selectedHour, selectedMinute] = [momentObj.hour(), momentObj.minute()];
    if (selectedHour < minHour) return false;
    if (selectedHour == minHour && selectedMinute < minMinute) return false;
    return true;
  } catch (e) {
    return true;
  }
};

export const isMaxTimeValid = (maxTime, selectedDate) => {
  try {
    if (!maxTime) return true;
    const momentObj = moment(selectedDate);
    const [maxHour, maxMinute] = maxTime.split(':');
    const [selectedHour, selectedMinute] = [momentObj.hour(), momentObj.minute()];
    if (selectedHour > maxHour) return false;
    if (selectedHour == maxHour && selectedMinute > maxMinute) return false;
    return true;
  } catch (e) {
    return true;
  }
};

export const isMaxDateValid = (maxDate, selectedDate) => {
  if (!maxDate) return true;
  const val = moment(selectedDate).isSameOrBefore(maxDate);
  return val === 'Invalid date' ? true : val;
};

export const isMinDateValid = (minDate, selectedDate) => {
  if (!minDate) return true;
  const val = moment(selectedDate).isSameOrAfter(minDate);
  return val === 'Invalid date' ? true : val;
};

export const isCustomRuleValid = (customRule) => {
  if (typeof customRule === 'string' && customRule !== '') {
    return false;
  }
  return true;
};

export const isMandatoryValid = (isMandatory, selectedDate) => {
  if (isMandatory && !selectedDate) return false;
  return true;
};

export const isDateValid = (selectedDate, validation) => {
  const { minDate, maxDate, minTime, maxTime, customRule, excludedDates } = validation;
  if (!isMinDateValid(minDate, selectedDate) && moment(minDate, 'DD/MM/YYYY').isValid())
    return {
      isValid: false,
      validationError: `Selected date is less than minimum date (${moment(minDate, 'DD/MM/YYYY').format(
        'DD/MM/YYYY'
      )})`,
    };

  if (!isMaxDateValid(maxDate, selectedDate) && moment(maxDate, 'DD/MM/YYYY').isValid())
    return {
      isValid: false,
      validationError: `Selected date is greater than maximum date (${moment(maxDate, 'DD/MM/YYYY').format(
        'DD/MM/YYYY'
      )})`,
    };

  if (!isMinTimeValid(minTime, selectedDate))
    return { isValid: false, validationError: `Selected time is less than minimum time (${minTime})` };

  if (!isMaxTimeValid(maxTime, selectedDate))
    return { isValid: false, validationError: `Selected time is greater than maximum time (${maxTime})` };

  if (!isCustomRuleValid(customRule)) return { isValid: false, validationError: customRule };

  if (excludedDates && excludedDates.length) {
    const isExcluded = excludedDates.find((date) => moment(date, 'DD/MM/YYYY').isSame(selectedDate, 'day'));
    if (isExcluded) return { isValid: false, validationError: 'Selected date is excluded' };
  }

  return { isValid: true, validationError: '' };
};
