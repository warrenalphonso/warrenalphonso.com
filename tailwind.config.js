module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  // To stop conflicting with Typography.js I think
  corePlugins: {
    preflight: false,
  },
}
