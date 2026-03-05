import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="text-center max-w-md mx-auto">
          <p className="text-6xl font-bold text-brand-red mb-4">404</p>
          <h1 className="text-2xl font-bold text-brand-black mb-4">
            Page Not Found
          </h1>
          <p className="text-brand-gray mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/">Go Home</Button>
            <Button href="/locations" variant="outline">
              Find a Location
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
