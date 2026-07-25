import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4">
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>
    </main>
  );
}