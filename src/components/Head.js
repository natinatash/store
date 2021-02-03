import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
        >
            {/* Primary Meta Tags */}
            <title>Nati Natash</title>
            <meta name="title" content="Nati Natash, CA" />
            <meta
                name="description"
                content="The finest hats and purses"
            />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://natinatash.com" />
            <meta property="og:title" content="Nati Natash, CA" />
            <meta
                property="og:description"
                content="The finest hats and purses"
            />
            {/* STILL NEED TO UPDATE IMAGE BELOW */}
            <meta property="og:image" content="https://natinatash.com/logo-sm.png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://natinatash.com" />
            <meta property="twitter:title" content="Nati Natash, CA" />
            <meta
                property="twitter:description"
                content="The finest hats and purses"
            />
            {/* STILL NEED TO UPDATE IMAGE BELOW */}

            <meta property="twitter:image" content="https://natinatash.com/logo-sm.png" />
        </Helmet>
    )
}

export default Head