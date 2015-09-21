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


AllowedValues.Cause.Category = [
	/* A */ "Arts, Culture and Humanities",
	/* B */ "Educational Institutions and Related Activities",
	/* C */ "Environmental Quality, Protection and Beautification",
	/* D */ "Animal-Related",
	/* E */ "Health – General and Rehabilitative",
	/* F */ "Mental Health, Crisis Intervention",
	/* G */ "Diseases, Disorders, Medical Disciplines",
	/* H */ "Medical Research",
	/* I */ "Crime, Legal-Related",
	/* J */ "Employment, Job-Related",
	/* K */ "Food, Agriculture and Nutrition",
	/* L */ "Housing, Shelter",
	/* M */ "Public Safety, Disaster Preparedness and Relief",
	/* N */ "Recreation, Sports, Leisure, Athletics",
	/* O */ "Youth Development",
	/* P */ "Human Services – Multipurpose and Other",
	/* Q */ "International, Foreign Affairs and National Security",
	/* R */ "Civil Rights, Social Action, Advocacy",
	/* S */ "Community Improvement, Capacity Building",
	/* T */ "Philanthropy, Voluntarism and Grantmaking Foundations",
	/* U */ "Science and Technology Research Institutes, Services",
	/* V */ "Social Science Research Institutes, Services",
	/* W */ "Public, Society Benefit – Multipurpose and Other",
	/* X */ "Religion-Related, Spiritual Development",
	/* Y */ "Mutual/Membership Benefit Organizations, Other",
	/* Z */ "Unknown"
];