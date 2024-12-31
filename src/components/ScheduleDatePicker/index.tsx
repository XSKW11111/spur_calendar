"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import useDayJs from "@/hooks/useDayJs";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ScheduleDatePicker = ({ selectedDate, setSelectedDate, selectedTime, setSelectedTime}: { selectedDate: Date | undefined, setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>, selectedTime: string, setSelectedTime: React.Dispatch<React.SetStateAction<string>>}): React.ReactElement => {
    
    const dayjs = useDayJs();

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTime(event.target.value);

        const date = dayjs(selectedDate);

        const time = dayjs(event.target.value, "HH:mm");
        const newDate = date.set('hour', time.hour()).set('minute', time.minute()).toDate();
        console.log("newDate", newDate);
        setSelectedDate(newDate);
      };

    return (
    <Popover>
      <PopoverTrigger asChild>

        <Button
          variant={"outline"}
          className={cn(
            "w-full text-left font-normal flex flex-row justify-between",
            !selectedDate && "text-muted-foreground"
          )}
        >

          {selectedDate ? format(selectedDate, "MM/dd/yy") + " at " + format(selectedDate, "h:mm a") + ' PST' : <span>Pick a date</span>}
          <CalendarIcon />

        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          initialFocus
        />
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
            <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 -webkit-datetime-edit-hour-field::text-wite -webkit-datetime-edit-minute-field::text-white -webkit-datetime-edit-hour-field::bg-black -webkit-datetime-edit-minute-field::bg-black"
            />
          </div>
      </PopoverContent>
    </Popover>
  )
}

export default ScheduleDatePicker;