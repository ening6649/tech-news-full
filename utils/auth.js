const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/login');
  } else {
    //  could potentially be another middleware function or 
    // the final function that will render the template
    next();
  }
};

module.exports = withAuth;


// app.get('/', 
//   (req, res, next) => {
//     console.log('first middleware');
//     next();
//   }, 
//   (req, res, next) => {
//     console.log('second middleware');
//     next();
//   }, 
//   (req, res) => {
//     console.log('final function call');
//     res.send('ok');
//   }
// );