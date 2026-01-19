"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white py-16 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center group mb-4">
              <div className="relative w-16 h-16 transition-transform group-hover:scale-105">
                <Image
                  src="/dudes-logo-new.png"
                  alt="DUDES Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Whatever it is, we do it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#hero" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#services" className="hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link href="#testimonials" className="hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link href="#founders" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#services" className="hover:text-primary transition-colors">
                Advertising
              </Link>
              <Link href="#services" className="hover:text-primary transition-colors">
                Branding
              </Link>
              <Link href="#services" className="hover:text-primary transition-colors">
                Development
              </Link>
              <Link href="#services" className="hover:text-primary transition-colors">
                Media Buying
              </Link>
              <Link href="#services" className="hover:text-primary transition-colors">
                Digital
              </Link>
              <Link href="#services" className="hover:text-primary transition-colors">
                PR
              </Link>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="tel:+201090212111"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +201090212111
              </a>
              <a
                href="mailto:Fadi.Tharwat@dudes.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Fadi.Tharwat@dudes.com
              </a>
              
              {/* Socials */}
              <div className="flex gap-4 mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>©{currentYear} DUDES Advertising. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
