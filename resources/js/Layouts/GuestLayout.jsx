import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';

export default function GuestLayout({children}) {
    return (
        <div className="guest-layout">
            <div>
                <Link href="/">
                    {/*<ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>*/}
                </Link>
            </div>

            <div className="">
                {children}
            </div>
        </div>
    );
}
