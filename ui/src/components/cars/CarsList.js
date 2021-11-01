import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import moment from "moment";
import {CardActions} from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import {useContext} from "react";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/auth";
import {useHttp} from "../../hooks/http";

export const timeFormat = "MMM D, [at] h:mm:s a [(UTC)]";

export const CarsList = (props) => {
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const history = useHistory();
  const [liked, setLiked] = React.useState(false);

  console.log(props.cars);
  const handleLikeClick = (e) => {
    console.log(e.target);
    setLiked(!liked);
  };

  const handleDetailClick = async (event) => {
    const id = event.target.id.split("-")[1];
    const car_id = props.cars[id]._id;
    const response = await request("http://localhost:5000/cars/" + car_id, "GET", null, {
      Authorization: `Bearer ${auth.token}`
    });

    history.push(
      `/cars/get?model=${response.model}&owner=${response.owner.full_name}&comment=${response.comment}&size=${response.size}&price=${response.price}&bought_time=${response.bought_time}&created_time=${response.created_time}`
    );
  };

  const handleRemoveClick = async (event) => {
    const id = event.target.id.split("-")[1];
    const car_id = props.cars[id]._id;
    await request("http://localhost:5000/cars/" + car_id, "DELETE", null, {
      Authorization: `Bearer ${auth.token}`
    });
  };

  const handleEditClick = async (event) => {
    const id = event.target.id.split("-")[1];
    const car_id = props.cars[id]._id;
    const response = await request("http://localhost:5000/cars/" + car_id, "GET", null, {
      Authorization: `Bearer ${auth.token}`
    });

    history.push(
      `/cars/edit?model=${response.model}&comment=${response.comment}&size=${response.size}&price=${response.price}&bought_time=${response.bought_time}`
    );
  };

  return (
    <>
      {props.cars.map((car, i) => (
        <Card sx={{minWidth: 275}} key={i}>
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
                            Model: {car.model}
            </Typography>
            <Typography variant="h6" component="div">
                            Owner: {car.owner["full_name"]}
            </Typography>
            <Typography variant="h6" component="div">
                            Price: ${car.price}
            </Typography>
            <Typography variant="h6" color="text.secondary">
                            Size: {car.size}
            </Typography>
            <Typography variant="h6" color="text.secondary">
                            Bought Time: {moment(car.bought_time).utc().format()}
            </Typography>
            <Typography variant="h6" color="text.secondary">
                            Created Time: {moment(car.created_time).utc().format()}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
              <FavoriteIcon/>
            </IconButton>
            <button onClick={handleDetailClick} id={"detail-" + i}> Detail</button>
            <button onClick={handleRemoveClick} id={"remove-" + i}> Remove</button>
            <button onClick={handleEditClick} id={"edit-" + i}> Edit</button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};