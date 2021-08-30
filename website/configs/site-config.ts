const baseUrl = "https://github.com/creativetimofficial/purity-ui-dashboard"

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Creative Tim. All Rights Reserved.`,
  algolia: {
    apiKey: "655968634437471",
    indexName: "purity-ui-dashboard",
    inputSelector: "#algolia-search",
  },
  author: {
    name: "Creative Tim & Simmmple",
    github: "https://github.com/creativetimofficial",
    twitter: "https://twitter.com/creativetim",
    email: "sage@adebayosegun.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  freeDownload: {
    url:
      "https://www.creative-tim.com/product/purity-ui-dashboard?ref=docs-pud",
  },
  youtube: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  seo: {
    title: "Purity UI Dashboard",
    titleTemplate: "%s - Purity UI Dashboard",
    description:
      "Simple, Modular and Accessible UI Components for your React Applications.",
    siteUrl:
      "https://www.creative-tim.com/product/purity-ui-dashboard?ref=docs-pud",
    twitter: {
      handle: "@creativetim",
      site: "@creativetim",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.creative-tim.com?ref=docs-pud",
      title: "Purity UI Dashboard",
      description:
        "Purity UI Dashboard is a beautiful Chakra UI ReactJS admin dashboard with a large number of components, designed to look beautiful, clean and organized. If you are looking for a tool to manage dates about your business, this dashboard is the thing for you.",
      site_name:
        "Most trendiest, complex and innovative Dashboard Made by Creative Tim & Simmmple. Check our latest Free ReactJS Dashboard based on Chakra UI.",
      images: [
        {
          url:
            "https://i.ibb.co/7NXMZQS/Cover-Purity-Chakra-FREE-Thumbnail.png",
          width: 1240,
          height: 480,
          alt:
            "Most trendiest, complex and innovative Dashboard Made by Creative Tim & Simmmple. Check our latest Free ReactJS Dashboard based on Chakra UI.",
        },
        {
          url:
            "https://i.ibb.co/7NXMZQS/Cover-Purity-Chakra-FREE-Thumbnail.png",
          width: 1012,
          height: 506,
          alt:
            "Most trendiest, complex and innovative Dashboard Made by Creative Tim & Simmmple. Check our latest Free ReactJS Dashboard based on Chakra UI.",
        },
      ],
    },
  },
}

export default siteConfig
