import {Box, Button, TextField} from '@mui/material'
import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import {DatePicker} from "@material-ui/pickers";
import {useForm} from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const validationSchema = yup.object({
    price: yup
        .number('Enter the price')
        .min(100, 'Price should be of minimum $100')
        .required('Price is required'),
    model: yup
        .string('Enter the model')
        .required('Model is required'),
    size: yup
        .number('Enter the size')
        .min(1)
        .required('Size is required'),
    // bought_time: yup
    //     .date('Enter the bought time')
    //     .required('Bought time is required')
});


export const AddCarForm = (props) => {
    const formik = useFormik({
        initialValues: props.defaultValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.onSubmit(values)
        }
    })

    const {register, handleSubmit} = useForm({
        defaultValues: props.defaultValues
    })

    return (
        <Box sx={style}>
            <h1>
                Add your car information to sell
            </h1>
            <div>
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <TextField
                        fullWidth
                        id="model"
                        name="model"
                        label="model"
                        ref={register}
                    />
                    <TextField
                        fullWidth
                        id="price"
                        name="price"
                        label="price"
                        ref={register}
                    />
                    <TextField
                        fullWidth
                        id="size"
                        name="size"
                        label="size"
                        ref={register}
                    />
                    <TextField
                        fullWidth
                        id="comment"
                        name="comment"
                        label="comment"
                        ref={register}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
                </form>
            </div>
        </Box>
    )
}