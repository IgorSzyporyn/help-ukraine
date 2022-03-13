import type { DefaultSeoProps } from "next-seo"

/*
  const icons = [
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/icon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/icon-192x192.jpg",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/icons/icon-512x512.jpg",
      sizes: "512x512",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-48x48.jpg",
      sizes: "48x48",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-57x57.jpg",
      sizes: "57x57",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-60x60.jpg",
      sizes: "60x60",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-72x72.jpg",
      sizes: "72x72",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-76x76.jpg",
      sizes: "76x76",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-114x114.jpg",
      sizes: "114x114",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-120x120.jpg",
      sizes: "120x120",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-144x144.jpg",
      sizes: "144x144",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-152x152.jpg",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      href: "/icons/icon-180x180.jpg",
      sizes: "180x180",
    },
  ]
*/

const icons = [
  {
    rel: "icon",
    href: "/icons/favicon.svg",
    type: "image/svg+xml",
  },
  {
    rel: "apple-touch-icon",
    href: "/icons/ios/180.png",
  },
]

const SEO: DefaultSeoProps = {
  additionalLinkTags: [
    ...icons,
    {
      rel: "canonical",
      href: "http://helpukrainedenmark.dk",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
  openGraph: {
    url: "http://helpukrainedenmark.dk",
    title: "Help Ukraine | Denmark",
    description:
      "A non profit organisation to facilitate help for the humanitarian catastrophe that is unfolding as a result as Russias war on Ukraine",
    site_name: "Help Ukraine | Denmark",
    images: [
      {
        url: "http://helpukrainedenmark.dk/logos/logo-800x600.png",
        width: 800,
        height: 600,
        alt: "Help Ukraine | Denmark",
        type: "image/jpeg",
      },
    ],
  },
  /**
    mobileAlternate: {
      media: "only screen and (max-width: 640px)",
      href: "http://helpukrainedenmark.dk/",
    },
  */
  additionalMetaTags: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "keywords",
      content: "Ukraine, Help, Aid, Support, Hjælp, Støt, Doner,",
    },
    {
      name: "application-name",
      content: "Help Ukraine | Denmark",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "apple-mobile-web-app-title",
      content: "Help Ukraine | Denmark",
    },
    {
      name: "description",
      content:
        "A non profit organisation to facilitate help for the humanitarian catastrophe that is unfolding as a result as Russias war on Ukraine",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "msapplication-config",
      content: "/browserconfig.xml",
    },
    {
      name: "msapplication-TileColor",
      content: "#ffd700",
    },
    {
      name: "msapplication-tap-highlight",
      content: "no",
    },
    {
      name: "theme-color",
      content: "#0057b7",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
}

export default SEO
