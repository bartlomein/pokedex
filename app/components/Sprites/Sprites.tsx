import { Sprites } from "@/app/pokemon/[name]/types";

const Sprites = ({ sprites }: { sprites: Sprites }) => {
  function filterHelper(item: any) {
    // TODO handling of all the versions if there was more time
    if (item[0] !== "versions" && item[0] !== "other") {
      return item?.[1];
    }
  }

  const filteredSprites = Object.entries(sprites).filter(filterHelper) || [];

  return (
    <div>
      <h2>Sprites</h2>
      <div>
        {filteredSprites.map((sprite, index) => {
          const name = sprite[0];
          const url = sprite[1];

          return (
            <div key={`${name}_${index}`}>
              <div>{name}</div>
              <img src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sprites;
