AllowedValues.Org = {};

/*
========================================================================
AFFILIATION CODES

0 Used for cases where Affiliation Code is not defined

1 	Central - This code is used if the organization is a central type organization (no group exemption) of a National,
	Regional or Geographic grouping of organizations.
2 	Intermediate - This code is used if the organization is an intermediate organization (no group exemption) of a
	National, Regional or Geographic grouping of organizations (such as a state headquarters of a national
	organization).
3 	Independent - This code is used if the organization is an independent organization or an independent auxiliary 
	(i.e., not affiliated with a National, Regional, or Geographic grouping of organizations).
6 	Central - This code is used if the organization is a parent (group ruling) and is not a church or 501(c)(1)
	organization.
7 	Intermediate - This code is used if the organization is a group exemption intermediate organization of a National,
	Regional or Geographic grouping of organizations.
8 	Central - This code is used if the organization is a parent (group ruling) and is a church or 501(c)(1) organization.
9 	Subordinate - This code is used if the organization is a subordinate in a group ruling. 
========================================================================
*/
AllowedValues.Org.Affiliation = [ "0", "1", "2", "3", "6", "7", "8", "9"];

/*
========================================================================
DEDUCTIBILITY CODE

0 Used for cases where Deductibility Code is not defined

1 Contributions are deductible.
2 Contributions are not deductible.
4 Contributions are deductible by treaty (foreign organizations). 
========================================================================
*/
AllowedValues.Org.Deductibility = [ "0", "1", "2", "4"];


/*
========================================================================
FOUNDATION CODE

00 	All organizations except 501(c)(3)
02 	Private operating foundation exempt from paying excise taxes on investment income
03 	Private operating foundation (other)
04 	Private non-operating foundation
09 	Suspense
10 	Church 170(b)(1)(A)(i)
11 	School 170(b)(1)(A)(ii)
12 	Hospital or medical research organization 170(b)(1)(A)(iii)
13 	Organization which operates for benefit of college or university and is owned or operated by a governmental
unit 170(b)(1)(A)(iv)
14 	Governmental unit 170(b)(1)(A)(v)
15 	Organization which receives a substantial part of its support from a governmental unit or the general public
170(b)(1)(A)(vi)
16 	Organization that normally receives no more than one-third of its support from gross investment income and
unrelated business income and at the same time more than one-third of its support from
contributions, fees, and gross receipts related to exempt purposes. 509(a)(2)
17 	Organizations operated solely for the benefit of and in conjunction with organizations described in 10 through
16 above. 509(a)(3)
18 	Organization organized and operated to test for public safety 509(a)(4)
21 	509(a)(3) Type I
22 	509(a)(3) Type II 
23 	509(a)(3) Type III functionally integrated
24 	509(a)(3) Type III not functionally integrated 

========================================================================
*/
AllowedValues.Org.Foundation = [ 
	"00", "02", "03", "04", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "21", "22", "23", "24"
];


/*
========================================================================
ORGANIZATION CODE

0 Used for cases where Organization Code is not defined

1 Corporation
2 Trust
3 Co-operative
4 Partnership
5 Association

6 Added to support error. Type unknown TODO: Check type
========================================================================
*/
AllowedValues.Org.Organization = [
	"0", "1", "2", "3", "4", "5", "6"
];

/*
========================================================================
EXEMPT ORGANIZATION STATUS CODE

01 Unconditional Exemption
02 Conditional Exemption
12 Trust described in section 4947(a)(2) of the IR Code
25 Organization terminating its private foundation status under section 507(b)(1)(B) of the Code 
========================================================================
*/
AllowedValues.Org.Status = [
	"01", "02", "12", "25"
];


/*
========================================================================
ASSET CODE/INCOME CODE 

0 0
1 1 to 9,999
2 10,000 to 24,999
3 25,000 to 99,999
4 100,000 to 499,999
5 500,000 to 999,999
6 1,000,000 to 4,999,999
7 5,000,000 to 9,999,999
8 10,000,000 to 49,999,999
9 50,000,000 to greater 
========================================================================
*/
AllowedValues.Org.AssetIncomeCode = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

/*
========================================================================
Region 1: Northeast Area 
Includes Maine, New Hampshire, Vermont, Massachusetts, Rhode Island, Connecticut, New
York, New Jersey

Region 2: Mid-Atlantic and Great Lakes Area 
Includes Pennsylvania, Ohio, West Virginia, District of Columbia, Maryland,
Delaware, Virginia, North Carolina, South Carolina, Michigan, Kentucky, Indiana, Illinois, Wisconsin, Minnesota, Iowa,
Nebraska, South Dakota, North Dakota.

Region 3: Gulf Coast and Pacific Coast Area 
Includes Tennessee, Georgia, Florida, Alabama, Mississippi, Missouri,
Arkansas, Louisiana, Texas, Oklahoma, Kansas, Montana, Wyoming, Colorado, New Mexico, Arizona, Utah, Nevada,
Idaho, California, Oregon, Washington, Alaska, Hawaii

Region 4: All Other Areas
Includes International and all others. 
========================================================================
*/
AllowedValues.Org.Region = [
	"1-Northeast", 
	"2-Mid-Atlantic",
	"3-Gulf/Pacific Coast", 
	"4-Other"
];


