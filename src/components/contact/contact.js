import React from "react";
import { Button } from "react-bootstrap";
import {FaLinkedin, FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    return(
        <div id="contact">
            <a  href="https://www.linkedin.com/in/sitaram-koundinya"><FaLinkedin className="icon"/> </a>
            <a href="mailto:sitaram.28900@gmail.com"><FaEnvelope className="icon"/></a>
            <a href="https://www.instagram.com/sinistral_lens/"><FaInstagram className="icon"/></a>
            <a href="tel:+917330643775"><FaPhone className="icon"/></a>
        </div>
    )
}

export default Contact;

