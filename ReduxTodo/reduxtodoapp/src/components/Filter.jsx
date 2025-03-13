import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  return (
    <div>
      {["ALL", "COMPLETED", "PENDING"].map((type) => (
        <button key={type} onClick={() => dispatch(setFilter(type))} disabled={currentFilter === type}>
          {type}
        </button>
      ))}
    </div>
  );
};

export default Filter;
