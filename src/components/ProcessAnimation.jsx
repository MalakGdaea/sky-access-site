import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps} from "../../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const ProcessAnimation = () => {
    const refs = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#process",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        steps.forEach((item, i) => {
            const el = refs.current[i];

            if (item.type === "icon") {
                tl.from(el, { opacity: 0, y: 50 });
            } else {
                tl.to(el, { clipPath: "inset(0 0% 0 0)" });
            }
        });
    });

    return (
        <div id="process-steps" className="relative">
            {steps.map((item, i) => (
                <img
                    key={i}
                    ref={el => refs.current[i] = el}
                    className={`${item.type} ${item.direction || ""}`}
                    src={item.src}
                    alt={item.alt}
                />
            ))}
        </div>
    );
};

export default ProcessAnimation;