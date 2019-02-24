

module.exports = function (app) {

  // Validating login
  app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if(username === 'user@example.com' && password === '1234') {
      return res.status(200).json({
        success: true,
        message: 'User logged in'
      })
    }

    return res.status(400).json({
      success: false,
      message: 'Username or password incorrect'
    })

  });

  

};