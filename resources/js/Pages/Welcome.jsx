import {Link, Head} from '@inertiajs/react';
import GuestLayout from "@/Layouts/GuestLayout.jsx";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <GuestLayout>
            <Head title="Attend | Welcome"/>
            <h1>Welcome</h1>
            <Link href="/login">Login</Link>
        </GuestLayout>
    );
}
