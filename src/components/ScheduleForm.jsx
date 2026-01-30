import React from 'react';

const ScheduleForm = () => {
    return (
        <form onSubmit={e => e.preventDefault()} className="flex flex-col space-y-6">
            <h1 className="text-white font-bold text-xl mb-2">3. Service Schedule</h1>

            {/* Preferred Date Selector */}
            <div className="flex flex-col">
                <label htmlFor="startDate" className="text-white/70 text-sm mb-2 ml-1">Preferred Start Date</label>
                <input
                    id="startDate"
                    type="date"
                    className="w-full p-3 rounded-md bg-white text-black outline-none focus:ring-2 focus:skyrise-blue"
                />
            </div>

            {/* Frequency Selection (Maintenance Plans) */}
            <div className="flex flex-col">
                <label className="text-white/70 text-sm mb-3 ml-1">Cleaning Frequency</label>
                <div className="grid grid-cols-3 gap-3">
                    {['One-Time', 'Quarterly', 'Semi-Annual'].map((plan) => (
                        <label key={plan} className="cursor-pointer">
                            <input type="radio" name="frequency" value={plan} className="peer hidden" />
                            <div className="plan">
                                {plan}
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Time of Day */}
            <div className="flex flex-col">
                <label htmlFor="time" className="text-white/70 text-sm mb-2 ml-1">Best Time for On-site Inspection</label>
                <select
                    id="time"
                    className="w-full p-3 rounded-md bg-white text-gray-500 outline-none"
                >
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                </select>
            </div>

            <p className="text-xs text-white/50 italic text-center">
                *Final scheduling is subject to weather conditions and safety clearance.
            </p>
        </form>
    );
};

export default ScheduleForm;