"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ScheduleDatePicker = ({ selectedDate, setSelectedDate}: { selectedDate: Date | undefined, setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>}): React.ReactElement => {

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

          {selectedDate ? format(selectedDate, "MM/dd/yy") + " at " + format(selectedDate, "h:mm a") + " PST" : <span>Pick a date</span>}
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
      </PopoverContent>
    </Popover>
  )
}

export default ScheduleDatePicker;