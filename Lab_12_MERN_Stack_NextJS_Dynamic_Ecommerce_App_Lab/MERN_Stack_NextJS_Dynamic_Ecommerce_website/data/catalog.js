export const navLinks = ["Home", "Blog", "About Us", "Contact Us"];

export const categories = ["Beds", "Cabinets", "Bookcases", "Boxes", "Chairs", "Tables"];

export const collections = [
  { title: "Chairs Collection", image: "/assets/collection-chairs.jpg", href: "#chairs" },
  { title: "Beds Collection", image: "/assets/collection-beds.jpg", href: "#beds" },
  { title: "Tables Collection", image: "/assets/collection-tables.jpg", href: "#tables" }
];

export const productColumns = [
  {
    title: "Featured",
    cta: "See All Feature",
    products: [
      {
        slug: "round-rustic-table",
        name: "Round Rustic Table",
        category: "Tables",
        price: "134.99",
        image: "/assets/featured-round-table.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "low-coffee-table",
        name: "Low Coffee Table",
        category: "Tables",
        price: "134.99",
        image: "/assets/featured-coffee-table.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "farmhouse-dining-table",
        name: "Farmhouse Dining Table",
        category: "Tables",
        price: "134.99",
        image: "/assets/featured-dining-table.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "wooden-serving-bowls",
        name: "Wooden Serving Bowls",
        category: "Boxes",
        price: "134.99",
        image: "/assets/featured-bowls.jpg",
        blurb: "This is Photoshop's version Lorem"
      }
    ]
  },
  {
    title: "Special",
    cta: "See All Special",
    products: [
      {
        slug: "straight-back-chair",
        name: "Straight Back Chair",
        category: "Chairs",
        price: "134.99",
        oldPrice: "134.99",
        image: "/assets/special-chair.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "outdoor-rustic-chair",
        name: "Outdoor Rustic Chair",
        category: "Chairs",
        price: "134.99",
        oldPrice: "134.99",
        image: "/assets/special-outdoor-chair.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "paired-lounge-chairs",
        name: "Paired Lounge Chairs",
        category: "Chairs",
        price: "134.99",
        oldPrice: "134.99",
        image: "/assets/special-pair-chairs.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "storage-chest",
        name: "Storage Chest",
        category: "Boxes",
        price: "134.99",
        oldPrice: "134.99",
        image: "/assets/special-chest.jpg",
        blurb: "This is Photoshop's version Lorem"
      }
    ]
  },
  {
    title: "Popular",
    cta: "See All Popular",
    products: [
      {
        slug: "open-bookcase",
        name: "Open Bookcase",
        category: "Bookcases",
        price: "134.99",
        image: "/assets/popular-bookcase.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "wood-panel-bed",
        name: "Wood Panel Bed",
        category: "Beds",
        price: "134.99",
        image: "/assets/popular-bed-wood.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "carved-royal-bed",
        name: "Carved Royal Bed",
        category: "Beds",
        price: "134.99",
        image: "/assets/popular-carved-bed.jpg",
        blurb: "This is Photoshop's version Lorem"
      },
      {
        slug: "cream-wood-bed",
        name: "Cream Wood Bed",
        category: "Beds",
        price: "134.99",
        image: "/assets/popular-cream-bed.jpg",
        blurb: "This is Photoshop's version Lorem"
      }
    ]
  }
];

export const allProducts = productColumns.flatMap((column) =>
  column.products.map((product) => ({ ...product, section: column.title }))
);

export const updates = [
  {
    title: "Lorem ipsum",
    image: "/assets/update-classic-bedroom.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Lorem ipsum",
    image: "/assets/update-modern-bedroom.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "Lorem ipsum",
    image: "/assets/update-wood-bedroom.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

export const footerGroups = [
  {
    title: "Informations",
    links: ["Terms and conditions", "About us", "Sitemap", "Contact", "Return policy", "Suppliers"]
  },
  {
    title: "My Account",
    links: ["Your Account", "Information", "Addresses", "Orders history", "Delivery Information", "Search Terms"]
  },
  {
    title: "Help and More",
    links: ["New products", "Top sellers", "Manufacturers", "Suppliers", "Specials"]
  },
  {
    title: "Links",
    links: ["Delivery", "Service", "Gift Cards", "Mobile", "Manufacturers"]
  }
];
