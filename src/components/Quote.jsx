import React, { useState } from 'react';
import ContactForm from "./ContactForm.jsx";
import BuildingForm from "./BuildingForm.jsx";
import ScheduleForm from "./ScheduleForm.jsx";

const Quote = () => {
    const [step, setStep] = useState(1);

    return (
        <section id="quote">
            <div className="form-container">
                <div className="w-3/4">
                    <div className="mb-20">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h1 className="text-3xl font-bold 2xl:text-4xl">Let's Scale Your <br/>Maintenance</h1>
                    <address className="text-lg">
                        <span>Direct Line: +1 (555) 123-667</span><br/>
                        <span>Email: info@skyLine.com</span>
                    </address>
                </div>
                <div className="w-full">
                    <div className="flex justify-between mb-7">
                        <span>1.Contact</span>
                        <span>2.Building</span>
                        <span>3.Schedule</span>
                    </div>
                    {
                        step === 1 && <ContactForm /> ||
                        step === 2 && <BuildingForm /> ||
                        step === 3 && <ScheduleForm />
                    }
                    <div className="flex justify-center w-full">
                        <button
                            onClick={() => setStep((prev) => prev + 1)}>
                            {step === 3 ? 'Send Request' :  'Next Step'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quote;