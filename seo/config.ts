import type { DefaultSeoProps } from "next-seo"

const SEO: DefaultSeoProps = {
  additionalLinkTags: [
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "manifest",
      href: "/static/manifest.json",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/static/icons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/static/icons/icon-192x192.jpg",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/static/icons/icon-512x512.jpg",
      sizes: "512x512",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-57x57.jpg",
      sizes: "57x57",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-60x60.jpg",
      sizes: "60x60",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-72x72.jpg",
      sizes: "72x72",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-76x76.jpg",
      sizes: "76x76",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-114x114.jpg",
      sizes: "114x114",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-120x120.jpg",
      sizes: "120x120",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-144x144.jpg",
      sizes: "144x144",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-152x152.jpg",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/static/icons/apple-icon-180x180.jpg",
      sizes: "180x180",
    },
  ],
  openGraph: {
    url: "http://helpukrainedenmark.dk",
    title: "Help Ukraine Denmark",
    description: "#hUdk",
    site_name: "Help Ukraine Denmark",
    images: [
      {
        url: "http://helpukrainedenmark.dk/static/logos/logo-800x600.png",
        width: 800,
        height: 600,
        alt: "Help Ukraine Denmark",
        type: "image/jpeg",
      },
    ],
  },
  mobileAlternate: {
    media: "only screen and (max-width: 640px)",
    href: "http://helpukrainedenmark.dk/",
  },
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Igor Szyporyn Jørgensen",
    },
    {
      name: "application-name",
      content: "Help Ukraine Denmark",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
}

export default SEO
