const Sprites = ({ sprites }: any) => {
  function filterHelper(item: any) {
    return item?.[1];
  }

  const filteredSprites = Object.entries(sprites).filter(filterHelper) || [];

  console.log(filteredSprites);

  return (
    <div>
      <div>Sprites</div>
      <div>
        {filteredSprites.map((elem) => {
          const name = elem[0];
          const url = elem[1];

          // TODO extra stuff if there was more time

          if (elem[0] !== "versions" && elem[0] !== "other") {
            return (
              <div>
                <div>{name}</div>
                <img src={url} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sprites;
