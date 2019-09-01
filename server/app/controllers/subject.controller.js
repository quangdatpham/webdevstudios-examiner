const { to } = require('await-to-js');

const { subjectRepository: SUBJECT } = require('../repositories');

const messages = {
  SUBJECT_FIND_BY_ID: 'SUBJECT_FIND_BY_ID',
  SUBJECT_CREATED: 'SUBJECT_CREATED',
  SUBJECT_UPDATED: 'SUBJECT_UPDATED',
  SUBJECT_REMOVED: 'SUBJECT_REMOVED'
}

const findAll = async (req, res, next) => {
  const [ err, subjects ] = await to(subject.findAll());
}

const findById = async (req, res, next) => {
  const [ err, subject ] = await to(subject.findById(req.params._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.SUBJECT_FIND_BY_ID,
    subject
  });
}

const create = async (req, res, next) => {
  const [ err, subject ] = await to(subject.create(req.body));
  if (err) return next(err);
  
  res.send({
    success: true,
    message: messages.SUBJECT_CREATED,
    subject
  });
}

const update = async (req, res, next) => {
  const [ err ] = await to(subject.update(req.body));
  if (err) return next(err);

  res.send({
    success: false,
    message: messages.SUBJECT_UPDATED
  });
}

const remove = async (req, res, next) => {
  const [ err ] = await to(SUBJECT.remove(req.user._id));
  if (err) return next(err);

  res.send({
    success: true,
    message: messages.SUBJECT_REMOVED
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}