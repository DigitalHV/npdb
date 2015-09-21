/*
========================================================================
CAUSE Schema
  _id         = "cause_ntee" string, uniquely identifies cause
  createdAt   = database insertion date
  symbol      = ntee code
  label       = ntee code description
  category    = ntee parent category description (A - Z)

  description = 

========================================================================
    "_id"     : "ntee_X50",
  "symbol"    : "X50",
  "label"     : "Buddhist",
  "name"      : "Religion",
  "category"  : "Religion-Related, Spiritual Development",
  "createdAt" : ISODate("2015-09-20T11:56:40.878Z")
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
  keywords    : [ String ]

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
    optional:false
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

  keywords: {
  	type: [String],
  	optional: true
  }

});

Causes = new Mongo.Collection("causes");
Causes.attachSchema(Schemas.Cause, {transform: true});
