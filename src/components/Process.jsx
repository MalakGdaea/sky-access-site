import React,{ useState } from 'react';
import {process} from "../../constants/index.js";
import ProcessAnimation from "./ProcessAnimation.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const [currentStep, setCurrentStep] = useState(-1);

    useGSAP(() => {
        const steps = gsap.utils.toArray("#process .step");
        const totalSteps = steps.length;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#process",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: '#process .container',
                onUpdate: (self) => {
                    const index = Math.round(self.progress * (totalSteps - 1));
                    setCurrentStep(prev => (prev === index ? prev : index));
                }
            }
        });

        steps.forEach((step) => {

            tl.to(step, {
                x: 100,
                color: '#ffffff',
                ease: "power2.inOut",
            })
                .to(step, {
                    x: 0,
                    color: '#4b5563', // text-gray-600
                    ease: "power2.inOut"
                }, "+=1.5");
        });
    });

    useGSAP(() => {
        gsap.from('.step-description', {
            ease: "power2.out",
            opacity: 0.7,
        })
    }, [currentStep]);

    return (
        <section id="process">
            <div className="process-pin-wrapper w-full min-h-screen flex items-center justify-center">
            <div className="container">
                <div className="steps">
                    {process.map((prc, index) => (
                        <h2 key={index} className="step">
                            {prc.name.toUpperCase()}
                        </h2>
                    ))}
                </div>
                <div className="steps-animation">
                    <ProcessAnimation/>
                    {currentStep !== -1 && <p className="step-description">
                        {process[currentStep].description}
                    </p>}
                </div>
            </div>
            </div>
        </section>
    );
};

export default Process;