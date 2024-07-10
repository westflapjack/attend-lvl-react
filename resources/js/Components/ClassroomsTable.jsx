import {useState} from "react";

const ClassroomsTable = ({classrooms}) => {
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClicked              = (i) => {
        setSelectedRow(i);
    }
    return (
        <table className="classroomsTable">
            <thead>
                <tr>
                    <th>Label</th>
                    <th>Order</th>
                    <th>Created By</th>
                    <th>Created At</th>
                    <th>Updated By</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            <tbody>
            {classrooms.map((classroom, i) => (
                <tr
                    key={classroom.id}
                    className={selectedRow === i ? 'selected' : ''}
                    onClick={() => handleRowClicked(i)}>
                    <td>{classroom.label}</td>
                    <td>{classroom.order}</td>
                    <td>{classroom.created_by}</td>
                    <td>{classroom.created_at}</td>
                    <td>{classroom.updated_by}</td>
                    <td>{classroom.updated_at}</td>
                </tr>
            ))}
            </tbody>
            <tfoot/>
        </table>
    );
};

export default ClassroomsTable;
