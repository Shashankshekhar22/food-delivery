import { useRouteError } from "react-router";

const ErrorLayout = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>There is some Error</h1>
      <h3>Error: {err.status}</h3>
    </div>
  );
};

export default ErrorLayout;
