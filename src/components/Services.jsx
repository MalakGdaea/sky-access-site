import React from 'react';
import {services} from '../../constants/index.js';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                start: 'top 80%',
            }
        });

        // 1️ entrance (staggered)
        tl.fromTo(
            '.glass-card-light',
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: 'power2.out',
            }
        );

        // 2️ gentle floating (overlapping)
        tl.to(
            '.glass-card-light',
            {
                y: 50,
                duration: 0.6,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            },
            '-=0.6'
        );

        tl.to('.glass-card-light', {
            y:60,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            stagger: {
                each: 0.1,
                from: "random"
            }
        })
    });


    return (
        <section id="services" className="py-24 px-6 relative overflow-hidden">
            {/* Soft decorative blob for visual interest behind the glass */}
            <div
                className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-skyrise-blue/5 blur-[100px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-4xl font-display text-text-main mb-3">
                        Our <span className="font-bold">Services</span>
                    </h2>
                    <div className="h-1 w-12 bg-skyrise-blue"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="glass-card-light group">
                            <span className="glass-number-light">0{i + 1}</span>

                            <h3 className="text-xl font-bold text-text-main mb-3 font-display">
                                {service.name}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed font-body">
                                {service.description}
                            </p>

                            <div
                                className="mt-6 h-1 w-0 bg-skyrise-blue transition-all duration-500 group-hover:w-12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;