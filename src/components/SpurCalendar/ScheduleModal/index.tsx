"use client"

import React, { useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import ScheduleButton from '@/components/SpurCalendar/ScheduleButton';
import ScheduleDatePicker from '@/components/ScheduleDatePicker';
import { DAY_IN_WEEK } from '@/components/ScheduleDatePicker/constants';
import { Separator } from "@/components/ui/separator"
import { createClient } from '@/utils/supabase/client'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import IconCross from '@/components/Icons/IconCross';

const ScheduleModal = (): React.ReactElement => {
    const subpabase = createClient();
    const queryClient = useQueryClient();

    const [selectedDayInWeek, setSelectedDayInWeek] = useState<number>(0);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string>('');

    const [name, setName] = useState<string>('');
    const { toast } = useToast()

    const handleReset = () => {
        setSelectedDayInWeek(0);
        setSelectedDate(undefined);
        setName('');
    };

    const InsertTestSuiteEvent = async () => {
        if (!selectedDate) {
           throw new Error('Please select a date');
        }

        const selectedDateTimestamp = selectedDate.toISOString();
        const { error } = await subpabase.from('TestSuiteEvent').insert({
            name: name,
            startTime: selectedDateTimestamp,
            weeklyRunDay: selectedDayInWeek,
        });

        if (error) {
            throw error;
        }
    };

    const useMutationInsertTestSuiteEvent = useMutation({
        mutationFn: InsertTestSuiteEvent,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['TestSuitesEvent'] });
            handleReset();
        },
        onError: (error) => {
            toast({
                title: 'Error',
                description: error.message,
                variant: 'destructive',
            })
        },
    });

    const handleSave = async () => {
        // Use tanstack query to handle state update and mutation
        useMutationInsertTestSuiteEvent.mutate();
    };

    
    return (
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <div onClick={handleReset}>
                    <ScheduleButton />
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-[#0A0A0A80] bg-opacity-50" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 box-border w-[640px] h-[430px]">
                        <div className="w-full flex flex-row items-center justify-between">
                            <Dialog.Title className="font-sans text-2xl text-left font-semibold">Schedule Detail</Dialog.Title>
                            <Dialog.Close asChild><div className="cursor-pointer"><IconCross size={16} color="text-black"/></div></Dialog.Close>
                        </div>
                        <div className="w-full flex flex-col gap-6 py-4">
                        <fieldset>
                            <label className="block text-sm font-medium text-gray-700">Test Suite</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 h-[44px] box-border px-3 py-2block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </fieldset>
                        <div className="w-full flex flex-col box-border px-5 py-4 gap-5 bg-gray-100 rounded-xl border border-gray-200">
                            <fieldset>
                                <label className="block text-sm font-medium text-gray-700">Start Date And Time</label>
                                <ScheduleDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
                            </fieldset>
                            <fieldset>
                                <label className="block text-sm font-medium text-gray-700">Run Weekly on Every</label>
                                <div className="w-full flex flex-row items-center justify-start">
                                { DAY_IN_WEEK.map((day, index) => {
                                    return (
                                        <div key={index} onClick={() => setSelectedDayInWeek(index)} className={cn("w-full bg-white flex flex-row gap-2 px-3 py-2 items-center justify-center border border-gray-200", selectedDayInWeek === index && "bg-[#0435DD]")}>
                                            <p className={cn("font-sans font-light	text-sm text-[#717070]", selectedDayInWeek === index && "text-white")}>{day}</p>
                                        </div>
                                    )
                                })}
                                </div>
                            </fieldset>
                        </div>
                        </div>

                        <Separator className="w-full bg-gray-200"/>

                        <div className="w-full flex flex-row gap-2 items-center justify-center">
                        <div className="w-full flex flex-row gap-2 items-center justify-start py-4 box-border">
                        <Dialog.Close asChild>
                            <button className="grow w-full bg-white hover:bg-gray-200 border border-gray-200 box-border flex flex-row gap-2 items-center justify-center py-2 px-3 rounded-lg">
                                <p className="text-red-600 font-semibold text-sm">Cancel Schedule</p>
                            </button>
                        </Dialog.Close>
                        <Dialog.Close asChild>
                            <button className="grow w-full bg-[#0435DD] hover:bg-blue-700  box-border flex flex-row gap-2 items-center justify-center py-2 px-3 rounded-lg" onClick={handleSave}>
                                <p className="text-white font-semibold text-sm">Save Changes</p>
                            </button>
                        </Dialog.Close>
                        </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
    );
}

export default ScheduleModal;