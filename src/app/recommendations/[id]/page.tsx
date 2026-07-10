import { recommendations } from "@/lib/data";
import { RecommendationDetailContent } from "./RecommendationDetailContent";

export function generateStaticParams() {
  return recommendations.map((rec) => ({
    id: rec.id,
  }));
}

export default async function RecommendationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RecommendationDetailContent id={id} />;
}

