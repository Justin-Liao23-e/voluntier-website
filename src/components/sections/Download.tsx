import React from 'react';
import { FaApple } from 'react-icons/fa';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const DownloadSection = () => (
  <section id="download" className="download py-12 md:py-20 bg-secondary/30 flex items-center justify-center text-center">
    <div className="container mx-auto px-6 max-w-lg flex flex-col items-center">
      <h2 className="font-lexend text-3xl md:text-4xl font-bold mb-4">
        Download <span className="text-accent">VolunTier</span>
      </h2>
      <p className="text-lg mb-6">
        start to use volunteer on iOS App store, android will be released later
      </p>
      <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition">
          <FaApple className="h-5 w-5" />
          Get the App
        </button>
      </a>
    </div>
  </section>
);

export default DownloadSection;