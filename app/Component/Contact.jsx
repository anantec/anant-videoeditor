import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { PiStarFourFill } from 'react-icons/pi'

export const Contact = () => {

    // api that send forms data directly to your email
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8136030c-59a3-450d-83d4-5271165dc338");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sentSuccessfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <section className='mt-12 pb-8' id='contact'>
            {/* heading */}
            <div className='text-center'>
                <p className='text-content font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill
                        className='text-lg'
                    />
                    Contact
                </p>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Let's create something<br /> creative together!
                </h2>
            </div>

            {/* contact form */}
            <form onSubmit={onSubmit} className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold'>
                {/* left side */}
                <div className='flex flex-col space-y-6 '>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder='Your Name*'
                        required
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3 '
                    />
                    <input type="email"
                        name="Email"
                        id=""
                        placeholder='Email Address*'
                        required
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3 '

                    />
                </div>

                {/* right side */}
                <div className='flex flex-col space-y-6 '>
                    <input
                        type="text"
                        name="Company"
                        id=""
                        placeholder='Company/Your Name*'
                        required
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3 '
                    />
                    <input
                        type="tel"
                        name="Phone No." 
                        id=""
                        placeholder='Phone Number*'
                        required
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3 '
                    />
                </div>

                {/* textarea */}
                <div className='md:col-span-2'>
                    <textarea
                        name="message" 
                        id=""
                        placeholder='A Few Words*'
                        required
                        className='w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-2 h-24 resize-none'
                    ></textarea>
                </div>

                {/* button */}
                <div className='md:col-span-2'>

                    <button type='submit' className='mt-6 custom-gradient text-white text-[1rem] font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer'>
                        Send Message <FaPaperPlane className='' />
                    </button>
                </div>
            </form>
            <span className='max-w-4xl mx-auto'>{result}</span>

        </section>
    )
}
