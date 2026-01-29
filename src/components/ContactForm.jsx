import React from 'react';

const ContactForm = () => {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <h1>1.Contact Information</h1>
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <input id="fullName" type="text" placeholder="Full Name" />
            <label htmlFor="propertyName" className="sr-only">Company/Property Name</label>
            <input id="propertyName" type="text" placeholder="Company/Property Name"/>
            <label htmlFor="workEmail" className="sr-only">Work Email</label>
            <input id="workEmail" type="text" placeholder="Work Email"/>
        </form>
    );
};

export default ContactForm;