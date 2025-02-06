import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { getPlaces } from "../../api";
import { Place } from "../../types";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";

const List = () => {
  // urldeki parametreleri al ve nesne haline getir
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());

  const { isLoading, error, data, refetch } = useQuery<Place[]>({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj),
  });

  console.log(data);
  return (
    <div>
      <h1>Yakınınızdaki Lokasyonlar</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} refetch={refetch} />
        ) : (
          <div className="grid gap-5 mt-5">
            {data?.map((place) => (
              <Card key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
