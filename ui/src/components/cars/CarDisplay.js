import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import moment from "moment";
import * as React from "react";
import {useLocation} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const CarDisplay = () => {
    const query = useQuery();
    const model = query.get('model')
    const price = query.get('price')
    const size = query.get('size')
    const owner = query.get('owner')
    const comment = query.get('comment')
    const bought_time = query.get('bought_time')
    const created_time = query.get('created_time')
    return (
        <>
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    <CardContent>
                        <Typography variant="h5" color="text.secondary" gutterBottom>
                            Model: {model}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Owner: {owner}
                        </Typography>
                        <Typography variant="h6" component="div">
                            Price: {price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Size: {size}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Bought Time: {moment(bought_time).utc().format()}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Created Time: {moment(created_time).utc().format()}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Comment: {comment}
                        </Typography>
                    </CardContent>
                </CardContent>
            </Card>
        </>
    );
}