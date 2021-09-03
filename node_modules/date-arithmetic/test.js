import assert from 'assert'
import * as dateMath from './index'

var date = new Date(
      2014 /* year */
    , 1    /* month */
    , 18   /* day */
    , 8    /* hour */
    , 25   /* min */
    , 30   /* sec */
    , 5);  /* ms */

var dateLeapYearOnFeb = new Date(
      2016 /* year */
    , 1    /* month */
    , 29   /* day */
    , 8    /* hour */
    , 25   /* min */
    , 30   /* sec */
    , 5);  /* ms */

var dateLeapYear = new Date(
      2016 /* year */
    , 0    /* month */
    , 31   /* day */
    , 8    /* hour */
    , 25   /* min */
    , 30   /* sec */
    , 5);  /* ms */

var beforeDaylightSavingTime = new Date(
      2017 /* year */
    , 2    /* month */
    , 25   /* day */
    , 12    /* hour */
    , 0   /* min */
    , 0   /* sec */
    , 0);  /* ms */

var afterDaylightSavingTime = new Date(
      2017 /* year */
    , 2    /* month */
    , 26   /* day */
    , 12    /* hour */
    , 0   /* min */
    , 0   /* sec */
    , 0);  /* ms */

console.log('---- Accessors ----------------------------')
//accessors
assert.equal(dateMath.year(date), 2014, 'year is equal to 2014')
assert.equal(dateMath.month(date), 1,    'month is equal to 1')
assert.equal(dateMath.date(date), 18,   'date is equal to 18')
assert.equal(dateMath.day(date), 2,   'day is equal to 2')
assert.equal(dateMath.hours(date), 8,    'hour is equal to 8')
assert.equal(dateMath.minutes(date), 25,   'minute is equal to 25')
assert.equal(dateMath.seconds(date), 30,   'seconds is equal to 30')
assert.equal(dateMath.milliseconds(date), 5,    'ms is equal to 5')

console.log(' passed')
console.log('---- start of ----------------------------')

assert.equal(+dateMath.startOf(date, 'year'), +(new Date(2014,0,1,0,0,0,0)), 'startOf year')
assert.equal(+dateMath.startOf(date, 'month'), +(new Date(2014,1,1,0,0,0,0)), 'startOf month')
assert.equal(+dateMath.startOf(date, 'day'), +(new Date(2014,1,18,0,0,0,0)), 'startOf day')
assert.equal(+dateMath.startOf(date, 'week'), +(new Date(2014,1,16,0,0,0,0)), 'startOf week')
assert.equal(+dateMath.startOf(date, 'hours'), +(new Date(2014,1,18,8,0,0,0)), 'startOf hours')
assert.equal(+dateMath.startOf(date, 'minutes'), +(new Date(2014,1,18,8,25,0,0)), 'startOf minutes')
assert.equal(+dateMath.startOf(date, 'seconds'), +(new Date(2014,1,18,8,25,30,0)), 'startOf seconds')

console.log(' passed')
console.log('---- end of ----------------------------')

assert.equal(+dateMath.endOf(date, 'year'), +(new Date(2014,11,31,23,59,59,999)), 'endOf year')
assert.equal(+dateMath.endOf(date, 'month'), +(new Date(2014,1,28,23,59,59,999)), 'endOf month')
assert.equal(+dateMath.endOf(date, 'day'), +(new Date(2014,1,18,23,59,59,999)), 'endOf day')
assert.equal(+dateMath.endOf(date, 'week'), +(new Date(2014,1,22,23,59,59,999)), 'endOf week')
assert.equal(+dateMath.endOf(date, 'hours'), +(new Date(2014,1,18,8,59,59,999)), 'endOf hours')
assert.equal(+dateMath.endOf(date, 'minutes'), +(new Date(2014,1,18,8,25,59,999)), 'endOf minutes')
assert.equal(+dateMath.endOf(date, 'seconds'), +(new Date(2014,1,18,8,25,30,999)), 'endOf seconds')

console.log(' passed')
console.log('---- Date Math ----------------------------')

