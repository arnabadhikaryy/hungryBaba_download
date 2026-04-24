import { useState } from 'react'
import heroImg from './assets/appicon.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navigation / Header */}
      <header className="w-full p-4 bg-white shadow-sm flex justify-center md:justify-start">
        <div className="flex items-center gap-2">
          {/* Placeholder for your logo */}
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            H
          </div>
          <span className="text-xl font-bold text-gray-800">HungryBaba</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column - Image/Hero */}
          <div className="w-full md:w-1/2 bg-orange-50 p-8 flex items-center justify-center">
            {/* If hero.png fails to load, this acts as a nice fallback background */}
            <img 
              src={heroImg} 
              alt="Hungry Baba App Preview" 
              className="max-w-full h-auto object-contain drop-shadow-2xl rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="text-center text-orange-400 font-bold text-2xl">Delicious Food, Delivered Fast</div>';
              }}
            />
          </div>

          {/* Right Column - Download Info */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <div className="mb-2">
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Google Play Protected
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Download HungryBaba
            </h1>
            <p className="text-sm text-gray-500 mb-6 font-medium">
              Verified & Published by SaralTech
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get the latest version of our food delivery app directly to your device. Enjoy fast delivery, exclusive offers, and a seamless ordering experience.
            </p>

            {/* Download Button */}
            <a 
              href="/HungryBaba.apk" 
              download="HungryBaba.apk" 
              className="w-full flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-orange-500/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK (100% Safe) 60MB
            </a>

            {/* Installation Instructions */}
            <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                How to install:
              </h3>
              <ol className="text-xs text-blue-800 list-decimal list-inside space-y-1">
                <li>Tap the download button above.</li>
                <li>Open the downloaded <strong>HungryBaba.apk</strong> file.</li>
                <li>If prompted, tap <strong>Settings</strong> and enable <strong>"Allow from this source"</strong>.</li>
                <li>Tap <strong>Install</strong> and enjoy your food!</li>
              </ol>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} SaralTech. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  )
}

export default App