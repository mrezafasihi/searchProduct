import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchSearch } from "./Mouser";

function ShowResaultSearch({valueInputSearcch}) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search"],
    queryFn:async()=> await fetchSearch({valueInputSearcch})
  });

  if (isLoading) return "...pending";
  if (isError) return <p>{error.toString()}</p>;
  return (
    <section>
      {data?.SearchResults?.Parts?.map((item, index) => {
        return <div key={index}>{item.Description}</div>;
      })}
    </section>
  );
}

export default ShowResaultSearch;
