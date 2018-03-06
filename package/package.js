Package.describe({
  name: 'icebrg82:reactive-obj',
  version: '0.5.1',
  summary: 'Reactivity for nested objects',
  git: 'https://github.com/brettg2/reactive-obj/tree/brettg2/delete',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.use(['underscore', 'tracker']);
  api.addFiles([
    'helpers.js',
    'array-methods.js',
    'reactive-obj.js',
    'cursor.js'
  ]);
  api.export('ReactiveObj');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('icebrg82:reactive-obj');
  api.addFiles('reactive-obj-tests.js');
});
