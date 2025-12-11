import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    
      <main className="flex flex-wrap items-center gap-2 md:flex-row">
        <h1>
          Lis la syllabe maintenant!
        </h1>
        <Button variant="outline">Correct!</Button>
        <Button>Faux!</Button>
      </main>
 
  );
}
