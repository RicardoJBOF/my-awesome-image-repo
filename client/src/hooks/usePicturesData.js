import { useEffect, useReducer } from "react";
import dataReducer, { SET_PICTURES } from "../reducer/dataReducer";
import axios from "axios";

const usePicturesData = () => {
  const [state2, dispatch] = useReducer(dataReducer, {
    pictures: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: "GET",
      url: "/pictures",
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
    state2,
    dispatch,
  };
};

export default usePicturesData;