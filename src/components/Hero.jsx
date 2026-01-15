import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText(".title", {type: 'words'});

        gsap.from(heroSplit.words, {
            yPercent: 200,
            opacity: 0,
            ease: "power1.inOut",
            stagger: 0.09,
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero img',
                start: 'top -25%',
                end: 'bottom top',
                scrub: true,
            }
        }).to(
            "#hero img",
            {scale: 2.6, ease: "power1.inOut", opacity: 0},
        ).from("#hero p", {
            opacity: 0,
            scale: 0.8,
            ease: "power1.out",
        }, 0);

    });

    return (
        <section id="hero">
            <div className="relative min-h-screen w-full">
                <img
                    src="/images/hero.jpg"
                    alt="Clean reflection of the city skyline on a modern glass office building"/>
                <div className="abs-left">
                    <h1 className="title">High-Rise Window Cleaning.<br/>Done Safely.</h1>
                </div>
                <div className="flex items-center justify-center h-full">
                    <p>Certified rope-access technicians providing
                        safe, reliable
                        exterior
                        cleaning for high-rise and hard-to-reach buildings.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;