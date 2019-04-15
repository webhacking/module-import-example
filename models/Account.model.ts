import * as dynogels from 'dynogels';

export const AccountModel = dynogels.define('Account', {
  hashKey : 'email',

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps : true,

  schema : {
    email   : Joi.string().email(),
    name    : Joi.string(),
    age     : Joi.number(),
    roles   : dynogels.types.stringSet(),
    settings : {
      nickname      : Joi.string(),
      acceptedTerms : Joi.boolean().default(false)
    }
  }
});