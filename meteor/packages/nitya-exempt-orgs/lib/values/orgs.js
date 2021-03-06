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

 TODO:
 Classification Code "9" is used in data but not defined in spec
 Added it to valid values for checks, but need to confirm desc
========================================================================
*/
AllowedValues.Org.Subsection = [
	"01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
	"20", "21", "22", "23", "24", "25", "26", "27", "29", "40", "50", "60", "70", "71", "81", "92"
];


AllowedValues.Org.Classification = [
	"1","2","3","4","5","6","7","8", "9"
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
