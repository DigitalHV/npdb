/*
========================================================================
	Data From: 
	http://www.irs.gov/Charities-&-Non-Profits/Exempt-Organizations-Business-Master-File-Extract-EO-BMF

	Schema From:
	http://www.irs.gov/pub/irs-soi/eo_info.pdf

	EIN 				= (mandatory) (9-digit number) Employer Identification Nymber
	NAME 				= (mandatory) (String) Primary Name of Org
	ICO 				= (optional) (String) In Care of Name
	STREET 				= (optional) Street Address
	CITY 				= (mandatory) City
	STATE 				= (mandatory) State
	ZIP 				= (mandatory) ZipCode
	GROUP  				= (optional) (4-digit number) Group Exemption Number, GEN
	SUBSECTION  		= Subsection Code
	AFFILIATION 		= Affiliation Code
	CLASSIFICATION 		= (mandatory) Classification Code(s)
	RULING 				= Ruling Date
	DEDUCTIBILITY 		= (mandatory) Deductibility Code
	FOUNDATION 			= Foundation Code
	ACTIVITY 			= Activity Codes
	ORGANIZATION 		= Organization Code
	STATUS 				= Exempt Organization Status Code
	TAX_PERIOD 			= Tax Period
	ASSET_CD 			= Asset Code
	INCOME_CD 			= Income Code
	FILING_REQ_CD 		= Filing Requirement Code
	PF_FILING_REQ_CD 	= PF Filing Requirement Code
	ACCT_PD 			= Accounting Period
	ASSET_AMT 			= Asset Amount
	INCOME_AMT 			= Income Amount (includes negative sign if amount is negative)
	REVENUE_AMT 		= Form 990 Revenue Amount (includes negative sign if amount is negative)
	NTEE_CD	 			= National Taxonomy of Exempt Entities (NTEE) Code
	SORT_NAME 			= Sort Name (Secondary Name Line) 
========================================================================
  Example Data -- Organization (FROM CSV)
	{
		EIN   				: 131846366,
		NAME  				: MARCH OF DIMES FOUNDATION,
		ICO  				: % DAVID HORN,
		STREET  			: 1275 MANARONECK AVE,
		CITY  				: WHITE PLAINS,
		STATE  				: NY,
		ZIP,	  			: 10605-0000,
		GROUP  				: 0000,
		SUBSECTION  		: 03,
		AFFILIATION 		: 3,
		CLASSIFICATION 		: 1000,
		RULING  			: 195009,
		DEDUCTIBILITY 		: 1, 
		FOUNDATION 			: 15,
		ACTIVITY 			: 179000000,
		ORGANIZATION 		: 1,
		STATUS 				: 01,
		TAX_PERIOD 			: 201412,
		ASSET_CD 			: 9,
		INCOME_CD 			: 9,
		FILING_REQ_CD 		: 01,
		PF_FILING_REQ_CD 	: 0,
		ACCT_PD 			: 12,
		ASSET_AMT 			: 139978215,
		INCOME_AMT 			: 239045161,
		REVENUE_AMT 		: 195886297,
		NTEE_CD 			: G200,
		SORT_NAME           : -
	},
	{
		EIN 		: 131853769,
		NAME 		: ST COLUMBANUS CHURCH,
		ICO 		:  ,
		STREET 		: 122 OREGON RD,
		CITY 		: CORTLANDT MNR,
		STATE 		: NY,
		ZIP 		: 10567-1232,
		GROUP   	: 0928,
		SUBSECTION 	: 03,
		AFFILIATION : 9,
		CLASSIFICATION 	: 1700,
		RULING  		: 194603,
		DEDUCTIBILITY 	: 0,
		FOUNDATION 		: 10,
		ACTIVITY 		: 000000000,
		ORGANIZATION 	: 5,
		STATUS  		: 01,
		TAX_PERIOD 		: ,
		ASSET_CD 		: 0,
		INCOME_CD 		: 0,
		FILING_REQ_CD 	: 06,
		PF_FILING_REQ_CD : 0,
		ACCT_PD 		: 03,
		ASSET_AMT 		: ,
		INCOME_AMT 		: ,
		REVENUE_AMT 	: ,
		NTEE_CD 		: ,
		SORT_NAME		:
	}
========================================================================
*/
Schemas.Address = new SimpleSchema({

  street: {
    type: String,
    max: 100,
    optional:true
  },

  city: {
    type: String,
    max: 50,
    optional:true
  },

  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/,
    optional:true
  },

  zip: {
    type: String,
    regEx: /^[0-9]{5}-[0-9]{4}$/,
    optional:true
  },

  country: {
  	type: String,
    optional:true,
    defaultValue: "United States"
  }
});