assert.equal(+dateMath.add(date, 1, 'century'), +(new Date(2114, 1, 18, 8, 25, 30, 5)), 'add century')
assert.equal(+dateMath.add(date, 1, 'decade'), +(new Date(2024, 1, 18, 8, 25, 30, 5)), 'add decade')
assert.equal(+dateMath.add(date, 1, 'year'), +(new Date(2015, 1, 18, 8, 25, 30, 5)), 'add year')
assert.equal(+dateMath.add(dateLeapYear, 1, 'year'), +(new Date(2017, 0, 31, 8, 25, 30, 5)), 'add year to leap year')
assert.equal(+dateMath.add(date, 1, 'month'), +(new Date(2014, 2, 18, 8, 25, 30, 5)), 'add month')
assert.equal(+dateMath.add(dateLeapYear, 1, 'month'), +(new Date(2016, 1, 29, 8, 25, 30, 5)), 'add month on leap year')
assert.equal(+dateMath.add(date, 1, 'day'), +(new Date(2014, 1, 19, 8, 25, 30, 5)), 'add day')
assert.equal(+dateMath.add(dateLeapYear, 29, 'day'), +(new Date(2016, 1, 29, 8, 25, 30, 5)), 'add 29 days on leap year')
assert.equal(+dateMath.add(date, 1, 'week'), +(new Date(2014, 1, 25, 8, 25, 30, 5)), 'add week')
assert.equal(+dateMath.add(date, 1, 'hours'), +(new Date(2014, 1, 18, 9, 25, 30, 5)), 'add hours')
assert.equal(+dateMath.add(date, 24, 'hours'), +(new Date(2014, 1, 19, 8, 25, 30, 5)), 'add a day in hours')
assert.equal(+dateMath.add(dateLeapYear, 696, 'hours'), +(new Date(2016, 1, 29, 8, 25, 30, 5)), 'add 29 days in hours on leap year')
assert.equal(+dateMath.add(date, 1, 'minutes'), +(new Date(2014, 1, 18, 8, 26, 30, 5)), 'add minutes')
assert.equal(+dateMath.add(dateLeapYear, 41760, 'minutes'), +(new Date(2016, 1, 29, 8, 25, 30, 5)), 'add 29 days in minutes on leap year')
assert.equal(+dateMath.add(date, 1440, 'minutes'), +(new Date(2014, 1, 19, 8, 25, 30, 5)), 'add a day in minutes')
assert.equal(+dateMath.add(date, 1, 'seconds'), +(new Date(2014, 1, 18, 8, 25, 31, 5)), 'add seconds')
assert.equal(+dateMath.add(dateLeapYear, 2505600, 'seconds'), +(new Date(2016, 1, 29, 8, 25, 30, 5)), 'add 29 days in seconds on leap year')
assert.equal(+dateMath.add(date, 86400, 'seconds'), +(new Date(2014, 1, 19, 8, 25, 30, 5)), 'add a day in seconds')
assert.equal(+dateMath.add(date, 1, 'milliseconds'), +(new Date(2014, 1, 18, 8, 25, 30, 6)), 'add milliseconds')
assert.equal(+dateMath.add(date, 86400000, 'milliseconds'), +(new Date(2014, 1, 19, 8, 25, 30, 5)), 'add a day in milliseconds')
assert.equal(+dateMath.add(dateLeapYear, 2505600000, 'milliseconds'), +(new Date(2016, 1, 29, 8, 25, 30, 5)), 'add 29 days in milliseconds on leap year')
assert.equal(+dateMath.subtract(date, 24, 'month'), +dateMath.subtract(date, 2, 'year'), 'month rollover')
assert.equal(+dateMath.subtract(dateLeapYearOnFeb, 1, 'year'), +(new Date(2015, 1, 28, 8, 25, 30, 5)), 'subtract a leap year')
assert.equal(+dateMath.subtract(dateLeapYearOnFeb, 60, 'day'), +(new Date(2015, 11, 31, 8, 25, 30, 5)), 'subtract 60 days of a leap year')

assert.equal(+dateMath.max(date, new Date(2013, 0, 1, 0, 0, 0, 0)), +date, 'max')
assert.equal(+dateMath.min(date, new Date(2015, 0, 1, 0, 0, 0, 0)), +date, 'min')

