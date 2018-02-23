const Bundle = require('../../models/bundles');
const to = require('../../utilities/to');

// read
const read = async (req, res) => {
  const bundle_id = req.query.bundle_id;

  const [err, bundle] = await to(Bundle.findOne({ name: bundle_id }));
  if (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }

  if (bundle) {
    return res.send(bundle.build_number + '');
  } else {
    return res.status(404).json({ statusCode: 404 });
  }
};

// set
const set = async (req, res) => {
  const bundle_id = req.body.bundle_id;
  const new_build_number = req.body.new_build_number;

  if (new_build_number < 0) {
    return res.status(403).json({ statusCode: 403 });
  }

  let [err, bundle] = await to(Bundle.findOne({ name: bundle_id }));
  if (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }

  if (bundle && bundle.build_number && bundle.build_number >= new_build_number) {
    return res.status(403).json({ statusCode: 403 });
  }

  [err, bundle] = await to(Bundle.findOneAndUpdate({ name: bundle_id }, { $set: { build_number: new_build_number } }, { new: true, upsert: true }));
  if (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }

  return res.status(200).json({ statusCode: 200 });  
};

// bump
const bump = async (req, res) => {
  const bundle_id = req.body.bundle_id;
  
  const [err, bundle] = await to(Bundle.findOneAndUpdate({ name: bundle_id }, { $inc: { build_number: 1 } }, { new: true, upsert: true }));
  if (err) {
    return res.status(500).json({ error: JSON.stringify(err) });
  }

  return res.send(bundle.build_number + '');
};

module.exports = {
  read,
  set, 
  bump
};