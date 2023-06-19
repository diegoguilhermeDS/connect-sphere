"use client";

import { useEffect } from "react";

interface iErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: iErrorProps) {
  useEffect(() => {
    console.error("ese erro aqui", error);
  }, [error]);

  return (
    <div>
      <h1>Algo deu errado</h1>
      <button onClick={reset}>
        Tentar novamente!
      </button>
    </div>
  );
}