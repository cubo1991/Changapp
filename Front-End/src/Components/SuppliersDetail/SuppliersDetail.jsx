import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../actions";
import { SuppliersDetailCard } from "./SuppliersDetailCard";
import style from "../SuppliersDetail/SuppliersDetail.module.css"

export const SuppliersDetail = () => {
  let dispatch = useDispatch();
  let supplierDetail = useSelector((state) => state.supplierDetails);
  let params = useParams();

  React.useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={style.container}>
      <div className={style.rating}>
      <h2 className=""> Rating: </h2>
      <span>{params.id}</span>
      </div>
      <SuppliersDetailCard
        name={supplierDetail.name}
        cuit={supplierDetail.cuit}
        description={supplierDetail.description}
        id={supplierDetail.id}
      />
    </div>
  );
};
