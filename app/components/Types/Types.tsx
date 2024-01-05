const Types = ({ types }: any) => {
  return (
    <div>
      <div>
        <h2>Types</h2>
        <ul>
          {types?.map((elem: any) => {
            return <li>{elem.type.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Types;
