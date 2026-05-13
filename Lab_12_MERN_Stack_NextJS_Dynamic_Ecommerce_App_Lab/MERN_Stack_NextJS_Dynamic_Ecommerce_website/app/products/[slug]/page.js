import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { allProducts } from "@/data/catalog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);
  return {
    title: product ? `${product.name} | Rustik Plank` : "Product | Rustik Plank"
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="product-page">
      <Link href="/" className="brand compact-brand">
        <span>R</span>ustik Plank
      </Link>

      <section className="product-detail wrap">
        <Image src={product.image} width={460} height={340} alt={product.name} />
        <div>
          <p className="eyebrow">{product.section} / {product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-copy">
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.
          </p>
          <div className="detail-price">&pound;{product.price}</div>
          <button className="cart-pill" type="button">
            <span>ADD TO</span>
            <ShoppingCart size={22} strokeWidth={1.7} aria-hidden />
          </button>
        </div>
      </section>
    </main>
  );
}
