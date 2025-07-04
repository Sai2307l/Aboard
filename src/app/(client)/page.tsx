import Container from "@/components/Container";
import HomeBanner from "@/components/home/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  return (
    <Container>
      <HomeBanner />
      <div className="py-8">
        <ProductGrid />
      </div>
    </Container>
  );
}
