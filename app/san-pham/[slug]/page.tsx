import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/copy/products";
import DetailClient from "./DetailClient";

/* Statically generate the 14 product detail pages; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!PRODUCTS.some((p) => p.slug === slug)) notFound();
  return <DetailClient slug={slug} />;
}
