define({
  useLoader: {
    'host-node': 'requirejs',
    'host-browser': '/node_modules/requirejs/require.js'
  },
  loader: {
    packages: [
      {
        name: 'hogan',
        location: 'node_modules/hogan.js/dist',
        main: 'hogan-3.0.2.min.amd'
      }
    ],
    paths: {
      // TODO
    }
  },
  suites: ['tests/app'],
  excludeInstrumentation: /^(?:tests|node_modules)\//
});
