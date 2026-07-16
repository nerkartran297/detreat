import ProductsPage from "./ProductsPage";

// The ?cat= deep-link param is read via useSearchParams() inside
// ProductsPage's own Suspense boundary (SyncFilterFromUrl), so the rest of
// the page prerenders fully during `next build`.
export default function Page() {
  return <ProductsPage />;
}
