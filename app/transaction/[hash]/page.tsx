import { Suspense } from "react";
import { Transaction } from "@/entities/transaction";
import { Hash } from "viem";

interface TransactionPageProps {
  params: {
    hash: Hash;
  };
}

export default async function TransactionPage({ params }: TransactionPageProps) {
  const { hash } = params;
  return (
    <>
      <Suspense
        fallback={
          <div>Loading...</div>
        }
      >
        <Transaction hash={hash} />
      </Suspense>
    </>
  );
}