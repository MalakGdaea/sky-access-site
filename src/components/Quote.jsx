import React, {useState} from 'react';
import ContactForm from "./ContactForm.jsx";
import BuildingForm from "./BuildingForm.jsx";
import ScheduleForm from "./ScheduleForm.jsx";

const Quote = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    return (
        <section id="quote">
            <div className="form-container">
                <div className="w-3/4">
                    <h1 className="text-xl md:text-3xl font-bold 2xl:text-4xl mb-2 md:mb-10">Let's Scale Your <br/>Maintenance</h1>
                    <address className="text-sm md:text-lg">
                        <span>Direct Line: +1 (555) 123-667</span><br/>
                        <span>Email: info@skyLine.com</span>
                    </address>
                </div>
                <div className="w-full">
                    {step <= 3 && (
                        <div className="flex justify-between mb-4 md:mb-7">
                            <span className={step === 1 ? "active" : ""}>1.Contact</span>
                            <span className={step === 2 ? "active" : ""}>2.Building</span>
                            <span className={step === 3 ? "active" : ""}>3.Schedule</span>
                        </div>
                    )}

                    {step === 1 && <ContactForm/>}
                    {step === 2 && <BuildingForm/>}
                    {step === 3 && <ScheduleForm/>}


                    {/* Thank You Message */}
                    {step > 3 && (
                        <div className="text-center py-10">
                            <h2 className="text-2xl font-semibold">Thank You!</h2>
                            <p>We've received your request and will contact you shortly.</p>
                            <button
                                onClick={() => setStep(1)}>
                                Send another request
                            </button>
                        </div>
                    )}

                    {/* Button Logic: Hide button after step 3 */}
                    {step <= 3 && (
                        <div className="flex justify-center w-full mt-5">
                            <button
                                onClick={handleNext}>
                                {step === 3 ? 'Send Request' : 'Next Step'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Quote;