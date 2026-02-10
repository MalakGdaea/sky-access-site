import {services} from "../../constants";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Services = () => {
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#services",
                start: 'top 10%',
                end: 'bottom 110%',
                scrub: true,
                easing: "easeInOut",
            }
        }).fromTo('.line', {
            width: 0
        }, {width: 55})
    });

    return (
        <section
            id="services"
        >
            <div className="container">
                <header>
                    <h2>SERVICES</h2>
                    <span className="h-1 rounded-full bg-deep-sky line"></span>
                </header>
                {services.map((service, index) => (
                    <div key={index} className="sticky top-[27%] pointer-events-none">
                        <div
                            key={service.name}
                            className="s-card pointer-events-auto"
                            style={{
                                transform: !isMobile
                                    ? `translateX(${index * 108}%)`
                                    : undefined
                            }}
                        >
                        <img src={service.image} alt={service.name} />
                            <div className="p-5 min-h-55 2xl:min-h-45">
                                <h3>
                                    {service.name}
                                </h3>
                                <p>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
