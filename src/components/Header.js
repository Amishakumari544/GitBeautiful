import React from 'react';
const Header = ({ icon, title }) => {
    return (
        <div className="sticky z-10 top-0 flex flex-row justify-center  font-semibold p-4  bg-white m-6 rounded-xl shadow-sm border-t-8">
            <div className="ml-1 mr-auto flex flex-row">
                <img src={icon} alt="logo"
                    className="h-6 w-6 m-1 mr-2"
                />
                <h1 className="text-center text-xl">
                    {title}
                </h1>
            </div>
        </div>
    );
}

export default Header;