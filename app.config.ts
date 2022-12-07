export default defineAppConfig({
  docus: {
    title: 'Hubble Exchange',
    description: 'The best place to learn/read about Hubble Exchange',
    url: 'https://docs.hubble.exchange',
    image: 'https://static.hubble.exchange/meta/hubble-exchange-docs.png',
    socials: {
      twitter: 'HubbleExchange',
      github: 'hubble-exchange',
    },
    header: { logo: true, showLinkIcon: true },
    aside: { level: 1, collapsed: true },
    footer: {
      iconLinks: [
        {
          href: 'https://hubble.exchange',
          icon: 'gg:website',
        },
        {
          href: 'https://app.hubble.exchange',
          icon: 'carbon:application-web',
        },
        {
          href: 'https://youtube.com/channel/UCgQ2qipdeAtI9_hGd9_HzrQ',
          icon: 'mdi:youtube',
        },
        {
          href: 'https://medium.com/hubbleexchange',
          icon: 'ant-design:medium-square-filled',
        },
      ],
    },
  },
})
