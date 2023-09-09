import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link, router } from "@inertiajs/react";
import { usePage, useForm } from "@inertiajs/react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import UserSearch from "../../components/UserSearch";

const Index = ({ users, count}) => {
    const { flash } = usePage().props;
    let queryParams = new URLSearchParams(window.location.search);
    // const { name, email, start_date, end_date } = Object.fromEntries(
    //     queryParams.entries()
    // );
    const { data, setData, get } = useForm({
        name: "",
        email: "",
        start_date: "",
        end_date: "",
        page : 1,
        perPage : 5,
    });

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete")) {
            router.delete(`/user/${id}`);
        }
    };

    const handleChange = (event, value) => {
      setData('page', value)
      router.get('/user', {page : value}, {perserveState : true})
    }

    function submit(e) {
        e.preventDefault();
        get("/user", data, { perserveState: true });
    }

    return (
        <div className="container my-3">
            <div className="p-2 rounded">
                {flash.message && (
                    <div class="alert alert-success">{flash.message}</div>
                )}
                <div className="d-flex justify-content-between align-items-center">
                    <h3> All Users </h3>
                    <div>
                        <Link
                            href="/user/create"
                            className="btn btn-sm btn-secondary"
                        >
                            {" "}
                            Create{" "}
                        </Link>
                    </div>
                </div>
                {/* User Search  */}
                <form onSubmit={submit}>
                    <UserSearch data={data} setData={setData} />
                </form>
                {/* User Search Ends */}
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr className="text-center">
                                <th> Id </th>
                                <th> Name </th>
                                <th> Date </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="text-center">
                                    <td> {index + 1} </td>
                                    <td> {user.name} </td>
                                    <td> {user.created_at} </td>
                                    <td>
                                        <Link
                                            href={`/user/${user.id}`}
                                            className="btn btn-warning text-dark me-3"
                                        >
                                            {" "}
                                            View{" "}
                                        </Link>
                                        <Link
                                            href={`/user/edit/${user.id}`}
                                            className="btn btn-success text-white me-3"
                                        >
                                            {" "}
                                            Edit{" "}
                                        </Link>
                                        <button
                                            className="btn btn-danger text-white me-3"
                                            onClick={() =>
                                                handleDelete(user.id)
                                            }
                                        >
                                            {" "}
                                            Delete{" "}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <Typography>Page: {data.page}</Typography>
                        <Pagination
                            count={Math.ceil(count/data.perPage)}
                            page={data.page}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout children={page} title="Welcome" />;

export default Index;
