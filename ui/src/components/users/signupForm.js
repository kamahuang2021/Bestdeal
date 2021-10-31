import {Box, Button, TextField} from '@mui/material'
import * as yup from "yup";
import {useFormik} from "formik";

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
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
    confirm_password: yup.string('')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    full_name: yup
        .string('Enter your full name')
        .required('Full name is required')
});

export const SignUpForm = (props) => {
    const formik = useFormik({
        initialValues: props.defaultValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("on submit")
            props.onSubmit(values)
        }
    })
    return (
        <Box sx={style}>
            <h1>
                Sign Up
            </h1>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        fullWidth
                        id="confirm_password"
                        name="confirm_password"
                        label="confirm_password"
                        type="password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                        helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                    />
                    <TextField
                        fullWidth
                        id="full_name"
                        name="full_name"
                        label="full_name"
                        value={formik.values.full_name}
                        onChange={formik.handleChange}
                        error={formik.touched.full_name && Boolean(formik.errors.full_name)}
                        helperText={formik.touched.full_name && formik.errors.full_name}
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
                </form>
            </div>
        </Box>
    )
}