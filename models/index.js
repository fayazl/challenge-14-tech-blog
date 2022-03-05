//import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations from models
User.hasMany(Post, {
    foreignKey: 'user_id'
  });