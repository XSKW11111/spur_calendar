import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

const useDayJs = () => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.tz.setDefault('America/Los_Angeles')

    return dayjs
}

export default useDayJs
