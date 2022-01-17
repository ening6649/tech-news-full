// Model-View-Controller, or MVC. a design pattern that organizes into three seperate concerns
// .. models: core date, views: ui such as html layouts, controllers: link between models and views
// handlebars.js is a template engine
// Your file/folder structure MUST be set up this way for Handlebars.js to work correctly. 
// ..You will always have a main layout located at (and named) views/layouts/main.handlebars.
//  ..All other template files will go directly in the views folder (views/welcome.handlebars).
// sessions allow express.js server to keep track of which user is making a request
// .. and store data about them in memory such as http cookies
// npm i express-session connect-session-sequelize  
// .. the above allows connection to the back end. stores the sessions created by
// .. express-session into our database automatically

const router = require('express').Router();

router.get('/', (req, res) => {
    // specifiy which template we want to use - res.render
  res.render('homepage');
});

module.exports = router;

// handle bars {{dfadf}} typically 
// two brackets will convert HTML characters to strings
// Three brackets, on the other hand, will render the data as HTML.

// res.render() moethod can accept a second arugment , an object. 
// take a single post object and pass it to the homepage.handlebars template
router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
        username: 'test_user'
      }
    });
  });
// id. post_url etc becomes availabe in the template using {{}} in homepage.handlebars
<ol class="post-list">
  <li>
    <article class="post">
      <div class="title">
        <a href="{{post_url}}" target="_blank">{{title}}</a>
        <span>({{post_url}})</span>
      </div>
      <div class="meta">
        {{vote_count}} point(s) by {{user.username}} on
        {{created_at}}
        |
        <a href="/post/{{id}}">{{comments.length}} comment(s)</a>
      </div>
    </article>
  </li>
</ol>

.then(dbPostData => {
    // pass a single post object into the homepage template
    res.render('homepage', dbPostData[0]);
  })
// to serialize Sequelize object down to only the properties needed
// .. use sequelize's get() method 
res.render('homepage', dbPostData[0].get({ plain: true }));
// this is not needed for building api routes because res.json() automatically does it
// to serialize the entire array
const posts = dbPostData.map(post => post.get({ plain: true }));
//  even though the render() method can accept an array instead of an object, 
// ...that would prevent us from adding other properties to the template later on. 
// ...To avoid future headaches, we can simply add the array to an object and continue passing an object to the template
res.render('homepage', { posts });
// post is now an array, template was set up to receive an object
// handlebar.js has built in helpers that will alow looping over an array
// #each to begin the lopp and /each to end 
<ol class="post-list">
  {{#each posts}}

  </li>
  {{/each}}

// declare a variable name in the each expression and use that name for subsequent placeholders
<ol class="post-list">
  {{#each posts as |post|}}
  <li>
    <article class="post">
      <div class="title">
        <a href="{{post.post_url}}" target="_blank">{{post.title}}</a>
        <span>({{post.post_url}})</span>
      </div>
      <div class="meta">
        {{post.vote_count}} point(s) by {{post.user.username}} on
        {{post.created_at}}
        |
        <a href="/post/{{post.id}}">{{post.comments.length}} comment(s)</a>
      </div>
    </article>
  </li>
  {{/each}}
</ol>

// example using express-session 
// sets up an express.js session and connect the session to sequelize database
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
// req.seesion.views = 1 starts the number of views at 1 

// an example of a span literal
<span>({{post.post_url}})</span>

// an example of a single post template
<form class="comment-form">
  <div>
    <textarea name="comment-body"></textarea>
  </div>

  <div>
    <button type="submit">add comment</button>
    <button type="button" class="upvote-btn">upvote</button>
  </div>
</form>

<div class="comments">
  {{#each post.comments}}
  <section class="comment">
    <div class="meta">
      {{user.username}} on {{created_at}}
    </div>
    <div class="text">
      {{comment_text}}
    </div>
  </section>
  {{/each}}
</div>

// an example of a #if handlebars.js
{{#if value}}
<div>
  This content will only display if "value" is truthy
</div>
{{/if}}

// variables that are passed to view templates are automatically passed to the main layout

// the following imports the partial post-info.handlebars
// to use a partial, all we need is the > character, 
// ..followed by the name of the partial file and the object we'll pass to the partial
<ol class="post-list">
  {{#each posts as |post|}}
  <li>
    {{> post-info post }}
  </li>
  {{/each}}
</ol>

// random word insert as helpers utils
insert_description: (name) =>{
    const word =
        descriptiveWords[Math.floor(math.random()*descriptiveWords.length)];
    return `${word} ${name}`;
}

// git push heroku to deploy! 


// node seeds/index.js

// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName