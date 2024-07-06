import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import ClassroomsTable from "@/Components/ClassroomsTable.jsx";

const Classrooms = ({auth, students}) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header='Students'
        >
            <Head title="Students"/>

            <div className="py-12">
                <div className="content">
                    <ul>
                        {students.map((student) => {
                            return (
                                <li>{student.family_name}, {student.given_name}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Classrooms;
