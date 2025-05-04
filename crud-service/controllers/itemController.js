const Item = require('../models/Item');
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

exports.createItem = async (req, res) => {
  const { name, description } = req.body;
  try {
    const item = await Item.create({ name, description, createdBy: req.user.id });
    res.status(201).json(item);

    // Added notification service
    await redis.publish('item-events', JSON.stringify({
      type: 'item_created',
      name: newItem.name,
      userId: req.user.id
    }));
  } catch (err) {
    res.status(500).json({ message: 'Create failed' });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    // const items = await Item.find({ createdBy: req.user.id })
    // const items = await Item.findfind({ userId: req.user.id })
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOneAndUpdate(
    { _id: id, createdBy: req.user.id },
    req.body,
    { new: true }
  );
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.findOneAndDelete({ _id: id, createdBy: req.user.id });
  res.json({ message: 'Deleted' });

  // Added notification services
  await redis.publish('item-events', JSON.stringify({
    type: 'item_deleted',
    itemId: req.params.id,
    userId: req.user.id
  }));
};
