AllowedValues.Cause = {};
/*
========================================================================
CAUSE Name

IRS data provides standard NTEE codes for each organization.

NTEE codes have standard descriptions and categories. In the custom schema
we also map these codes onto a set of standard "names" which are effectively
simpler forms of the categories and useful for icons or searches.

Each NTEE code maps to a single CAUSE name.
A CAUSE name can have many NTEE codes mapped to it.

========================================================================
*/
AllowedValues.Cause.Name = [ 
	"Arts",
	"Education",
	"Environment",
	"Animals",
	"Health",
	"Crisis Intervention",
	"Medical Disciplines",
	"Medical Research",
	"Public Safety",
	"Employment",
	"Food",
	"Housing & Shelter",
	"Disaster Relief",
	"Sports",
	"Youth Services",
	"Human Services",
	"International Services",
	"Human Rights",
	"Community Improvement",
	"Philanthropy",
	"Science & Tech",
	"Social Science",
	"Science",
	"Religion",
	"Organizations",
	"Unknown"
];


Schemas.Cause= new SimpleSchema({
	
  symbol: {
    type: String,
    optional:false
  },

  label: {
    type: String,
    optional:false
  },

  name: {
    type: String,
    optional:false,
	allowedValues: AllowedValues.Cause.Name

  },

  category: {
    type: String,
    optional:false
  }
});

Causes = new Mongo.Collection("causes");
Causes.attachSchema(Schemas.Cause, {transform: true});
