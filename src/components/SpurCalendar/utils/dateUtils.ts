import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'

dayjs.extend(customParseFormat)

export const generateTimeSlots = (
    startTime: string,
    intervalMinutes: number
) => {
    const slots = []
    let currentTime = dayjs(startTime, 'HH:mm A')
    const end = dayjs(currentTime.add(1, 'day'), 'HH:mm A')

    while (currentTime.isBefore(end) || currentTime.isSame(end)) {
        slots.push(currentTime.format('h A')) // Format as '9 AM', '9 AM', etc.
        currentTime = currentTime.add(intervalMinutes, 'minute')
    }

    return slots
}

// Function to generate 7 days from a given start date
export function generateWeek(startDate: string) {
    const week = []
    let currentDay = dayjs(startDate) // Start from the provided date

    for (let i = 0; i < 7; i++) {
        week.push(currentDay.format('YYYY-MM-DD')) // Add day in YYYY-MM-DD format
        currentDay = currentDay.add(1, 'day') // Move to the next day
    }

    return week
}
