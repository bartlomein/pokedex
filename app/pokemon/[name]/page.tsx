"use client";

import Abilities from "@/app/components/Abilities/Abilities";
import Moves from "@/app/components/Moves/Moves";
import Species from "@/app/components/Species/Species";
import Sprites from "@/app/components/Sprites/Sprites";
import Types from "@/app/components/Types/Types";
import { useFetch } from "../../hooks/useFetch";
import styles from "./styles.module.scss";

export default function Name({ params }: any) {
  const { data, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );

  console.log(data);

  return (
    <>
      <div className={styles.name}>
        <h1>{params.name}</h1>
      </div>
      {data ? (
        <div className={styles.details}>
          <Abilities abilities={data?.abilities} />
          <Moves moves={data?.moves} />
          <Species species={data?.species} />
          <Types types={data?.types} />
          <Sprites sprites={data?.sprites} />
        </div>
      ) : (
        <div>no data</div>
      )}
    </>
  );
}
