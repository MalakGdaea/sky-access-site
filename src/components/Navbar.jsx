import {NavLinks} from "../../constants/index.js";
import { useGSAP} from "@gsap/react";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useGSAP(() => {
        const nav = document.querySelector("nav");

        ScrollTrigger.create({
            start: 0,
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === 1) {
                    // scrolling DOWN → hide
                    gsap.to(nav, {
                        yPercent: -100,
                        duration: 0.7,
                        ease: "power2.out",
                    });
                } else {
                    // scrolling UP → show
                    gsap.to(nav, {
                        yPercent: 0,
                        duration: 0.7,
                        ease: "power2.out",
                    });
                }
            },
        });
    });

    return (
        <nav>
            <div>
                <a href='#hero' className="flex items-center gap-2">
                    <h2 className="text-md font-bold tracking-tighter text-sky-400">
                        SKYLINE<span className="text-background">ACCESS</span>
                    </h2>
                </a>
                <ul>
                    {NavLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <a href="#quote" className="btn">
                    Request a Quote
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
