/*
========================================================================
NTEE Schema  = National Taxonomy of Exempt Entities
http://nccsweb.urban.org/PubApps/nteeSearch.php?gQry=all&codeType=NTEE

NAICS Classification = North American Industry Classification System
http://www.census.gov/eos/www/naics/

CAUSE Schema
  _id         = "cause_ntee" string, uniquely identifies cause
  createdAt   = database insertion date
  symbol      = ntee code
  label       = ntee code description
  category    = ntee parent category description (A - Z)
  name        = cheerity display name 

  scope       = scope from NTEE Schema
  description = description from NTEE Schema
  tags        = keywords from NTEE Schema
  naics       = NAICS code from NTEE Schema
  media       {
    ref       = can be direct URL or indirect ID (to Media object in DB)
    isLink    = true if URL, false if ID
  }
========================================================================{
  "_id"     : "ntee_A01",
  "symbol"  : "A01",
  "label"   : "Alliance/Advocacy Organizations",
  "name"    : "Arts",
  "category" : "Arts, Culture and Humanities",
  "media"   : null,
  "tags"    : null,
  "description" : null,
  "naics"   : null,
  "scope"   : null,
  "createdAt" : ISODate("2015-09-22T13:56:35.684Z")
========================================================================
                            // auto-generated
  _id       : String      
  createdAt : Date 
                            // mandatory
  symbol    : String      
  label     : String
  name      : String 
  category  : String
                            // optional
  media     :
  {   
    ref     : String
    isLink  : Boolean
  },
  scope       : String
  description : String
  naics       : String
  tags        : [ String ]

========================================================================
*/

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
    optional:false,
    allowedValues: AllowedValues.Cause.Category
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
  
  scope: {
    type: String,
    optional:true
  },

  naics: {
    type: String,
    optional:true
  },

  description: {
    type: String,
    optional:true
  },

  tags: {
  	type: [String],
  	optional: true
  }

});

Causes = new Mongo.Collection("causes");
Causes.attachSchema(Schemas.Cause, {transform: true});
