import React, { useEffect, useMemo, useState } from "react";
import style from "./Activity.module.scss";

import DatePick from "../../../../commons/DataGrid/DatePicker";
import Select from "../../../../commons/Select/Select";
import Table from "../../../../commons/Table/Table";
import { Button, Pagination, Skeleton } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  attendance as attendanceAction,
} from "../../../../../redux/async/userAsync";

const Activity = () => {

  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState(null);

  const onSelect = (id, value) => {
    const filteredAttend = attendance.filter((el) => {
      return el.id !== id;
    });
    setAttendance([
      ...filteredAttend,
      { id, attendance: { date, reason: value } },
    ]);
  };
  const [batch, setBatch] = useState(1);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUsers({ page: 0, limit: 5, batch }));
  }, [batch]);

  const onSubmit = () => {
    dispatch(attendanceAction(attendance));
  };

  const onDate = (date) => {
    if (date) setDate(date.toLocaleDateString());
    else setDate(date)

  };

  const users = useSelector((state) => state.usersReducer.users);
  const totalUsers = useSelector((state) => state.usersReducer.total);
  const status = {
    user: useSelector((state) => state.usersReducer.status.user),
    attendance: useSelector((state) => state.usersReducer.status.attendance)
  }
  console.log(users);

  const columns = ["name", "batch", "course", "status"];
  let rows = useMemo(() => {
    return users.map((el) => ({
      ...el,
      status: ["present", "absent", "excused absent"],
    }));
  }, [users]);

  return (
    <>
      <div className={style.container}>
        <div className={style.board}>
          <div className={style.title}>Activity</div>
          <div className={style.body}>
            <div className={style.date}>
              <DatePick onChange={onDate} value={date} />
            </div>
            <div className={style.batch}>
              <Select
                label={"Choose a batch"}
                placeholder={"choose"}
                theme={"dark"}
                data={["1", "2", "3", "4", "5", "6"]}
                onChange={(value) => setBatch(value)}
              />
            </div>
          </div>
        </div>
        <div className={style.user_data}>
          {users ? (
            <Table
              elements={rows}
              titles={columns}
              theme={"dark"}
              select={true}
              onSelect={onSelect}
            />
          ) : (
            <>
              <Skeleton height={8} mt={6} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
            </>
          )}
          <Button loading={status.attendance==="pending"} onClick={onSubmit}>Update</Button>

          <Pagination
            total={totalUsers}
            onChange={(i) =>
              dispatch(getUsers({ page: i - 1, limit: 5, batch }))
            }
            position="center"
            styles={(theme) => ({
              item: {
                "&[data-active]": {
                  backgroundImage: theme.fn.gradient({
                    from: "red",
                    to: "yellow",
                  }),
                },
              },
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Activity;
