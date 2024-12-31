"use client"

import React, { useEffect, useMemo } from 'react';
import { generateTimeSlots, generateWeek } from '@/components/SpurCalendar/utils/dateUtils';
import CalendarEvent from '@/components/SpurCalendar/CalendarEvent';
import ScheduleModal from '@/components/SpurCalendar/ScheduleModal';
import { createClient } from '@/utils/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { TestSuiteEvent } from '@/type/type';
import useDayJs from '@/hooks/useDayJs';

const CalenderHeaderCell = ({ day, dayInWeek }: { day: string, dayInWeek: string }): React.ReactElement => {
    return (
        <th className="bg-[#F3F2F1] w-[145px] h-10 box-border px-4 border border-[#DED9D6]">
            <div className="w-full flex flex-row gap-2 items-center justify-start">
            <p className="font-sans font-light text-lg">{day}</p>
            <p className="font-sans font-extralight	text-sm text-[#717070]">{dayInWeek}</p>
            </div>
        </th>
    )
}

const CalenderBodyCell = ({children}: {children?: React.ReactNode}) => {
    return (
        <td className="h-14 w-[145px] box-border p-1 gap-1 items-center justify-center border border-[#DED9D6]">
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
    const dayjs = useDayJs();

    const subpabase = createClient();
    const { toast } = useToast()
    const slots = useMemo(() => generateTimeSlots('00:00 AM', 60), [generateTimeSlots]);
    const week = useMemo(() => generateWeek(dayjs().format('YYYY-MM-DD')), [generateWeek]);
    const [eventList, setEventList] = React.useState<TestSuiteEvent[]>([]);
    
    // TODO date picker to switch weekview
    const eventData: Record<string, Record<string, TestSuiteEvent[]>> = useMemo(() => {
        const data: Record<string, Record<string, TestSuiteEvent[]>> = {};
        eventList.forEach((event) => {
            if (event && event.startTime) {
                const date = dayjs(event.startTime).format('YYYY-MM-DD');
                const time = dayjs(event.startTime).format('h A');

                if (!data[date]) {   
                    data[date] = {};
                  }
            
                  // Initialize the time entry if not present
                  if (!data[date][time]) {
                    data[date][time] = [];
                  }
            
                  // Add the event to the appropriate day and time
                  data[date][time].push(event);
        }
        });
        return data;
    }, [eventList]);

    useEffect(() => {
        const fetchTestSuites = async () => {
            const { data, error } = await subpabase.from('TestSuiteEvent').select('*');
            if (error) {
                console.log(error);
                toast({
                    title: 'Error',
                    description: 'Failed to fetch test suites',
                    variant: 'destructive'
                })
            }
            else {
                setEventList(data as TestSuiteEvent[]);
            }

        }
        fetchTestSuites();
    }, [subpabase]);

    console.log(eventData);
    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex flex-col gap-6">
                <div className="font-sans text-4xl text-left font-semibold">Scheduled Test Suites</div>
                <ScheduleModal />
            </div>

            <div className="w-full flex flex-row h-4"/>
            <table className="w-full rounded overflow-auto">
                
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
                            {week.map((day, index) => {
                                const date = dayjs(day).format('YYYY-MM-DD');
                                return (
                                    <CalenderBodyCell key={index}>
                                            { eventData[date] && eventData[day][slot] ?
                                            <CalendarEvent title={eventData[day][slot][0].name ?? ''} date={dayjs(eventData[day][slot][0].startTime)} />
                                            :
                                            null
                                            }
                                    </CalenderBodyCell>
                                );
                            })}
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default SpurCalendar;