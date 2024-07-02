import React from 'react';
import '../ContactPage.css'; // Import your CSS file for styling

const ContactPage = () => {
    return ( 
        <div className="contact-container">
            <h1 className="contact-title">Add Contact Info</h1>
            <div className="contact-info">
                <p><strong>Email:</strong> example@email.com</p>
                <p><strong>Phone:</strong> +1234567890</p>
                <p><strong>Address:</strong> 123 Main St, Cityville</p>
            </div>
        </div>
     );
}
 
export default ContactPage;
