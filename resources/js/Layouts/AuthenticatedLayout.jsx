import {useState} from 'react';
import NavLink from '@/Components/NavLink';
import {Link} from "@inertiajs/react";

export default function Authenticated({user, header, children}) {


    return (

        <div className="authenticated-layout">
            <header>
                <nav className="navbar">
                    <div className="nav-menu">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                        <NavLink href={route('students')} active={route().current('students')}>
                            Students
                        </NavLink>
                        <NavLink href={route('classrooms')} active={route().current('classrooms')}>
                            Classrooms
                        </NavLink>
                    </div>
                    <div className="profile-menu">
                        <Link href="/logout" method="post" as="button">Logout</Link>
                    </div>
                </nav>
            </header>

            <main>
                <h2>{header}</h2>
                {children}
            </main>
        </div>
    );
}
