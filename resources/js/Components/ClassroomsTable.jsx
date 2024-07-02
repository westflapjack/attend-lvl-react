import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ClassroomsTable = ({classrooms}) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Label</TableCell>
                        <TableCell>Order</TableCell>
                        <TableCell>Created By</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Updated By</TableCell>
                        <TableCell>Updated At</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {classrooms.map((classroom) => (
                        <TableRow key={classroom.id}>
                            <TableCell>{classroom.label}</TableCell>
                            <TableCell>{classroom.order}</TableCell>
                            <TableCell>{classroom.created_by}</TableCell>
                            <TableCell>{classroom.created_at}</TableCell>
                            <TableCell>{classroom.updated_by}</TableCell>
                            <TableCell>{classroom.updated_at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ClassroomsTable;
