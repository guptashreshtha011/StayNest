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

# joi 
const Joi = require('joi');

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null)
    }).required()
});

module.exports = listingSchema;

in app.js it is required 
const {listingSchema} = require("./schema.js");

and the route becomes like this 

app.post("/listings" , validateListing , wrapAsync( async (req,res , next) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings"); 
 })
);

// new package called joi
npm paclkage 
used for creating a schema that create a validation 
for message send by client so error can be desplayed better way if the request are incorrect 
it is not for mongo schema it creates a format of correct schema and identifies the if any request doesnot folllows it and throws error

// for these  error we created expressError class 
and for sync we created asyncWrap for effeciently handel rather than using try catch 

we also used bootstrap alert of components  and validation of form 
to keep the frontend neet and cleane 
and creted a custom error page to display an error

phase 1 ends here 