import React from "react";
import { useWeb3Transfer } from "react-moralis";

const TransferEth = () => {
  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "native",
    amount: Moralis.Units.ETH(0.5),
    receiver: "0x0000000000000000000000000000000000000000",
  });

  return (
    // Use your custom error component to show errors
    <div>
      {error && <ErrorMessage error={error} />}
      <button onClick={() => fetch()} disabled={isFetching}>
        Transfer
      </button>
    </div>
  );
};

export default TransferEth