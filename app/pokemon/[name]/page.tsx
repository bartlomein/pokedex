"use client";

import { useFetch } from "../../hooks/useFetch";

export default function Name({ params }) {
  const { data, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.name}`
  );

  return (
    <>
      <h1>{params.name}</h1>
      <h1>test</h1>
    </>
  );
}
