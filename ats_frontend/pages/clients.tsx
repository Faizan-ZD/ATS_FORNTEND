"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Navbar from "./Auth/Navbar";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import { useForm, Controller } from "react-hook-form";

export default function clients() {

    const [open, setOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const { control, reset, handleSubmit } = useForm();


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        reset();
        setOpen(false);
    };

    const onSubmit = (data: any) => {
        console.log(data);
        axios
            .post("http://192.168.0.109:8081/api/users", data)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            });
    }

    useEffect(() => {
        axios
            .get("http://192.168.29.81:8081/api/users")
            .then((res) => {
                setTableData(res.data);
                console.log(res);
            })
            .catch((error) => {
                console.error("Axios Error:", error);
            });
    }, []);

    console.log(tableData, "tableData");
    useEffect(() => {
        console.log("state", selectedRows);
    }, [selectedRows]);

    const handleButtonClick = () => {
        console.log("clicked");
    };

    const handleChange = useCallback((state: any) => {
        setSelectedRows(state.selectedRows);
    }, []);

    const columns = useMemo(
        () => [
            {
                cell: () => <button onClick={handleButtonClick}>Action</button>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
            },
            {
                name: "client_size",
                selector: (row: any) => row.client_size,
                sortable: true,
                grow: 2,
            },
            {
                name: "industry",
                selector: (row: any) => row.industry,
                sortable: true,
            },
            {
                name: "city",
                selector: (row: any) => row.city,
                sortable: true,
                right: true,
            },
            {
                name: "state",
                selector: (row: any) => row.state,
                sortable: true,
                right: true,
            },
        ],
        []
    );

    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="bg-blue-500 text-white p-4" style={{ marginTop: '6%' }}>
                    <Navbar />
                </div>
                <div className="p-4">
                    <Button
                        className="bg-blue-500 text-black"
                        variant="outlined"
                        onClick={handleClickOpen}
                    >
                        <AddIcon />
                    </Button>

                </div>
                {/* <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                    <p className="text-3xl text-gray-700 font-bold mb-5">
                        Welcome!
                    </p>
                    <p className="text-gray-500 text-lg">
                        React and Tailwind CSS in action
                    </p>
                </div> */}
                <div className="flex-grow">
                    <DataTable
                        title="Clients"
                        data={tableData}
                        columns={columns}
                        selectableRows
                        pagination
                        highlightOnHover
                        paginationPerPage={15}
                    />
                </div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Add Client</DialogTitle>
                    <DialogContent>
                        <form>
                            <Controller
                                name="firstName"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <TextField
                                        required
                                        {...field}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}

                                        margin="dense"
                                        id="email"
                                        label="Email Address"
                                        type="email"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        required
                                        {...field}
                                        margin="dense"
                                        id="phone"
                                        label="Phone Number"
                                        type="tel"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        id="address"
                                        label="Address"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="dense"
                                        id="city"
                                        label="City"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                            <Controller
                                name="state"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="dense"
                                        id="state"
                                        label="State"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />

                            <Controller
                                name="zip"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin="dense"
                                        id="zip"
                                        label="ZIP Code"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit(onSubmit)}>Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
