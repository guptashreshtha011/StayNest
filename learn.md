# EJS mate 
new package
npm i ejs-mate

const ejsMate = require('ejs-mate');

help us create multiple templete and layout
like navbar which is same for all pages of website
same goes for footer

app.engine('ejs', ejsMate);


in layouts
<div class="container"><%- body %></div>
in views listings
<% layout("/layouts/boilerplate.ejs") %>
<body></body>


// Validation 
the data we enter in form checked  through browser or/and server   form should be in corrcet format and with the constraint 
set by the application
// 2 types 
1. Client 
2. Server