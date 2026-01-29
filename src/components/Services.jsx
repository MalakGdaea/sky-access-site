import {services} from "../../constants";
import {useMediaQuery} from "react-responsive";

const Services = () => {
    const isMobile = useMediaQuery({maxWidth: 767});

    return (
        <section
            id="services"
        >
            <div className="container">
                <h1>
                    Services
                </h1>

                {services.map((service, index) => (
                    <div key={index} className="sticky top-1/3">
                        <div
                            key={service.name}
                            className="s-card min-h-62.5 md:w-[23%]"
                            style={{
                                transform: !isMobile
                                    ? `translateX(${index * 110}%)`
                                    : undefined
                            }}
                            >
                            <h3>
                                {service.name}
                            </h3>
                            <p>
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
