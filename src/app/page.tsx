import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-4xl font-serif mb-5">
        This is Starter Template for your Great Project
      </h1>
      <p>
        am happy to have you here , lets start whats on your mind and show to
        the world
      </p>
      <Button className="m-4">Are you Ready</Button>
    </div>
  );
}
