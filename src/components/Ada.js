import React from 'react'
import email from "../images/icons/mail.svg"

function Ada() {
    return (
        <div className="my-8 md:w-3/4 xl:w-1/2">
            <h5 className="text-center">ADA Statement</h5>
            <p>Nati Natash is concerned about our website being accessible to all users. We strive for our website to meet the WCAG guidelines at Level AA. Please contact us immediately using the email directly below if you are experiencing any issues with using our website.</p>
            <div>
                <a className="flex justify-center items-center text-white text-lg font-bold pt-2 md:text-xl" href="mailto: accessibility@natinatash.com"><img className="mr-2" src={email} alt="email icon" />Accessibility Concerns</a>
            </div>
        </div>
    )
}

export default Ada