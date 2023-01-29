import React from 'react';
import { Outlet } from 'react-router-dom';

function Main()
{
    return (
        <main className="mainContainer">
            <Outlet></Outlet>
        </main>
    );
};

export default Main;