'use client'
import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative w-full text-white bg-gradient-to-br from-slate-950 to-slate-900">
            <div className="container px-4 py-12 mx-auto">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h3 className="mb-4 text-xl font-semibold">Argentina</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>T: +54 (0351) 6512556</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1 text-primary" />
                                <div className="space-y-1">
                                    <p>Distrito Capitalinas - Humberto Primo Nro. 680</p>
                                    <p>Cuarto piso, Oficina S 42, Bloque Suquía</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <Link
                                    href="mailto:Info@mindfactory.ar"
                                    className="transition-colors hover:text-primary"
                                >
                                    Info@mindfactory.ar
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center">
                        <Link href="/" className="flex items-center gap-2 p-2 rounded-md dark:bg-transparent bg-primary">
                            <Image
                                src="https://mindfactory.ar/_next/static/media/full-logo.9b60c786.svg"
                                alt="Mindfactory Logo"
                                width={150}
                                height={150}
                            />
                        </Link>
                    </div>

                    {/* Certification */}
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="https://mindfactory.ar/_next/static/media/certified.cad0eb02.svg"
                            alt="TUV Rheinland ISO 9001:2015 Certification"
                            width={120}
                            height={120}
                            className="transition-opacity opacity-90 hover:opacity-100"
                        />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-12 border-t border-slate-800 sm:flex-row">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} Mindfactory. All rights reserved.
                    </p>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-800"
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </footer>
    )
}

