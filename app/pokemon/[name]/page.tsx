"use client";

import Abilities from "@/app/components/Abilities/Abilities";
import { NextPage } from "next";

import EvolutionChain from "@/app/components/EvolutionChain/EvolutionChain";
import History from "@/app/components/History/History";
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
  const { data, loading }: PtypeRes = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${params.name}`
  );

  if (loading) {
    return <div>Loading Pokemon</div>;
  }

  return (
    <>
      {data && !loading ? (
        <>
          <div className={styles.header}>
            <h1>{params.name}</h1>
            <History />
          </div>
          <div className={styles.subheader}>
            <Species species={data.species!} />
            <Types types={data.types} />
          </div>
          <div className={styles.details}>
            <Abilities abilities={data.abilities} />
            <Moves moves={data.moves} />

            <Sprites sprites={data.sprites!} />
            <EvolutionChain id={data.id} name={params.name} />
          </div>
        </>
      ) : (
        <div>404 No Pokemon Found</div>
      )}
    </>
  );
};
export default Name;
