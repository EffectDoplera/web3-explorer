import { LatestBlockNumberOverview, LatestBlockTransactionSizeOverview } from "@/entities/block";
import { Button } from "@/shared/ui/button";
import { Details } from "@/shared/ui/details";
import { Input } from "@/shared/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <div className="min-h-full bg-alternative relative max-h-screen flex">
      <div className="flex flex-col min-h-screen w-full overflow-y-auto relative mx-4">
        <main className="flex flex-1 justify-center flex-col gap-4">
          <div className="flex items-center overflow-hidden shadow-warning border-2 border-dark-100">
            <Input
              type="email"
              placeholder="Search for an address, transaction hash, or block number"
              className="rounded-none border-r-2 placeholder-shown:truncate"
            />
            <Button
              variant="outline"
              size="icon"
              className="rounded-none"
            >
              <MagnifyingGlassIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <LatestBlockNumberOverview />
            <LatestBlockTransactionSizeOverview />
            <Details title="Poligon price">Hello</Details>
          </div>
        </main>
      </div>
    </div>
  );
}
