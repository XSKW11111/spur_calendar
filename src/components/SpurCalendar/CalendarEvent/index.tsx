import { Dayjs } from "dayjs";
import IconClock from "@/components/Icons/IconClock";

const CalendarEvent = ({title, date}: {title: string, date: Dayjs}) => {
    return <div className="w-full h-[44px] box-border flex flex-col items-start p-2 justify-center border border-[#0435DD80] bg-[#E5EAFB] rounded">
            <p className="font-sans font-semibold text-xs text-[#0435DD]">{title}</p>
            <div className="font-sans font-extralight text-xs text-[#0435DD] flex flex-row gap-1 items-center">
                <IconClock size={12} color="#0435DD"/> 
                <p>{`${date.format('HH:mm A')} PST`}</p>
            </div>
        </div>;
};

export default CalendarEvent;