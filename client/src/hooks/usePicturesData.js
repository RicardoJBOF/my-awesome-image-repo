import { useEffect, useReducer } from "react";
import dataReducer, { SET_PICTURES } from "../reducer/dataReducer";
import axios from "axios";

const usePicturesData = (my_id) => {
  const [state, dispatch] = useReducer(dataReducer, {
    pictures: [],
    loading: true,
  });
  
  useEffect(() => {
    axios({
      method: "GET",
      url: `/pictures/my_pics/${my_id}`,
    })
      .then(({ data }) => {
        dispatch({
          type: SET_PICTURES,
          pictures: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default usePicturesData;