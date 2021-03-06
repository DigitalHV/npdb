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