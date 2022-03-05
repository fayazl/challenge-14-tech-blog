const { Post } = require('../models');

const postdata = [
  {
    title: 'Adobe Acrobat Reader',
    description: 'Acrobat Reader is software that allows you to view a PDF document (a document that can be seen but not changed). It can be downloaded free of charge from Adobe.',
    user_id: 1
  },
  {
    title: 'ADSL',
    description: 'Asymmetric digital subscriber line (ADSL) is a type of digital subscriber line (DSL) broadband technology that is used to connect to the Internet.',
    user_id: 2
  },
  {
    title: 'Bandwidth',
    description: 'Bandwidth refers to the maximum amount of data that can travel a communications path in a given time, usually measured in second',
    user_id: 1
  },
  {
    title: 'Bluetooth',
    description: 'Bluetooth is a wireless communications technology intended to replace cables. It allows short-range connections between two or more Bluetooth-compatible devices such as mobile phones, tablets, headsets or medical equipment.',
    user_id: 4
  },
  {
    title: 'Boolean operators',
    description: 'Most search engines (e.g. Google) allow you to limit your search or make it more specific by using words such as "and", "or" and "not". These words are known as boolean operators because of their origin as terms in logic.',
    user_id: 5
  },
  {
    title: 'Broadband',
    description: 'Broadband is a type of communications technology whereby a single wire can carry more than one type of signal at once; for example, audio and video. Cable TV is one technology that uses broadband data transmission.',
    user_id: 5
  },
  {
    title: 'Cache',
    description: 'When you download (read) a web page, the data is "cached," meaning it is temporarily stored on your computer.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

