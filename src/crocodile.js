import React, { useRef } from 'react';
import croc from './crocodile.jpg';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com

const Crocodile = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j6pwte4', 'template_btjnwev', form.current, 'GrG0DZ3CgVdh_iGbl')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return ( 
        <div className="grid grid-cols-2 divide-x pl-12 h-auto p-8 gap-8">
            <div className="flex items-center justify-center">
                <img src={croc} alt="Crocodile" className="max-w-full h-auto" />
            </div>
            <div className='p-8 bg-white shadow-lg rounded-lg'>
                <h1 className='text-4xl font-serif font-semibold text-[#013220]'>Adopt a Crocodile</h1>
                <p className='pt-5 font-serif text-xl'>
                    Crocodiles are ancient, powerful reptiles with strong jaws and a keen sense of survival. Found in rivers and wetlands, they play a vital role in keeping aquatic ecosystems balanced. Unfortunately, they face threats from habitat destruction and pollution. By symbolically adopting a crocodile, you can help ensure their conservation and safeguard these incredible creatures!
                </p>
                <p className='pt-5 font-serif text-xl'>
                    Through symbolic adoption, you can show your love for wildlife by virtually adopting amazing animals like tigers or hyenas. While the animals stay in their natural homes, your support helps with their care and protection, making a real difference!
                </p>
                <form ref={form} onSubmit={sendEmail} className="mt-8">
                    <input 
                        type="email" 
                        name="to_name" 
                        placeholder="Enter your email" 
                        className="w-full p-2 border border-gray-300 rounded mb-4" 
                        required
                    />
                    <input 
                        type="submit" 
                        value="Send" 
                        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" 
                    />
                </form>
            </div>
        </div>
    );
};

export default Crocodile;
