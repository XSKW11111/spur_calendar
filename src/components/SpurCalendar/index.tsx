import React, { useMemo } from 'react';
import { generateTimeSlots, generateWeek } from '@/components/SpurCalendar/utils/dateUtils';
import dayjs from 'dayjs';
const CalenderHeaderCell = ({ day, dayInWeek }: { day: string, dayInWeek: string }): React.ReactElement => {
    return (
        <th className="bg-[#F3F2F1] h-10 box-border px-4 border border-[#DED9D6]">
            <div className="w-full flex flex-row gap-2 items-center justify-start">
            <p className="font-sans font-light text-lg">{day}</p>
            <p className="font-sans font-extralight	text-sm text-[#717070]">{dayInWeek}</p>
            </div>
        </th>
    )
}

const CalenderBodyCell = ({children}: {children?: React.ReactNode}) => {
    return (
        <td className="h-14 box-border	p-1 gap-1 items-center justify-center border border-[#DED9D6]">
            {children}
        </td>
    )
}

const TimeCell = ({time}: {time: string}) => {
    return (
        <td className="h-14 w-12 box-border	flex items-start justify-center font-sans font-extralight text-sm text-[#717070]">
            {time}
        </td>
    )
}

const SpurCalendar = () => {
    const slots = useMemo(() => generateTimeSlots('00:00 AM', 60), [generateTimeSlots]);
    const week = useMemo(() => generateWeek(dayjs().format('YYYY-MM-DD')), [generateWeek]);

    // TODO date picker to switch weekview
    return (
        <div className="container flex flex-col">
            <div className="w-full flex flex-col gap-6">
                <div className="font-sans text-4xl text-left font-semibold">Scheduled Test Suites</div>
                <div className="w-full flex flex-row">
                    <button className="bg-[#0435DD] hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg">Schedule Test</button>   
                </div>
            </div>

            <div className="w-full flex flex-row h-4"/>
            <table className="w-fullr">
                
                <thead className="w-full">
                    <tr className="w-full ">
                        <th className="h-10 w-12"/>
                        {week.map((day, index) => {
                            const dayNumber = dayjs(day).format('D');
                            const dayOfWeek = dayjs(day).format('dddd');
                            return(
                            <CalenderHeaderCell key={index} day={dayNumber} dayInWeek={dayOfWeek} />
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="w-full h-[400px] overflow-y-scroll">
                    {slots.map((slot, index) => (
                        <tr key={index} className="">
                            <TimeCell time={slot} />
                            {week.map(( index) => (
                                <CalenderBodyCell key={index} />
                            ))}
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default SpurCalendar;