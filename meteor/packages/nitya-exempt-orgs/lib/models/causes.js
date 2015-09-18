AllowedValues.Cause = {};
/*
========================================================================
CAUSE Name

IRS data provides standard NTEE codes for each organization.

NTEE codes have standard descriptions and categories. In the custom schema
we also map these codes onto a set of standard "names" which are effectively
simpler forms of the categories and useful for icons or searches.
Reference:
http://nccsweb.urban.org/PubApps/nteeSearch.php?gQry=all&codeType=NTEE

Each NTEE code maps to a single CAUSE name.
A CAUSE name can have many NTEE codes mapped to it.


NPC Classification: 
http://nccs.urban.org/classification/NPC.cfm

NTEE Classification:
http://nccs.urban.org/classification/NTEE.cfm

Orgs for Classification
http://nccsweb.urban.org/PubApps/showOrgsByCategory.php?close=1&ntee=A01

Orgs by EIN (ex: for ein=203814839)
http://nccsweb.urban.org/communityplatform/nccs/organization/profile/id/203814839/

========================================================================
*/
AllowedValues.Cause.Name = [ 
	"Arts",
	"Education",
	"Environment",
	"Animals",
	"Health",
	"Crisis Intervention",
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

  _id     : {
    type  : String, 
    optional: true
  },

  createdAt : {
    type  : Date, 
    optional: true, 
    denyUpdate: true,
    autoValue: function(){ (this.isInsert) ? new Date() : this.unset() }
  },

  media : {
    type : Object,
    optional: true
  },
  "media.ref" : {
    type : String,
    optional : false
  },
  "media.isLink" : {
    type : Boolean,
    optional: false
  },
  
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

  scope: {
    type: String,
    optional:true
  },

  description: {
    type: String,
    optional:true
  },

  keywords: {
  	type: [String],
  	optional: true
  },

  category: {
    type: String,
    optional:false
  }

});

Causes = new Mongo.Collection("causes");
Causes.attachSchema(Schemas.Cause, {transform: true});
