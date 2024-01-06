const Sprites = ({ sprites }: any) => {
  function filterHelper(item: any) {
    // TODO extra stuff if there was more time
    if (item[0] !== "versions" && item[0] !== "other") {
      return item?.[1];
    }
  }

  const filteredSprites = Object.entries(sprites).filter(filterHelper) || [];

  return (
    <div>
      <h2>Sprites</h2>
      <div>
        {filteredSprites.map((elem) => {
          const name = elem[0];
          const url = elem[1];

          return (
            <div>
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
