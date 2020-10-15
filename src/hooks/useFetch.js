import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

export default (url) => {
  const baseUrl = `https://conduit.productionready.io/api${url}`;
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");
  console.log("token React", token);

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ``,
        },
      },
    };
    if (!isLoading) {
      return;
    }
    axios(`${baseUrl}`, requestOptions)
      .then((res) => {
        console.log("sucsess", res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((err) => {
        console.log("error", err);
        setIsLoading(false);
        setError(err.response);
      });
  }, [isLoading, options, url, token]);

  return [{ response, isLoading, error }, doFetch];
};
