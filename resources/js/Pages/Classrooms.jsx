import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import ClassroomsTable from "@/Components/ClassroomsTable.jsx";

const Classrooms = ({auth, classrooms}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2>Classrooms</h2>}
        >
            <Head title="Classrooms"/>

            <div className="py-12">
                <div className="content">
                    <ClassroomsTable classrooms={classrooms}/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Classrooms;
