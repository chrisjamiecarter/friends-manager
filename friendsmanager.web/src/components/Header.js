import React from 'react';

const Header = () => {
    return (
        <header className="bg-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                <a href="#" className="flex -m-1.5 p-1.5">
                    <img className="h-8 w-auto" src="TODO" alt="LOGO" />
                    <span className="text-lg font-bold leading-6 text-slate-100">Friends Manager</span>
                </a>
                </div>
                <div className="lg:flex lg:gap-x-12">
                <a href="#" className="text-sm font-semibold leading-6 text-slate-100">Contacts</a>
                <a href="#" className="text-sm font-semibold leading-6 text-slate-100">Friends</a>
                <a href="#" className="text-sm font-semibold leading-6 text-slate-100">Activities</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
