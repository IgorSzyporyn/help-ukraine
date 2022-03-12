import type { DefaultSeoProps } from "next-seo"

const robotoFont = [
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Black.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-BlackItalic.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Bold.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-BoldItalic.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Italic.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Light.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-LightItalic.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Medium.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-MediumItalic.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Regular.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-Thin.ttf",
    as: "font",
  },
  {
    rel: "preload",
    href: "/fonts/roboto/Roboto-ThinItalic.ttf",
    as: "font",
  },
]

const icons = [
  {
    rel: "icon",
    type: "image/png",
    href: "/icons/favicon-32x32.png",
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
    href: "/icons/apple-icon-57x57.jpg",
    sizes: "57x57",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-60x60.jpg",
    sizes: "60x60",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-72x72.jpg",
    sizes: "72x72",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-76x76.jpg",
    sizes: "76x76",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-114x114.jpg",
    sizes: "114x114",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-120x120.jpg",
    sizes: "120x120",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-144x144.jpg",
    sizes: "144x144",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-152x152.jpg",
    sizes: "152x152",
  },
  {
    rel: "apple-touch-icon",
    type: "image/png",
    href: "/icons/apple-icon-180x180.jpg",
    sizes: "180x180",
  },
]

const SEO: DefaultSeoProps = {
  additionalLinkTags: [
    ...robotoFont,
    ...icons,
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
  openGraph: {
    url: "http://helpukrainedenmark.dk",
    title: "Help Ukraine Denmark",
    description:
      "A non profit organisation to facilitate help for the humanitarian catastrophe that is unfolding as a result as Russias war on Ukraine",
    site_name: "Help Ukraine Denmark",
    images: [
      {
        url: "http://helpukrainedenmark.dk/logos/logo-800x600.png",
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
      name: "application-name",
      content: "Help Ukraine Denmark",
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
      content: "Help Ukraine Denmark",
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
      content: "/icons/browserconfig.xml",
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
      name: "viewport",
      content:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
}

export default SEO
