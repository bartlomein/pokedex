import { Type } from "@/app/pokemon/[name]/types";

const Types = ({ types }: { types: Type[] }) => {
  return (
    <div>
      <h2>Types</h2>
      <ul>
        {types?.map((type: Type, index) => {
          const name = type.type.name;
          return <li key={`${name}_${index}`}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Types;