/*
========================================================================
 Subsection  	Classification 		Description
 Code 			Code

 01 1 Government Instrumentality
 02 1 Title-Holding Corporation
 03 1 Charitable Organization
 03 2 Educational Organization
 03 3 Literary Organization
 03 4 Organization to Prevent Cruelty to Animals
 03 5 Organization to Prevent Cruelty to Children
 03 6 Organization for Public Safety Testing
 03 7 Religious Organization
 03 8 Scientific Organization
 04 1 Civic League
 04 2 Local Association of Employees
 04 3 Social Welfare Organization
 05 1 Agricultural Organization
 05 2 Horticultural Organization
 05 3 Labor Organization
 06 1 Board of Trade
 06 2 Business League
 06 3 Chamber of Commerce
 06 4 Real Estate Board
 07 1 Pleasure, Recreational, or Social Club
 08 1 Fraternal Beneficiary Society, Order or Association
 09 1 Voluntary Employees' Beneficiary Association (Non-Govt. Emps.)
 09 2 Voluntary Employees' Beneficiary Association (Govt. Emps.)
 10 1 Domestic Fraternal Societies and Associations
 11 1 Teachers Retirement Fund Assoc.
 12 1 Benevolent Life Insurance Assoc.
 12 2 Mutual Ditch or Irrigation Co.
 12 3 Mutual Cooperative Telephone Co.
 12 4 Organization Like Those on Three Preceding Lines
 13 1 Burial Association
 13 2 Cemetery Company 
 14 1 Credit Union
 14 2 Other Mutual Corp. or Assoc.
 15 1 Mutual Insurance Company or Assoc. Other Than Life or Marine
 16 1 Corp. Financing Crop Operations
 17 1 Supplemental Unemployment Compensation Trust or Plan
 18 1 Employee Funded Pension Trust (Created Before 6/25/59)
 19 1 Post or Organization of War Veterans
 20 1 Legal Service Organization
 21 1 Black Lung Trust
 22 1 Multiemployer Pension Plan
 23 1 Veterans Assoc. Formed Prior to 1880
 24 1 Trust Described in Sect. 4049 of ERISA
 25 1 Title Holding Co. for Pensions, etc.
 26 1 State-Sponsored High Risk Health Insurance Organizations
 27 1 State-Sponsored Workers' Compensation Reinsurance
 29 1 ACA 1322 Qualified Nonprofit Health Insurance Issuers
 40 1 Apostolic and Religious Org. (501(d))
 50 1 Cooperative Hospital Service Organization (501(e))
 60 1 Cooperative Service Organization of Operating Educational Organization (501(f))
 70 1 Child Care Organization (501(k))
 71 1 Charitable Risk Pool
 81 1 Qualified State-Sponsored Tuition Program
 92 1 4947(a)(1) - Private Foundation (Form 990PF Filer) 

 Anywhere from 1 to 4 classification codes can be specified
========================================================================
*/
AllowedValues.Org.Subsection = [
	"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
	"20", "21", "22", "23", "24", "25", "26", "27", "29", "40", "50", "60", "70", "71", "81", "92"
];


AllowedValues.Org.Classification = [
	"1","2","3","4","5","6","7","8"
];


Descriptions = {
 "011" : "Government Instrumentality",
 "021" : "Title-Holding Corporation",
 "031" : "Charitable Organization",
 "032" : "Educational Organization",
 "033" : "Literary Organization",
 "034" : "Organization to Prevent Cruelty to Animals",
 "035" : "Organization to Prevent Cruelty to Children",
 "036" : "Organization for Public Safety Testing",
 "037" : "Religious Organization",
 "038" : "Scientific Organization",
 "041" : "Civic League",
 "042" : "Local Association of Employees",
 "043" : "Social Welfare Organization",
 "051" : "Agricultural Organization",
 "052" : "Horticultural Organization",
 "053" : "Labor Organization",
 "061" : "Board of Trade",
 "062" : "Business League",
 "063" : "Chamber of Commerce",
 "064" : "Real Estate Board",
 "071" : "Pleasure, Recreational, or Social Club",
 "081" : "Fraternal Beneficiary Society, Order or Association",
 "091" : "Voluntary Employees' Beneficiary Association (Non-Govt. Emps.)",
 "092" : "Voluntary Employees' Beneficiary Association (Govt. Emps.)",
 "101" : "Domestic Fraternal Societies and Associations",
 "111" : "Teachers Retirement Fund Assoc.",
 "121" : "Benevolent Life Insurance Assoc.",
 "122" : "Mutual Ditch or Irrigation Co.",
 "123" : "Mutual Cooperative Telephone Co.",
 "124" : "Organization Like Those on Three Preceding Lines",
 "131" : "Burial Association",
 "132" : "Cemetery Company ",
 "141" : "Credit Union",
 "142" : "Other Mutual Corp. or Assoc.",
 "151" : "Mutual Insurance Company or Assoc. Other Than Life or Marine",
 "161" : "Corp. Financing Crop Operations",
 "171" : "Supplemental Unemployment Compensation Trust or Plan",
 "181" : "Employee Funded Pension Trust (Created Before 6/25/59)",
 "191" : "Post or Organization of War Veterans",
 "201" : "Legal Service Organization",
 "211" : "Black Lung Trust",
 "221" : "Multiemployer Pension Plan",
 "231" : "Veterans Assoc. Formed Prior to 1880",
 "241" : "Trust Described in Sect. 4049 of ERISA",
 "251" : "Title Holding Co. for Pensions, etc.",
 "261" : "State-Sponsored High Risk Health Insurance Organizations",
 "271" : "State-Sponsored Workers' Compensation Reinsurance",
 "291" : "ACA 1322 Qualified Nonprofit Health Insurance Issuers",
 "401" : "Apostolic and Religious Org. (501(d))",
 "501" : "Cooperative Hospital Service Organization (501(e))",
 "601" : "Cooperative Service Organization of Operating Educational Organization (501(f))",
 "701" : "Child Care Organization (501(k))",
 "711" : "Charitable Risk Pool",
 "811" : "Qualified State-Sponsored Tuition Program",
 "921" : "4947(a)(1) - Private Foundation (Form 990PF Filer)" 
};

