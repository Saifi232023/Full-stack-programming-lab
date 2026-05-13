import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, ShoppingCart } from "lucide-react";
import {
  categories,
  collections,
  footerGroups,
  navLinks,
  productColumns,
  updates
} from "@/data/catalog";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand-row">
          <Link href="/" className="brand" aria-label="Rustik Plank home">
            <span>R</span>ustik Plank
          </Link>

          <nav className="small-nav" aria-label="Main links">
            {navLinks.map((link) => (
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}
          </nav>

          <div className="utility">
            <div className="socials" aria-label="Social links">
              <span>Y!</span>
              <span>g+</span>
              <span>t</span>
              <span>f</span>
            </div>
            <span className="phone">07584 031409</span>
            <span className="account">My Account (login?Register)</span>
            <span className="mini-cart">
              <ShoppingCart size={22} strokeWidth={1.8} aria-hidden />
              <span>0 Item</span>
            </span>
            <form className="search-box" role="search">
              <input aria-label="Search products" placeholder="Search" />
              <button type="submit" title="Search" aria-label="Search">
                <Search size={23} strokeWidth={1.8} />
              </button>
            </form>
          </div>
        </div>

        <nav className="category-nav" aria-label="Product categories">
          {categories.map((category) => (
            <Link href="/" key={category}>
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <Image
          className="hero-product"
          src="/assets/hero-lounge.png"
          width={650}
          height={460}
          priority
          alt="Curved wooden lounge chair"
        />

        <div className="hero-copy">
          <span className="orange-diamond" aria-hidden />
          <p>
            This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh vel velit
            auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
            consequat ipsum, nec sagittis sem nibh id elit.
          </p>
          <div className="hero-price">
            <span className="price-main">&pound;129</span>
            <span className="price-cents">.99</span>
            <strong>OUR PRICE</strong>
          </div>
          <button className="cart-pill" type="button">
            <span>ADD TO</span>
            <ShoppingCart size={22} strokeWidth={1.7} aria-hidden />
          </button>
        </div>

        <div className="hero-arrows" aria-hidden>
          <ChevronLeft className="arrow-main" size={118} strokeWidth={0.9} />
          <ChevronRight className="arrow-main" size={118} strokeWidth={0.9} />
          <ChevronLeft className="arrow-small" size={56} strokeWidth={1.2} />
          <ChevronRight className="arrow-small orange" size={56} strokeWidth={1.2} />
        </div>
      </div>

      <svg className="hero-curve" viewBox="0 0 1600 270" preserveAspectRatio="none" aria-hidden>
        <path
          className="curve-shadow"
          d="M0 28 C80 92 142 220 312 237 H960 C1094 237 1110 226 1212 130 C1334 15 1448 3 1600 2"
        />
        <path
          className="curve-line"
          d="M0 28 C80 92 142 220 312 237 H960 C1094 237 1110 226 1212 130 C1334 15 1448 3 1600 2"
        />
      </svg>
    </section>
  );
}

function CollectionStrip() {
  return (
    <section className="collections wrap">
      {collections.map((collection) => (
        <Link className="collection-card" href={collection.href} key={collection.title}>
          <Image src={collection.image} width={355} height={184} alt={collection.title} />
        </Link>
      ))}
    </section>
  );
}

function ProductItem({ product }) {
  return (
    <article className="product-item">
      <Link className="product-image" href={`/products/${product.slug}`}>
        <Image src={product.image} width={170} height={130} alt={product.name} />
      </Link>
      <div className="product-details">
        <p>{product.blurb}</p>
        <div className="price-row">
          <span>&pound;{product.price}</span>
          {product.oldPrice ? <del>&pound;{product.oldPrice}</del> : null}
        </div>
        <Link className="detail-button" href={`/products/${product.slug}`}>
          Detail
        </Link>
      </div>
    </article>
  );
}

function ProductColumns() {
  return (
    <section className="product-columns wrap">
      {productColumns.map((column) => (
        <div className="product-column" id={column.title.toLowerCase()} key={column.title}>
          <div className="column-body">
            <h2>{column.title}</h2>
            <div className="section-rule" />
            {column.products.map((product) => (
              <ProductItem product={product} key={product.slug} />
            ))}
          </div>
          <Link className="column-cta" href="/">
            {column.cta}
          </Link>
        </div>
      ))}
    </section>
  );
}

function Deals() {
  return (
    <section className="deals wrap">
      <h2>Hot&nbsp;&nbsp;Deal</h2>
      <div className="deal-grid">
        <Image src="/assets/deal-elite.jpg" width={540} height={335} alt="Elite collection sale" />
        <Image src="/assets/deal-reclaimed.jpg" width={542} height={335} alt="Reclaimed handmade sale" />
      </div>
    </section>
  );
}

function BuyOnline() {
  return (
    <section className="buy-online wrap">
      <div className="buy-left">
        <strong>BUY ONLINE</strong>
        <span>PICK UP IN STORE</span>
      </div>
      <div className="buy-divider" aria-hidden />
      <div className="buy-right">
        <strong>NOW AVAILABLE IN OUR STORE SYSTEM</strong>
        <p>
          AVAILABLE ON SELECT PRODUCTS. <Link href="/">LEARN MORE</Link>
        </p>
      </div>
    </section>
  );
}

function LatestUpdates() {
  return (
    <section className="updates wrap">
      <h2>Latest&nbsp;&nbsp;Updates</h2>
      <div className="updates-grid">
        {updates.map((update, index) => (
          <article className="update-card" key={`${update.title}-${index}`}>
            <Image src={update.image} width={355} height={147} alt={update.title} />
            <h3>{update.title}</h3>
            <p>{update.text}</p>
            <Link className="read-more" href="/">
              READ MORE
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners wrap" aria-label="Partner logos">
      <Image src="/assets/partner-logos.jpg" width={1102} height={95} alt="Partner brands" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner wrap">
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <p className="copyright">&copy; 2014 Rustik Plank Furniture . All Rights Reserved .</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CollectionStrip />
      <ProductColumns />
      <Deals />
      <BuyOnline />
      <LatestUpdates />
      <Partners />
      <Footer />
    </main>
  );
}