assert.ok(dateMath.eq(date,   new Date(2014,0,1,0,0,0,0),  'year'), 'eq year')
assert.ok(dateMath.neq(date,  new Date(2013,0,1,0,0,0,0),  'year'), 'neq year')
assert.ok(dateMath.lte(date,  new Date(2014,0,1,0,0,0,0), 'year'),  'lte year')
assert.ok(dateMath.lte(date,  new Date(2015,0,1,0,0,0,0), 'year'),  'lte year')
assert.ok(dateMath.lt(date,   new Date(2015,0,1,0,0,0,0),  'year'), 'lt year')
assert.ok(dateMath.gte(date,  new Date(2014,0,1,0,0,0,0), 'year'),  'gte year')
assert.ok(dateMath.gte(date,  new Date(2013,0,1,0,0,0,0), 'year'),  'gte year')
assert.ok(dateMath.gt(date,   new Date(2013,0,1,0,0,0,0),  'year'), 'gt year')

assert.ok(dateMath.inRange(date,  new Date(2013,0,1,0,0,0,0),  new Date(2014,5,1,0,0,0,0)), 'inRange year')
assert.ok(!dateMath.inRange(new Date(2013,0,1,0,0,0,0), date,  new Date(2014,5,1,0,0,0,0)), 'inRange year')

assert.ok(dateMath.inRange(date,  null,  new Date(2014,5,1,0,0,0,0)), 'inRange year')
assert.ok(dateMath.inRange(date,  new Date(2013,0,1,0,0,0,0), null),  'inRange year')

assert.equal(dateMath.diff(date, date, 'milliseconds'), 0)
assert.equal(dateMath.diff(dateMath.subtract(date, 100, 'milliseconds'), date, 'milliseconds'), 100)
assert.equal(dateMath.diff(date, dateMath.subtract(date, 100, 'milliseconds'), 'milliseconds'), -100)
assert.equal(dateMath.diff(dateMath.subtract(date, 100, 'milliseconds'), date, 'seconds'), 0)
assert.equal(dateMath.diff(date, dateMath.subtract(date, 100, 'milliseconds'), 'seconds'), 0)
assert.equal(dateMath.diff(dateMath.subtract(date, 100, 'milliseconds'), date, 'seconds', true), 0.1)
assert.equal(dateMath.diff(date, dateMath.subtract(date, 100, 'milliseconds'), 'seconds', true), -0.1)
assert.equal(dateMath.diff(dateMath.subtract(date, 1000, 'milliseconds'), date, 'seconds'), 1)
assert.equal(dateMath.diff(dateMath.subtract(date, 12, 'minutes'), date, 'minutes'), 12)
assert.equal(dateMath.diff(dateMath.subtract(date, 2, 'hours'), date, 'minutes'), 120)
assert.equal(dateMath.diff(dateMath.subtract(date, 2, 'hours'), date, 'hours'), 2)
assert.equal(dateMath.diff(dateMath.subtract(date, 1, 'day'), date, 'day'), 1)
assert.equal(dateMath.diff(beforeDaylightSavingTime, afterDaylightSavingTime, 'day'), 1)
assert.equal(dateMath.diff(dateMath.subtract(date, 125, 'month'), date, 'month'), 125)
assert.equal(dateMath.diff(dateMath.subtract(date, 125, 'month'), date, 'year'), 10)
assert.equal(dateMath.diff(date, dateMath.subtract(date, 125, 'month'), 'year'), -10)
assert.equal(dateMath.diff(dateMath.subtract(date, 126, 'month'), date, 'year', true), 10.5)
assert.equal(dateMath.diff(date, dateMath.subtract(date, 126, 'month'), 'year', true), -10.5)
assert.equal(dateMath.diff(dateMath.subtract(date, 125, 'month'), date, 'decade'), 1)
assert.equal(dateMath.diff(dateMath.subtract(date, 250, 'month'), date, 'decade'), 2)
assert.equal(dateMath.diff(dateMath.subtract(date, 10, 'year'), date, 'century'), 0)
assert.equal(dateMath.diff(dateMath.subtract(date, 100, 'year'), date, 'century'), 1)
assert.equal(dateMath.diff(dateMath.subtract(date, 101, 'year'), date, 'century'), 1)
assert.equal(dateMath.diff(date, dateMath.subtract(date, 101, 'year'), 'century'), -1)
assert.equal(dateMath.diff(dateMath.subtract(date, 101, 'year'), date, 'century', true), 1.01)
assert.equal(dateMath.diff(dateMath.subtract(date, 201, 'year'), date, 'century'), 2)
assert.throws(function () {
    dateMath.diff(dateMath.subtract(date, 201, 'year'), date, 'unknown');
}, /Invalid units: "unknown"/);

console.log(' passed')
