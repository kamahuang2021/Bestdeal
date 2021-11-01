import React, {useContext, useState} from "react";
import {useHttp} from "../hooks/http";
import {AuthContext} from "../context/auth";
import {AddCarForm} from "../components/cars/AddCarForm";
import {useLocation} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const EditCarPage = () => {
  const auth = useContext(AuthContext);
  const {request} = useHttp();
  const query = useQuery();
  const model = query.get("model");
  const price = query.get("price");
  const size = query.get("size");
  const comment = query.get("comment");
  const bought_time = query.get("bought_time");
  const defaultValues = {model: model, price: price, size: size, comment: comment, bought_time: bought_time};
  const [form, setForm] = useState(defaultValues);


  const editCarHandler = async () => {
    try {
      await request("/cars/" + this.props.id, "PUT", {...form}, {
        Authorization: `Bearer ${auth.token}`
      }).catch(
        error => console.log(error)
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AddCarForm title="Edit your car information" onSubmit={editCarHandler} defaultValues={defaultValues}
      setForm={setForm} form={form}/>
  );
};