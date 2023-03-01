import React, { useEffect, useMemo, useState } from 'react'
import style from './Activity.module.scss'






import DatePick from '../../../../commons/DataGrid/DatePicker';
import Select from '../../../../commons/Select/Select';
import Table from '../../../../commons/Table/Table';
import { Pagination, Skeleton } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../../../redux/async/userAsync';


const Activity = () => {
    // const [field, setField] = useState({})
    // const [seletedDate, selectDate] = useState(Date.now())

    // const [users]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers({ page: 0, limit: 4 }))
    }, [])

    const users = useSelector((state) => state.usersReducer.users)
    console.log(users);


    const columns = [
        "name",
        "batch",
        "course",
        "status"

    ];
    let rows = useMemo(() => {
        return users.map((el) => ({ ...el, status: ['present', 'absence', 'excused absence'] }))
    }, [users])









    return (
        <>
            <div className={style.container}>
                <div className={style.board}>
                    <div className={style.title}>
                        Activity
                    </div>
                    <div className={style.body}>
                        <div className={style.date}>
                            <DatePick />
                        </div>
                        <div className={style.batch}>
                            <Select label={"Choose a batch"} placeholder={"choose"} theme={"dark"} data={["HEllo"]} />
                        </div>

                    </div>
                </div>
                <div className={style.user_data}>
                    {users ? <Table elements={rows} titles={columns} theme={"dark"} select={true} /> :
                        <>
                            <Skeleton height={8} mt={6} radius="xl" />
                            <Skeleton height={8} mt={6} radius="xl" />
                            <Skeleton height={8} mt={6} radius="xl" />
                        </>}

                    <Pagination
                        total={10}
                        onChange={(i) => dispatch(getUsers({ page: i, limit: 5 }))}
                        position="center"
                        styles={(theme) => ({
                            item: {
                                '&[data-active]': {
                                    backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
                                },
                            },
                        })}
                    />
                </div>
            </div>
        </>

    )
}

export default Activity