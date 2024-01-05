"use client";

import { useFetch } from "../../hooks/useFetch";

export default function Name({ params }) {
  console.log(params.name);
  console.log("test");
  const { data, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.name}`
  );
  console.log(data);

  return (
    <>
      <h1>{params.name}</h1>
      <h1>test</h1>
    </>
  );
}