Schemas.Org = new SimpleSchema({

	_id :  {
		type: String, 
		optional: true
	},

	createdAt: {
		type: Date,
		optional: true, 
		denyUpdate: true,
		autoValue: function(){ 
			(this.isInsert) ? new Date() : this.unset() 
		}
	},

	// EIN : 131853769,
	ein 	: { 
		type 	: String, 
		optional: false
	},

	// NAME : ST COLUMBANUS CHURCH,
	name 	: { 
		type 	: String, 
		optional: false
	},

	// REGION mapping (manual)
	region 			: {
		type: String, 
		optional: true
	},

	fixture: {
		type: Boolean,
		optional: true
	},


	// ----- START PROFILE -------------
	// ICO :
	profile : {
		type: Object,
		optional: false
	},

	"profile.ico" 	: { 
		type 	: String, 
		optional: true
	},

	// address { STREET, CITY, STATE, ZIPCODE }
	"profile.address" : {
		type : Schemas.Address,
		optional: false
	},

	// GROUP : 0928 = 4 digit number
	"profile.group" 			: { 
		type: Number, 
		optional: false,
    	regEx: /\b\d{4}\b/,
	},

	// SUBSECTION : 03,
	"profile.subsection" 		: { 
		type: String, 
		optional: false
	},

	// AFFILIATION : 9,
	"profile.affiliation" 	: { 
		type: String, 
		optional: false,
		allowedValues : AllowedValues.Org.Affiliation
	},

	// CLASSIFICATION 	: 1700,
	"profile.classification" 	: { 
		type: [String], 
		optional: false,
		allowedValues : AllowedValues.Org.Classification
	},

	"profile.description" 	: { 
		type: [String], 
		optional: false
	},


	// RULING  		: 194603,
	// This is the month and year (YYYYMM) on a ruling or 
	// determination letter recognizing the organization's 
	// exempt status. 
	"profile.ruling" 			: { 
		type: Object,
		optional: false
	},
	"profile.ruling.year"  : { type: String, optional: false },
	"profile.ruling.month" : { type: String, optional: false },

	// DEDUCTIBILITY : 0,
	"profile.deductibility" 	: { 
		type: String, 
		optional: false, 
		allowedValues: AllowedValues.Org.Deductibility
	},

	// FOUNDATION : 10,
	"profile.foundation" 		: { 
		type: String, 
		optional: false,
		allowedValues: AllowedValues.Org.Foundation 
	},

	// ACTIVITY : 000000000,
	"profile.activity" 		: { 
		type: [String], 
		optional: false
	},

	// ORGANIZATION : 5,
	"profile.organization" 	: { 
		type: String, 
		optional: false,
		allowedValues: AllowedValues.Org.Organization
	},

	// STATUS : 01,
	"profile.status" 			: { 
		type: String, 
		optional: false
	},

	// TAX_PERIOD : ,
	"profile.taxPeriod" 		: { 
		type: String, 
		optional: true
	},

	// ASSET_CD : 0,
	"profile.assetCode"		: { 
		type: String, 
		optional: true
	},

	// INCOME_CD : 0,
	"profile.incomeCode"		: { 
		type: String, 
		optional: true
	},

	// FILING_REQ_CD : 06,
	"profile.filingReqCode" 	: { 
		type: String, 
		optional: true
	},

	// PF_FILING_REQ_CD : 0,
	"profile.pfFilingReqCode" 	: { 
		type: String, 
		optional: true
	},

	// ACCT_PD : 03,
	"profile.acctPD" 			: { 
		type: String, 
		optional: true
	},

	// ASSET_AMT : ,
	"profile.assetAmt" 		: { 
		type: Number, 
		optional: true
	},

	// INCOME_AMT : ,
	"profile.incomeAmt" 		: { 
		type: Number, 
		optional: true
	},

	// REVENUE_AMT : ,
	"profile.revenueAmt" 		: { 
		type: Number, 
		optional: true
	},

	// NTEE_CD : ,
	"profile.nteeCode"		: { 
		type: String, 
		optional: false
	},

	// SORT_NAME :
	"profile.sortName" 		: { 
		type: String, 
		optional: true
	}
	// ----- ENDPROFILE -------------

});

Orgs = new Mongo.Collection("orgs");
Orgs.attachSchema(Schemas.Org, {transform: true});


/*
========================================================================
METHODS
========================================================================
*/
Methods.getClassification = function(subCode, classCode){
	if (subCode && classCode){
		var key = ""+subCode+classCode, 
			desc = Descriptions[key];
		return  desc || "Unknown";
	}
};

/*
========================================================================
HELPER METHODS
To use these methods, the data object must be transformed first
This happens automatically for objects from queries
If you manually create object "doc", use Orgs._transform(doc)
========================================================================
*/
Orgs.helpers({
  cause: function() {
    return Causes.findOne({ symbol: this.nteeCode});
  }
});