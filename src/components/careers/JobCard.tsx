import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { JobListing } from "@/lib/types";

export default function JobCard({ job }: { job: JobListing }) {
  return (
    <div className="bg-brand-charcoal border border-brand-gray/10 p-6 md:p-8 hover:border-brand-gold/30 transition-all duration-300 group">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-cormorant font-medium text-2xl text-brand-light mb-2 group-hover:text-brand-gold transition-colors">{job.title}</h3>
          <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold">
            {job.category} &middot; {job.location}
          </p>
        </div>
        <div className="shrink-0">
          <Badge
            label={job.type}
            color={job.type === "Full-Time" ? "popular" : "default"}
          />
        </div>
      </div>

      <p className="text-sm font-light leading-relaxed text-brand-gray mb-6">{job.description}</p>

      {job.requirements.length > 0 && (
        <details className="text-sm font-light text-brand-gray group/details border-t border-brand-gray/10 pt-4 mt-auto">
          <summary className="cursor-pointer font-montserrat uppercase tracking-widest text-xs text-brand-light hover:text-brand-gold transition-colors list-none flex items-center justify-between">
            <span>Requirements &amp; Offerings</span>
            <span className="text-brand-gold group-open/details:rotate-180 transition-transform">▼</span>
          </summary>
          <div className="mt-6 space-y-6 pb-2">
            <div>
              <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3">Requirements</p>
              <ul className="list-disc list-inside space-y-2 marker:text-brand-gold/50">
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            {job.benefits.length > 0 && (
              <div>
                <p className="font-montserrat text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-3">Benefits</p>
                <ul className="list-disc list-inside space-y-2 marker:text-brand-gold/50">
                  {job.benefits.map((ben, i) => (
                    <li key={i}>{ben}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </details>
      )}
    </div>
  );
}
