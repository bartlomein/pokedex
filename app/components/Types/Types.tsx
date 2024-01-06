import { Type } from "@/app/pokemon/[name]/types";

const Types = ({ types }: { types: Type[] }) => {
  return (
    <div>
      <h2>Types</h2>
      <ul>
        {types?.map((elem: Type) => {
          return <li>{elem.type.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Types;
