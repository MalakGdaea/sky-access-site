import React from 'react';

const BuildingForm = () => {
    return (
        <form onSubmit={e => e.preventDefault()} className="flex flex-col space-y-4">
            <h1 className="text-white font-bold text-xl mb-2">2. Building Details</h1>

            {/* Street Address */}
            <label htmlFor="address" className="sr-only">Building Address</label>
            <input
                id="address"
                type="text"
                placeholder="Building Address"
            />

            <div className="flex gap-4">
                {/* Number of Floors */}
                <div className="flex-1">
                    <label htmlFor="floors" className="sr-only">Number of Floors</label>
                    <input
                        id="floors"
                        type="number"
                        placeholder="Number of Floors"
                    />
                </div>

                {/* Building Type Dropdown */}
                <div className="flex-1">
                    <label htmlFor="type" className="sr-only">Building Type</label>
                    <select
                        id="type"
                        className="w-full p-3 rounded-md bg-white text-gray-500 outline-none appearance-none"
                    >
                        <option value="" disabled selected>Building Type</option>
                        <option value="commercial">Commercial Office</option>
                        <option value="residential">Residential High-rise</option>
                        <option value="hotel">Hotel / Hospitality</option>
                    </select>
                </div>
            </div>

            {/* Estimated Square Footage or Additional Notes */}
            <label htmlFor="notes" className="sr-only">Access Notes</label>
            <textarea
                id="notes"
                placeholder="Any specific access requirements? (e.g. Roof access available)"
                className="h-24"
            ></textarea>
            {/* Image Upload Field */}
            <div className="flex flex-col items-center justify-center w-full">
                <label
                    htmlFor="building-image"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/30 rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-3 text-white/60" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-2 text-sm text-white/80"><span
                            className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-white/50">Building Image (PNG, JPG)</p>
                    </div>
                    <input id="building-image" type="file" className="hidden" accept="image/*"/>
                </label>
            </div>
        </form>
    );
};

export default BuildingForm;