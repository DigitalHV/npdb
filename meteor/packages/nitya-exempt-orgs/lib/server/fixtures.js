/*

EIN,NAME,ICO,STREET,CITY,STATE,ZIP,GROUP,SUBSECTION,
AFFILIATION,CLASSIFICATION,RULING,DEDUCTIBILITY,FOUNDATION,
ACTIVITY,ORGANIZATION,STATUS,TAX_PERIOD,ASSET_CD,INCOME_CD,
FILING_REQ_CD,PF_FILING_REQ_CD,ACCT_PD,ASSET_AMT,INCOME_AMT,
REVENUE_AMT,NTEE_CD,SORT_NAME

========================================================================
Initialize from Fixtures
========================================================================
  {
    EIN           : 131846366,
    NAME          : MARCH OF DIMES FOUNDATION,
    ICO         : % DAVID HORN,
    STREET        : 1275 MANARONECK AVE,
    CITY          : WHITE PLAINS,
    STATE         : NY,
    ZIP,          : 10605-0000,
    GROUP         : 0000,
    SUBSECTION      : 03,
    AFFILIATION     : 3,
    CLASSIFICATION    : 1000,
    RULING        : 195009,
    DEDUCTIBILITY     : 1, 
    FOUNDATION      : 15,
    ACTIVITY      : 179000000,
    ORGANIZATION    : 1,
    STATUS        : 01,
    TAX_PERIOD      : 201412,
    ASSET_CD      : 9,
    INCOME_CD       : 9,
    FILING_REQ_CD     : 01,
    PF_FILING_REQ_CD  : 0,
    ACCT_PD       : 12,
    ASSET_AMT       : 139978215,
    INCOME_AMT      : 239045161,
    REVENUE_AMT     : 195886297,
    NTEE_CD       : G200,
    SORT_NAME           : -
  },
*/

var getClassification = function(data){
  var classification = [], bit=null;
  for (var i=0; i<4; i++){
    bit = data.substring(i,i+1)
    if (bit!=="" && bit!=="0")
      classification.push(bit);
  }
  return classification;
};

var getDescription = function(data, subcode){
  var desc = [];
  for (var i=0; i<data.length; i++){
    desc.push(Methods.getClassification(subcode, data[i]));
  }
  return desc;
};

var parseRecord = function (record, region){
  var data = record.split(","),
      org = {
        ein       : data[0],
        name      : data[1],
        ico       : data[2],
        address   : {
          street  : data[3],
          city    : data[4],
          state   : data[5],
          zip     : data[6]
        },
        group       : parseInt(data[7]),
        subsection  : data[8],
        affiliation : data[9],
        classification: getClassification(data[10]),
        ruling      : {
          year: data[11].substring(0,4),
          month: data[11].substring(4,6),
        },
        deductibility: data[12],
        foundation  : data[13],
        activity    : [
          data[14].substring(0,3),
          data[14].substring(3,6),
          data[14].substring(6,9)
        ],
        organization: data[15],
        status      : data[16],
        taxPeriod   : data[17],
        assetCode   : data[18],
        incomeCode  : data[19],
        filingReqCode   : data[20],
        pfFilingReqCode : data[21],
        acctPD      : data[22],
        assetAmt    : parseInt("0"||data[23]),
        incomeAmt   : parseInt("0"||data[24]),
        revenueAmt  : parseInt("0"||data[25]),
        nteeCode    : data[26] || "Z99",
        sortName    : data[27],
      };
  org.description = getDescription(org.classification,org.subsection);
  org.region = AllowedValues.Org.Region[(region||5)-1];
  return org;
};



/*
========================================================================
LOAD FIXTURE DATA
========================================================================
*/
var errCount=0;

Methods.loadOrgFixtures = function(){
  console.log("Loading org fixtures..");
  errCount=0;

  // Copied from package.js
  // TODO: Make this a function that walks directories instead
  var 
  region1 = [
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
    'assets/eo/1/eo1_al.csv'
  ],
  region2 = [
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
    'assets/eo/2/eo2_bd.csv'
  ],
  region3 = [
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
    'assets/eo/3/eo3_bj.csv'
  ],
  region4 = [
    'assets/eo/4/eo4_aa.csv',
  ];

  _.each(region1, function(file){ 
    loadOrgAsset(file,1);
  });

  _.each(region2, function(file){
    loadOrgAsset(file,2);
  });

  _.each(region3, function(file){
    loadOrgAsset(file,3);
  });

  /*
  
   * LEAVING OUT REGION 4
   *  These are addresses outside USA and will not validate
   *  given our address schema constraint
   *

  _.each(region4, function(file){
    loadOrgAsset(file,4);
  });
  */

  return errCount;
};

var loadOrgAsset = function(asset, region){
  Assets.getText(asset, function(err, res){
    if (err){
      console.log("*Error*: Loading data for Region "+region+" from "+asset);
      return;
    }

    console.log("Success: Loading data for Region "+region+"  from "+asset);
    var data = res.split('\r\n'),
        org = null;

    // skip first row as header
    _.each(data, function(record, index){

      try { 
        org = parseRecord(record,region);  
      } 
      catch(err){
        console.log("[Parse Error] Region="+region+",  EIN="+ org.ein +", desc=" + org.description);
        return;
      }

      try { 
        check(org, Schemas.Org); 
      }
      catch(err){
        errCount++;
        console.log("[Validation Error] err="+err+", org=",org);
        //return;
      }

      org.fixture = true;
      Orgs.insert(org);
    });
  });
};

Methods.loadCauseFixtures = function(asset){
  Assets.getText(asset, function(err,res){
    if (err){
      console.log("*Error*: Loading causes data from "+asset);
      return;
    }

    console.log("Success: Loading causes data from "+asset);
    var data = res.split('\r\n');

    var cause=null,item=null;
    _.each(data, function(record, index){
      item = record.split("\t");
      cause = {
        symbol : item[0],
        label  : item[1],
        name   : item[2],
        category: item[3]
      };
      //console.log("Cause: ",cause);

      check(cause, Schemas.Cause);
      cause._id = "ntee_"+item[0];
      cause.createdAt = new Date();
      Causes.insert(cause);
    })
  });
};


/*
========================================================================
STARTING POINT
========================================================================
*/

Meteor.startup(function(){

  console.log("Clearing Orgs fixtures");
  Causes.remove({});
  Orgs.remove({ fixture:true });

  console.log("Adding Causes fixtures");
  Methods.loadCauseFixtures('assets/causes.tsv');

  console.log("Adding Orgs fixtures");
  var errs = Methods.loadOrgFixtures();
  console.log("Err Count="+errs);


});


