async function redirect() {
  return [
    // GENERAL
    {
      source: "/docs",
      destination: "/docs/getting-started",
      permanent: true,
    },
    {
      source: "/getting-started",
      destination: "/docs/getting-started",
      permanent: true,
    },
    {
      source: "/routing",
      destination: "/docs/routing",
      permanent: true,
    },
    {
      source: "/principles",
      destination: "/docs/principles",
      permanent: true,
    },
    {
      source: "/theme",
      destination: "/docs/theming/theme",
      permanent: true,
    },
    // COMPONENTS
    {
      source: "/avatar",
      destination: "/docs/media-and-icons/avatar",
      permanent: true,
    },
    {
      source: "/badge",
      destination: "/docs/data-display/badge",
      permanent: true,
    },
    {
      source: "/box",
      destination: "/docs/layout/box",
      permanent: true,
    },
    {
      source: "/fixed-plugin",
      destination: "/docs/layout/fixed-plugin",
      permanent: true,
    },
    {
      source: "/breadcrumb",
      destination: "/docs/navigation/breadcrumb",
      permanent: true,
    },
    {
      source: "/sidebar",
      destination: "/docs/navigation/sidebar",
      permanent: true,
    },
    {
      source: "/button",
      destination: "/docs/form/button",
      permanent: true,
    },
    {
      source: "/cards",
      destination: "/docs/layout/cards",
      permanent: true,
    },
    {
      source: "/charts",
      destination: "/docs/data-display/cards",
      permanent: true,
    },
    {
      source: "/closebutton",
      destination: "/docs/components/close-button",
      permanent: true,
    },
    {
      source: "/portal",
      destination: "/docs/components/portal",
      permanent: true,
    },
    {
      source: "/controlbox",
      // MISSING
      destination: "/docs/layout/box",
      permanent: true,
    },
    {
      source: "/drawer",
      destination: "/docs/overlay/drawer",
      permanent: true,
    },
    {
      source: "/flex",
      destination: "/docs/layout/flex",
      permanent: true,
    },
    {
      source: "/formcontrol",
      destination: "/docs/form/form-control",
      permanent: true,
    },
    {
      source: "/grid",
      destination: "/docs/layout/grid",
      permanent: true,
    },
    {
      source: "/heading",
      destination: "/docs/typography/heading",
      permanent: true,
    },
    {
      source: "/icon",
      destination: "/docs/media-and-icons/icon",
      permanent: true,
    },
    {
      source: "/separator",
      destination: "/docs/layout/separator",
      permanent: true,
    },
    {
      source: "/iconbutton",
      destination: "/docs/form/icon-button",
      permanent: true,
    },
    {
      source: "/image",
      destination: "/docs/media-and-icons/image",
      permanent: true,
    },
    {
      source: "/input",
      destination: "/docs/form/input",
      permanent: true,
    },
    {
      source: "/link",
      destination: "/docs/navigation/link",
      permanent: true,
    },
    {
      source: "/list",
      destination: "/docs/data-display/list",
      permanent: true,
    },
    {
      source: "/menu",
      destination: "/docs/overlay/menu",
      permanent: true,
    },
    {
      source: "/modal",
      destination: "/docs/overlay/modal",
      permanent: true,
    },
    {
      source: "/navbar",
      destination: "/docs/navigation/navbar",
      permanent: true,
    },
    {
      source: "/progress",
      destination: "/docs/feedback/progress",
      permanent: true,
    },
    {
      source: "/pseudobox",
      // deprecated, moved to box
      destination: "/docs/layout/box",
      permanent: true,
    },
    {
      source: "/simplegrid",
      destination: "/docs/layout/simple-grid",
      permanent: true,
    },
    {
      source: "/stat",
      destination: "/docs/data-display/stat",
      permanent: true,
    },
    {
      source: "/stack",
      destination: "/docs/layout/stack",
      permanent: true,
    },
    {
      source: "/switch",
      destination: "/docs/form/switch",
      permanent: true,
    },
    {
      source: "/timeline",
      destination: "/docs/data-display/timeline",
      permanent: true,
    },
    {
      source: "/tabs",
      destination: "/docs/disclosure/tabs",
      permanent: true,
    },
    {
      source: "/text",
      destination: "/docs/typography/text",
      permanent: true,
    },
  ]
}

module.exports = redirect
