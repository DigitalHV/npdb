Package.describe({
  name: 'nitya:exempt-orgs',
  version: '0.1.0',
  documentation: null,
  summary: 'Exempt Orgs Data Models (IRS)',
  git: 'https://github.com/DigitalHV/npdb.git'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  // Add 3rd party package dependencies
  var packages = [
    'mongo',
    'underscore',
    'aldeed:simple-schema@1.3.3',
    'aldeed:collection2@2.3.3',
    'dburles:collection-helpers@1.0.3'
  ];
  api.use(packages);
  api.imply(packages);

  // Add common files
  api.addFiles([

    'lib/namespace.js',
    'lib/utils.js',

    'lib/values/causes.js',
    'lib/values/orgs.js',

    'lib/models/causes.js',
    'lib/models/orgs.js'

  ], ['client','server']);



  // Add server-side files
  api.addFiles([

    'lib/server/fixtures.js',
    'lib/server/publications.js'
    
  ], ['server']);

  // Add asset files explicitly for server access
  // For now, since I have a fixed set of files, 
  // opted to spell them out but TODO: make this a 
  // function to recursively walk directories
  //
  // See: 
  //  http://stackoverflow.com/a/20794116/586086
  //  https://github.com/mizzao/meteor-sharejs/blob/master/sharejs-ace/package.js
  // for example function and usage
  //
  api.addFiles([
    'assets/causes.tsv',

    'assets/eo/1/eo1_aa.csv',
    'assets/eo/1/eo1_ab.csv',
    'assets/eo/1/eo1_ac.csv',
    'assets/eo/1/eo1_ad.csv',
    'assets/eo/1/eo1_ae.csv',
    'assets/eo/1/eo1_af.csv',
    'assets/eo/1/eo1_ah.csv',
    'assets/eo/1/eo1_ai.csv',
    'assets/eo/1/eo1_aj.csv',
    'assets/eo/1/eo1_ak.csv',
    'assets/eo/1/eo1_al.csv',

    'assets/eo/2/eo2_aa.csv',
    'assets/eo/2/eo2_ab.csv',
    'assets/eo/2/eo2_ac.csv',
    'assets/eo/2/eo2_ad.csv',
    'assets/eo/2/eo2_ae.csv',
    'assets/eo/2/eo2_af.csv',
    'assets/eo/2/eo2_ag.csv',
    'assets/eo/2/eo2_ah.csv',
    'assets/eo/2/eo2_ai.csv',
    'assets/eo/2/eo2_aj.csv',
    'assets/eo/2/eo2_ak.csv',
    'assets/eo/2/eo2_al.csv',
    'assets/eo/2/eo2_am.csv',
    'assets/eo/2/eo2_an.csv',
    'assets/eo/2/eo2_ao.csv',
    'assets/eo/2/eo2_ap.csv',
    'assets/eo/2/eo2_aq.csv',
    'assets/eo/2/eo2_ar.csv',
    'assets/eo/2/eo2_as.csv',
    'assets/eo/2/eo2_at.csv',
    'assets/eo/2/eo2_au.csv',
    'assets/eo/2/eo2_av.csv',
    'assets/eo/2/eo2_aw.csv',
    'assets/eo/2/eo2_ax.csv',
    'assets/eo/2/eo2_ay.csv',
    'assets/eo/2/eo2_az.csv',
    'assets/eo/2/eo2_ba.csv',
    'assets/eo/2/eo2_bb.csv',
    'assets/eo/2/eo2_bc.csv',
    'assets/eo/2/eo2_bd.csv',

    'assets/eo/3/eo3_aa.csv',
    'assets/eo/3/eo3_ab.csv',
    'assets/eo/3/eo3_ac.csv',
    'assets/eo/3/eo3_ad.csv',
    'assets/eo/3/eo3_ae.csv',
    'assets/eo/3/eo3_af.csv',
    'assets/eo/3/eo3_ag.csv',
    'assets/eo/3/eo3_ah.csv',
    'assets/eo/3/eo3_ai.csv',
    'assets/eo/3/eo3_aj.csv',
    'assets/eo/3/eo3_ak.csv',
    'assets/eo/3/eo3_al.csv',
    'assets/eo/3/eo3_am.csv',
    'assets/eo/3/eo3_an.csv',
    'assets/eo/3/eo3_ao.csv',
    'assets/eo/3/eo3_ap.csv',
    'assets/eo/3/eo3_aq.csv',
    'assets/eo/3/eo3_ar.csv',
    'assets/eo/3/eo3_as.csv',
    'assets/eo/3/eo3_at.csv',
    'assets/eo/3/eo3_au.csv',
    'assets/eo/3/eo3_av.csv',
    'assets/eo/3/eo3_aw.csv',
    'assets/eo/3/eo3_ax.csv',
    'assets/eo/3/eo3_ay.csv',
    'assets/eo/3/eo3_az.csv',
    'assets/eo/3/eo3_ba.csv',
    'assets/eo/3/eo3_bb.csv',
    'assets/eo/3/eo3_bc.csv',
    'assets/eo/3/eo3_bd.csv',
    'assets/eo/3/eo3_be.csv',
    'assets/eo/3/eo3_bf.csv',
    'assets/eo/3/eo3_bg.csv',
    'assets/eo/3/eo3_bh.csv',
    'assets/eo/3/eo3_bi.csv',
    'assets/eo/3/eo3_bj.csv',

    'assets/eo/4/eo4_aa.csv'
  ],'server', { isAsset: true });


  // Export Models and Schemas for external access
  api.export([
    'Schemas',
    'AllowedValues',
    'Methods',
    'Utils',

    'Orgs',
    'Causes',
  ]);



});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.18.0');
  api.use('nitya:exempt-orgs');
  api.addFiles([
    'tests/models-orgs-spec.js'
  ],['client','server']);
});
