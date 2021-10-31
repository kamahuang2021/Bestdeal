import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import moment from 'moment'

export const timeFormat = 'MMM D, [at] h:mm:s a [(UTC)]'

export const CarsList = (props) => {
    console.log(props.cars)
    return (
        <>
            {props.cars.map((car, i) => {
                return <Card sx={{minWidth: 275}} key={i}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            {car.name}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {car.price}
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {moment(car.time).utc().format()}
                        </Typography>
                    </CardContent>
                </Card>
            })}
        </>
    );
}