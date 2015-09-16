//========================================================================
describe('models:Org existence', function(){
  it ('has an Orgs collection', function(){
    expect(Orgs).toBeDefined();
  }),
  it ('has an Org schema', function(){
    expect(Schemas.Org).toBeDefined();
  })
});

//========================================================================
describe('Testing: insertOrg(obj) ', function(){
  var results, obj;

  it ('throws exception if obj is invalid', function(){
    // TODO: create invalid obj
    // TODO: invoke addOrg with obj
    // TODO: test for exception
  }),

  it ('inserts object and returns ID if obj is valid', function(){
    // TODO: clear collection (check count=0)
    // TODO: create valid obj
    // TODO: add Org obj to db
    // TODO: test collection count (should be 1)
    // TODO: retrieve that object 
    // TODO: check that it is equal to created obj
  })

});

//========================================================================
describe('Testing: updateOrg(obj) ', function(){
  var results, obj;

  it ('throws exception if obj is invalid', function(){
    // TODO: create invalid obj
    // TODO: invoke updateOrg with obj
    // TODO: test for exception
  }),

  it ('inserts obj if valid & not present in DB', function(){
    // TODO: create valid obj
    // TODO: clear collection (ensure obj is not present in DB)
    // TODO: call updateOrg with obj
    // TODO: test if collection count goes up (object added)
    // TODO: test if inserted object is same as local obj argument
  }),

  it ('updates obj if valid & already present in DB', function(){
    // TODO: create valid obj
    // TODO: clear collection (ensure obj is not present in DB)
    // TODO: insert object (ensure it pre exists)
    // TODO: now modify one value in local obj
    // TODO: call updateOrg with obj
    // TODO: test if updated object is same as local obj argument
  })

});

//========================================================================
describe('Testing: deleteOrg(obj) ', function(){
  var results, obj;

  it ('fails quietly if the obj is not present in DB', function(){
    // TODO: clear collection (object is absent)
    // TODO: create valid object
    // TODO: delete valid object from collection
  }),

  it ('deletes obj successfully if it is present in DB', function(){
    // TODO: clear collection (should be empty)
    // TODO: create & insert valid object (tested before)
    // TODO: delete valid object from collection
    // TODO: check collection (should be empty again)
  })

});

//========================================================================