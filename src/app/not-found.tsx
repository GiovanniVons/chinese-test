import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center bg-brand-black relative overflow-hidden">
      {/* Subtle luxury background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-brand-gold to-transparent opacity-30" />

      <Container>
        <div className="text-center max-w-md mx-auto relative z-10">
          <p className="text-8xl md:text-[150px] font-cormorant font-light text-brand-gold/20 leading-none mb-0 select-none">
            404
          </p>
          <div className="-mt-12 md:-mt-20">
            <h1 className="text-3xl md:text-5xl font-cormorant font-medium text-brand-light mb-6">
              Experiential <span className="italic text-brand-gray">Absence</span>
            </h1>
            <p className="text-brand-gray font-light leading-relaxed mb-10 text-sm md:text-base px-4">
              The culinary journey you are seeking appears to have moved or does not exist. Let us guide you back to our curated collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/" variant="primary" className="px-8 py-3 rounded-none text-xs uppercase tracking-[0.2em] w-full sm:w-auto">
                Return to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
