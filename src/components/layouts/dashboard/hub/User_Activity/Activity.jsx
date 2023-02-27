import React, { useEffect, useState } from 'react'
import style from './Activity.module.scss'
import { Calendar } from '@mantine/dates';
import { Chip } from '@mantine/core';
const Activity = () => {
    const [field, setField] = useState({})
    const [seletedDate, selectDate] = useState()



    const calenderStyles = {
        calendarHeaderLevel: { color: "white", '&:hover': { background: "#1e1e1e" } },
        monthPickerControl: { color: "gray" },
        yearPickerControl: { color: "gray" }
    }
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    useEffect(() => {
        console.log(field);
    }, [field])
    return (
        <>
            <div className={style.container}>
                <div className={style.board}>
                    <div className={style.title}>
                        Activity
                    </div>
                    <div className={style.body}>
                        <div className={style.calender}>
                            <Calendar styles={() => (calenderStyles)} fullWidth value={seletedDate} onChange={(date) => setField({ ...field, date: date.toLocaleDateString() })} />;
                        </div>
                        <div className={style.reason}>
                            Reason
                            <Chip.Group position="center" onChange={(e) => setField({ ...field, reason: e.toLowerCase() })}>
                                <Chip color="orange" variant='filled' value={"late"}>Late</Chip>
                                <Chip color="red" variant='filled' value={"absence"}>Absence</Chip>
                                <Chip color="indigo" variant='filled' value={"excuse"}>Late with excuses</Chip>
                            </Chip.Group>
                        </div>
                    </div>
                </div>
                <div className={style.board}>
                    {/* <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    /> */}
                </div>
            </div>
        </>

    )
}

export default Activity