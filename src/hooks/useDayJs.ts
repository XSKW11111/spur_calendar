import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isoWeek from 'dayjs/plugin/isoWeek'

const useDayJs = () => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(weekOfYear)
    dayjs.extend(isoWeek)
    dayjs.tz.setDefault('America/Los_Angeles')

    return dayjs
}

export default useDayJs
