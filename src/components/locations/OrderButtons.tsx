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
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.07 9.45C21.72 6.1 18.47 3.17 14.87 2.18c-1.56-.43-3.2-.5-4.81-.24A12.07 12.07 0 0 0 .93 9.45c-.5 1.53-.5 2.73.01 3.59.38.64 1.04.96 1.92.96h18.27c.89 0 1.55-.32 1.93-.96.52-.86.52-2.06.01-3.59z" />
          </svg>
          DoorDash
        </a>
      )}
      {uberEatsUrl && (
        <a
          href={uberEatsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8a7.2 7.2 0 1 1 0 14.4 7.2 7.2 0 0 1 0-14.4z" />
          </svg>
          Uber Eats
        </a>
      )}
    </div>
  );
}
