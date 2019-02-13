import React from "react";
import useCounterState from "../counter/functions/useCounterState";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Counter = () => {
  const { count, increment, decrement } = useCounterState(0);

  return (
    <div>
      <Typography component="h1" variant="h2">
        Counter
      </Typography>
      <Typography component="h2" variant="h2">
        {count}
      </Typography>
      <Button variant="fab" onClick={decrement}>
        -
      </Button>
      <Button variant="fab" onClick={increment}>
        +
      </Button>
    </div>
  );
};

export default Counter;
