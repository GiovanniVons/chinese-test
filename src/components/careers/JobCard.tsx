import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import type { JobListing } from "@/lib/types";

export default function JobCard({ job }: { job: JobListing }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-bold text-brand-black">{job.title}</h3>
        <Badge
          label={job.type}
          color={job.type === "Full-Time" ? "popular" : "default"}
        />
      </div>
      <p className="text-sm text-brand-gold font-medium mb-2">
        {job.category} &middot; {job.location}
      </p>
      <p className="text-sm text-brand-gray mb-3">{job.description}</p>
      {job.requirements.length > 0 && (
        <details className="text-sm text-brand-gray">
          <summary className="cursor-pointer font-medium text-brand-black hover:text-brand-red transition-colors">
            Requirements &amp; Benefits
          </summary>
          <div className="mt-2 space-y-2">
            <ul className="list-disc list-inside space-y-0.5">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            {job.benefits.length > 0 && (
              <>
                <p className="font-medium text-brand-black mt-2">Benefits:</p>
                <ul className="list-disc list-inside space-y-0.5">
                  {job.benefits.map((ben, i) => (
                    <li key={i}>{ben}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </details>
      )}
    </Card>
  );
}
