import React from "react";
import IconChevronLeft from "@/components/Icons/IconChevronLeft";
import IconChevronRight from "@/components/Icons/IconChevronRight";

const WeeklySwitchButton = ({week, onLeftClick, onRightClick}: {week: string, onLeftClick: () => void, onRightClick: () => void}) => {
    return (
        <div className="h-9 bg-white flex flex-row gap-2 items-center justify-between box-border border border-gray-200 py-2.5 px-2.5 rounded-md">
            <div onClick={onLeftClick} className="cursor-pointer flex items-center">
            <IconChevronLeft size={16} color="#000000" />
            </div>
            <div className="font-sans font-medium text-sm text-gray-1100">{`Week of ${week}`}</div>
            <div onClick={onRightClick} className="cursor-pointer flex items-center">
            <IconChevronRight size={16} color="#000000" />
            </div>
        </div>
    );
};

export default WeeklySwitchButton