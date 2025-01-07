"use client";

import React from 'react';
import IconPlus from '@/components/Icons/IconPlus';

const ScheduleButton = ({ onClick }: { onClick?: () => void }): React.ReactElement => {
    return (
        <button className="bg-[#0435DD] hover:bg-blue-700 w-[145px] box-border flex flex-row gap-2 items-center justify-center py-2 px-3 rounded-lg" onClick={onClick}>
            <IconPlus size={16} color="white"/>
            <p className="text-white font-semibold text-sm ">Schedule Test</p>
        </button>   
    );
}
export default ScheduleButton;