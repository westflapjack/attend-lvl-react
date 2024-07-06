import {useState} from 'react';
import NavLink from '@/Components/NavLink';

export default function Authenticated({user, header, children}) {


    return (
        <div className="authenticated-layout">
            <nav className="navbar">
                <div className="nav-menu">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>
                    <NavLink href={route('classrooms')} active={route().current('classrooms')}>
                        Classrooms
                    </NavLink>
                </div>
            </nav>

            <h2>{header}</h2>

            <main>{children}</main>
        </div>
    );
}
