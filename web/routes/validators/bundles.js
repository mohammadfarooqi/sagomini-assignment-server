const { Joi } = require('celebrate');

// read
const read = {
  params: {
    bundle_id: Joi.string().required()
  }
};

// set
const set = {
  params: {
    bundle_id: Joi.string().required(),
    new_build_number: Joi.number().integer().required()
  }
};

// bump
const bump = {
  params: {
    bundle_id: Joi.string().required()
  }
};

module.exports = {
  read,
  set,
  bump
};