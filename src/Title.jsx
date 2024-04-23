export const Title = ({ locked }) => {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          <b>At Capacity</b>
        </span>
      ) : (
        "Door Count"
      )}
    </h1>
  );
};
