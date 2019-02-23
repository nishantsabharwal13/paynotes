
const Notes = require('../models/notes');

module.exports = function (app) {

  // fetching notes

  app.get('/notes', async (req, res) => {

    const notes = await Notes.find({});
    const count = await Notes.count({});

    return res.status(200).json({ notes, count });

  });

  //creating a new note

  app.post('/notes', (req, res) => {
    console.log(req.body.title)
    const note = {
      title: req.body.title,
      content: req.body.content,

    };

    return Notes.create(note, (err, note) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        success: true,
        note
      });
    });

  });

  // editing current note
  
  app.put('/notes/:_id', (req, res) => {
    const query = { _id: req.params._id };
    const update = { $set: { title:req.body.title, content: req.body.content, updated_at: new Date() } };
    console.log(query)
    return Notes.findOneAndUpdate(query, update, (err, note) => {
      console.log(note)
      if (err) {
        throw err;
      }
      res.status(200).json({
        success: true,
        note
      });
    });
  });


};