Methods.getClassification = function(subCode, classCode){
	if (subCode && classCode){
		var key = ""+subCode+classCode, 
			desc = Descriptions[key];
		return  desc || "Unknown";
	}
}

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
		autoValue: function(){ (this.isInsert) ? new Date() : this.unset() }
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

	// ICO :
	ico 	: { 
		type 	: String, 
		optional: true
	},

	// address { STREET, CITY, STATE, ZIPCODE }
	address: {
		type : Schemas.Address,
		optional: false
	},

	// GROUP : 0928 = 4 digit number
	group 			: { 
		type: Number, 
		optional: false,
    	regEx: /\b\d{4}\b/,
	},

	// SUBSECTION : 03,
	subsection 		: { 
		type: String, 
		optional: false
	},

	// AFFILIATION : 9,
	affiliation 	: { 
		type: String, 
		optional: false,
		allowedValues : AllowedValues.Org.Affiliation
	},

	// CLASSIFICATION 	: 1700,
	classification 	: { 
		type: [String], 
		optional: false,
		allowedValues : AllowedValues.Org.Classification
	},

	description 	: { 
		type: [String], 
		optional: false
	},


	// RULING  		: 194603,
	// This is the month and year (YYYYMM) on a ruling or 
	// determination letter recognizing the organization's 
	// exempt status. 
	ruling 			: { 
		type: Object,
		optional: false
	},
	"ruling.year"  : { type: String, optional: false },
	"ruling.month" : { type: String, optional: false },

	// DEDUCTIBILITY : 0,
	deductibility 	: { 
		type: String, 
		optional: false, 
		allowedValues: AllowedValues.Org.Deductibility
	},

	// FOUNDATION : 10,
	foundation 		: { 
		type: String, 
		optional: false,
		allowedValues: AllowedValues.Org.Foundation 
	},

	// ACTIVITY : 000000000,
	activity 		: { 
		type: [String], 
		optional: false
	},

	// ORGANIZATION : 5,
	organization 	: { 
		type: String, 
		optional: false,
		allowedValues: AllowedValues.Org.Organization
	},

	// STATUS : 01,
	status 			: { 
		type: String, 
		optional: false
	},

	// TAX_PERIOD : ,
	taxPeriod 		: { 
		type: String, 
		optional: true
	},

	// ASSET_CD : 0,
	assetCode		: { 
		type: String, 
		optional: true
	},

	// INCOME_CD : 0,
	incomeCode		: { 
		type: String, 
		optional: true
	},

	// FILING_REQ_CD : 06,
	filingReqCode 	: { 
		type: String, 
		optional: true
	},

	// PF_FILING_REQ_CD : 0,
	pfFilingReqCode 	: { 
		type: String, 
		optional: true
	},

	// ACCT_PD : 03,
	acctPD 			: { 
		type: String, 
		optional: true
	},

	// ASSET_AMT : ,
	assetAmt 		: { 
		type: Number, 
		optional: true
	},

	// INCOME_AMT : ,
	incomeAmt 		: { 
		type: Number, 
		optional: true
	},

	// REVENUE_AMT : ,
	revenueAmt 		: { 
		type: Number, 
		optional: true
	},

	// NTEE_CD : ,
	nteeCode		: { 
		type: String, 
		optional: false
	},

	// SORT_NAME :
	sortName 		: { 
		type: String, 
		optional: true
	},

	// REGION mapping (manual)
	region 			: {
		type: String, 
		optional: true
	},

	fixture: {
		type: Boolean,
		optional: true
	}
});

Orgs = new Mongo.Collection("orgs");
Orgs.attachSchema(Schemas.Org, {transform: true});