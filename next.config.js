
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['nkxPwe8B5UJeQ6M13gUCTC'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  