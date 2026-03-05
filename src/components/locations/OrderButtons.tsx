export default function OrderButtons({
  doordashUrl,
  uberEatsUrl,
}: {
  doordashUrl: string;
  uberEatsUrl: string;
}) {
  return (
    <div className="flex gap-2">
      {doordashUrl && (
        <a
          href={doordashUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#FF3008] text-white hover:bg-[#e02b07] transition-colors"
        >
          {/* DoorDash logo */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.071 8.409a6.09 6.09 0 0 0-5.396-3.228H.584A.589.589 0 0 0 .1 6.034l1.349 1.888a2.449 2.449 0 0 0 1.997 1.032h16.814a1.2 1.2 0 0 1 0 2.399H6.397a.589.589 0 0 0-.484.909l1.349 1.888a2.449 2.449 0 0 0 1.997 1.032h9.002a6.09 6.09 0 0 0 4.81-9.773z"/>
          </svg>
          DoorDash
        </a>
      )}
      {uberEatsUrl && (
        <a
          href={uberEatsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#06C167] text-white hover:bg-[#05a758] transition-colors"
        >
          {/* Uber Eats logo */}
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.385 17.54c-3.06 0-5.54-2.48-5.54-5.54s2.48-5.54 5.54-5.54 5.54 2.48 5.54 5.54-2.48 5.54-5.54 5.54zm0-8.307a2.77 2.77 0 1 0 0 5.54 2.77 2.77 0 0 0 0-5.54z"/>
          </svg>
          Uber Eats
        </a>
      )}
    </div>
  );
}
