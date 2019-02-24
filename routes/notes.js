
const Notes = require('../models/notes');

module.exports = function (app) {

  // Fetching notes

  app.get('/notes', async (req, res) => {

    const notes = await Notes.find({});
    const count = await Notes.count({});

    return res.status(200).json({ notes, count });

  });

  // Creating a new note

  app.post('/notes',(req, res) => {
    const note = {
      title: req.body.title,
      content: req.body.content,
    };

     Notes.create(note, async (err, note) => {
      if (err) {
        throw err;
      }
    
      res.status(200).json({ note });
    });

  });

  // Editing current note
  
  app.put('/notes/:_id', (req, res) => {
    const query = { _id: req.params._id };
    const update = { $set: { title:req.body.title, content: req.body.content, updated_at: new Date() } };

    Notes.findOneAndUpdate(query, update, async (err, note) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ note });
    });
  });


};