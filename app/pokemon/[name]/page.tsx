"use client";

import Abilities from "@/app/components/Abilities/Abilities";
import { NextPage } from "next";

import EvolutionChain from "@/app/components/EvolutionChain/EvolutionChain";
import Moves from "@/app/components/Moves/Moves";
import Species from "@/app/components/Species/Species";
import Sprites from "@/app/components/Sprites/Sprites";
import Types from "@/app/components/Types/Types";
import { useFetch } from "../../hooks/useFetch";
import styles from "./styles.module.scss";
import { PtypeRes } from "./types";

type PageParams = {
  name: string;
};

type PageProps = {
  params: PageParams;
};

const Name: NextPage<PageProps> = ({ params }) => {
  const { data }: PtypeRes = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );

  return (
    <>
      {data ? (
        <>
          <div className={styles.name}>
            <h1>{params.name}</h1>.
            <Species species={data.species} />
          </div>
          <div className={styles.details}>
            <Abilities abilities={data.abilities} />
            <Moves moves={data.moves} />

            <Types types={data.types} />
            <Sprites sprites={data.sprites} />
            <EvolutionChain id={data.id} />
          </div>
        </>
      ) : (
        <div>404 No Pokemon Found</div>
      )}
    </>
  );
};
export default Name;
