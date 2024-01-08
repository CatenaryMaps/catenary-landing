'use client'

import { footerContent } from '@/data/footer-content'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
    const [top, setTop] = useState<boolean>(true)

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
                !top ? 'bg-background backdrop-blur-sm shadow-lg' : ''
            }`}
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        <a href="https://catenarymaps.org">
                            <span style={{ fontSize: '1.3em' }}>
                                <img
                                    src={footerContent.logo.srcLightMode}
                                    className="logoLight"
                                    alt={footerContent.logo.alt}
                                    width={50}
                                    height={30}
                                    style={{ display: 'inline-block', marginRight: '16px' }}
                                />
                                <img
                                    src={footerContent.logo.srcDarkMode}
                                    className="logoDark"
                                    alt={footerContent.logo.alt}
                                    width={50}
                                    height={30}
                                    style={{ display: 'none', marginRight: '16px' }}
                                />
                                Catenary
                            </span>
                        </a>
                    </div>
                    {/* Desktop navigation */}
                    <nav className="flex grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li className="md:order-2">
                                <Link
                                    href="https://maps.catenarymaps.org"
                                    className="btn-sm text-foreground bg-secondary hover:bg-tertiary ml-4"
                                >
                                    <span>Launch Maps</span>
                                    <svg
                                        className="w-3 h-3 fill-current text-muted-foreground shrink-0 ml-2 -mr-1"
                                        viewBox="0 0 12 12"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                                            fillRule="nonzero"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li className="hidden md:flex mb-4 md:ml-4 md:mb-0">
                                {footerContent.socialLinks.map((socialLink, index) => (
                                    <span className={index !== 0 ? 'ml-4' : ''} key={index}>
                                        <Link
                                            href={socialLink.href}
                                            className="p-2 flex justify-center items-center text-primary bg-secondary hover:text-foreground hover:bg-primary rounded-full transition duration-150 ease-in-out"
                                            aria-label={socialLink.alt}
                                        >
                                            {socialLink.icon}
                                        </Link>
                                    </span>
                                ))}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
