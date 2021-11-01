import {Box, Button, TextField} from "@mui/material";
import React from "react";
import {useFormik} from "formik";
import * as yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  price: yup
    .number("Enter the price")
    .min(0, "Price should be of minimum $100")
    .required("Price is required"),
  model: yup
    .string("Enter the model")
    .required("Model is required"),
  size: yup
    .number("Enter the size")
    .min(1)
    .required("Size is required"),
  bought_time: yup
    .date("Enter the bought time")
    .required("Bought time is required")
});


export const AddCarForm = (props) => {
  const formik = useFormik({
    initialValues: props.defaultValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.onSubmit(values);
    }
  });

  const handleChange = (event) => {
    formik.handleChange(event);
    const value = event.target.value;
    props.setForm({
      ...props.form,
      [event.target.name]: value
    });
  };
  return (
    <Box sx={style}>
      <h1>
        {props.title}
      </h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="model"
            name="model"
            label="model"
            value={formik.values.model}
            onChange={handleChange}
            error={formik.touched.model && Boolean(formik.errors.model)}
            helperText={formik.touched.model && formik.errors.model}
          />
          <TextField
            fullWidth
            id="bought_time"
            name="bought_time"
            label="bought_time"
            type="date"
            value={formik.values.bought_time}
            onChange={handleChange}
            error={formik.touched.bought_time && Boolean(formik.errors.bought_time)}
            helperText={formik.touched.bought_time && formik.errors.bought_time}
          />
          <TextField
            fullWidth
            id="price"
            name="price"
            label="price"
            value={formik.values.price}
            onChange={handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            fullWidth
            id="size"
            name="size"
            label="size"
            value={formik.values.size}
            onChange={handleChange}
            error={formik.touched.size && Boolean(formik.errors.size)}
            helperText={formik.touched.size && formik.errors.size}
          />
          <TextField
            fullWidth
            id="comment"
            name="comment"
            label="comment"
            value={formik.values.comment}
            onChange={handleChange}
            error={formik.touched.comment && Boolean(formik.errors.comment)}
            helperText={formik.touched.comment && formik.errors.comment}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
        </form>
      </div>
    </Box>
  );
};