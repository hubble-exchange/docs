export default defineAppConfig({
  docus: {
    title: "Hubble Exchange",
    description: "The best place to learn/read about Hubble Exchange",
    url: "https://docs.hubble.exchange",
    image: "/hubble-exchange-docs-meta.png",
    socials: {
      twitter: "HubbleExchange",
      github: "hubble-exchange",
    },
    header: {
      title: "Hubble Exchange",
      logo: true, // TODO: handle logo as string for component
      showLinkIcon: false, // Toggle links icons in the header
      exclude: ["/docs", "/faq"],
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    footer: {
      credits: false,
      iconLinks: [
        {
          href: "https://hubble.exchange",
          icon: "gg:website",
        },
        {
          href: "https://app.hubble.exchange",
          icon: "carbon:application-web",
        },
        {
          href: "https://youtube.com/channel/UCgQ2qipdeAtI9_hGd9_HzrQ",
          icon: "mdi:youtube",
        },
        {
          href: "https://medium.com/hubbleexchange",
          icon: "ant-design:medium-square-filled",
        },
      ],
    },
  },
});
