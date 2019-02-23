

module.exports = function (app) {


  // validating login

  app.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    
    if(username === 'user@example.com' && password === '1234') {
      return res.status(200).json({
        success: true,
      })
    }

    return res.status(400).json({
      success: false,
    })

  });

  

};