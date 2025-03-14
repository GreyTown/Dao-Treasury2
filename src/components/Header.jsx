import React from 'react';


export function Header() {
    return (
      <nav className="w-full flex space-x-2 p-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white sm:space-x-2 shadow-lg">
        <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-8"> 
                
                {/* Logo */}
            <div className="logo">
            <h1 className="text-2xl font-extrabold tracking-tight">Decentra-DAO</h1>
            <h4 className="font-bold">TreasuryApp</h4>
            <p className="text-sm mt-1 opacity-80">Baked by Abwooli, Vibin’ with Amooti</p>
            </div>

                {/* Desktop Menu */}
            <div className="hidden md:flex gap-2 space-x-4">
              <a href="#" className="hover:text-amber-500">Home</a>
              <a href="#" className="hover:text-amber-500">About Us</a>
              <a href="#" className="hover:text-amber-500">Contact</a>
              <a href="#" className="hover:text-amber-500">Members</a>
            </div>

                {/* Auth btn */} 
            <div className='display hover:cursor-pointer flex gap-2'>
              <h2>Login</h2>
              <button className="bg-amber-700 hover:cursor-pointer ">Connect <br/> Wallet</button>
            </div>
                
                {/* Mobile Menu */}
                <div className="md:hidden">Mobile menu</div>
          </div>
        </div>
      </nav>
    );
};