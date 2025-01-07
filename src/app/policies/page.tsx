'use client';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import { TypewriterEffectSmoothDemo2} from '@/components/Typewriter2';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function InfoPage() {
    const [showContactForm, setShowContactForm] = useState(false);
    const toggleContactForm = () => setShowContactForm(!showContactForm);

    const location =[
        {
            text: "Location",
            className: "text-white-500 dark:text-yellow-500 text-xl",
        },
    ]

    const business =[
        {
            text: "Business",
            className: "text-white-500 dark:text-yellow-500",
        },
        {
            text:"Hours",
            className: "text-white-500 dark:text-yellow-500",
        }
    ]

    const contact =[
        {
            text: "Contact",
            className: "text-white-500 dark:text-yellow-500",
        },
        {
            text:"Us",
            className: "text-white-500 dark:text-yellow-500",
        }
    ]

    return(
        <div>

            <div>
                <TypewriterEffectSmoothDemo2/>
            </div>


            <TypewriterEffectSmooth words={location} />
            

            


        </div>
        

    );
}

 /*
    <div className="flex flex-col items-left justify-center h-[17.5rem] mx-10">
        <TypewriterEffectSmooth words={business} />
    </div>


    <div className="flex flex-col items-left justify-center h-[17.5rem] mx-10">
        <TypewriterEffectSmooth words={contact} />
    </div>
*/