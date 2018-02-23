const { Joi } = require('celebrate');

// read
const read = {
  body: {
    bundle_id: Joi.string().required()
  }
};

// set
const set = {
  body: {
    bundle_id: Joi.string().required(),
    new_build_number: Joi.number().integer().required()
  }
};

// bump
const bump = {
  body: {
    bundle_id: Joi.string().required()
  }
};

module.exports = {
  read,
  set,
  bump
};