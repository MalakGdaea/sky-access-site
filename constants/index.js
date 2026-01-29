const NavLinks = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "process",
        title: "Process",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contacts",
        title: "Contacts",
    }
];

const services = [
    {
        name: "Commercial Window Cleaning",
        description: "High-rise window cleaning for office buildings, skyscrapers, and retail centers—delivering spotless glass that enhances your business’s image.",
        image: "/images/srv-1.jpg"
    },
    {
      name: "Residential Window Cleaning",
      description: "Expert cleaning for high-rise apartments and condominiums, including balconies and sliding doors, for brighter views and cleaner living spaces.",
      image: "/images/srv-2.jpg"
    },
    {
        name: "Specialty Glass Services",
        description: "Specialized solutions for complex glass surfaces such as facades, curtain walls, skylights, and post-construction cleanups.",
        image: "/images/srv-3.jpg"
    },
    {
        name: "Maintenance Programs",
        description: "Flexible weekly, monthly, or quarterly plans tailored to your building’s specific needs for year-round glass clarity.",
        image: "/images/srv-4.jpg"
    },
];

const process = [
    {
        name: "Inspect",
        description: "Assess building and access requirements",
    },
    {
        name: "Plan",
        description: "Create a customized cleaning strategy"
    },
    {
        name: "Secure",
        description: "Prepare certified safety systems"
    },
    {
        name: "Clean",
        description: "Execute high-rise window cleaning",
    },
    {
        name: "Maintain",
        description: "Inspect results and plan future care"
    }
]

const steps = [
    { type: "icon", src: "/images/inspect.svg", alt: "Inspect" },
    { type: "arrow",direction: "up", src: "/images/up-arrow.svg" , alt: "Up arrow" },
    { type: "icon", src: "/images/plan.svg", alt: "Plan" },
    { type: "arrow",  direction: "down", src: "/images/down-arrow.svg" , alt: "Down-arrow" },
    { type: "icon", src: "/images/secure.svg", alt: "Secure" },
    { type: "arrow", direction: "up", src: "/images/up-arrow.svg" , alt: "Up-arrow" },
    { type: "icon", src: "/images/clean.svg" , alt: "Clean" },
    { type: "arrow", direction: "down", src: "/images/down-arrow.svg" , alt: "Down-arrow" },
    { type: "icon", src: "/images/maintain.svg" , alt: "Maintain" },
];

export { NavLinks , services, process, steps };