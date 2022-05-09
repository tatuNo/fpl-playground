import { createMedia } from '@artsy/fresnel';

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export {
  Media,
  MediaContextProvider,
};
