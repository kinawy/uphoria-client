![MIC? False](./src/assets/MIC.svg) ![Open Source](./src/assets/OS.svg)

# Welcome to Uphoria

This is a place to share short form content, much like an app that sounds like TipTop. Maybe you don't want to share all 
your data with China but you still want to understand what your friends are referencing. This is the app for you. Create 
a profile, update your own profile with a bio, instagram link or a personal url, and upload videos to your profile.

## Getting Started
To run this project on your local machine, fork and clone the [client](https://github.com/anthonygregis/uphoria-client) 
and [backend](https://github.com/anthonygregis/uphoria-backend) repos from github. <br>
Install all dependencies by running `npm i` in the project directory terminal. <br>
Create a .env file to keep your APP_SECRET, MONGO_URI, CLOUDINARY_SECRET, CLOUDINARY_KEY and CLOUDINARY_NAME.<br> 
Make sure you are using Node version 12; check by running `node -v` in your terminal. If you're running something higher than 12.18.3 then run `nvm use 12` in your terminal to use the correct version. <br>
To run uphoria_backend, type `nodemon` or `node index.js` into your terminal.<br>
Run `npm start` in uphoria_client to start your frontend.<br>
 
 # About the project
This app is for creative individuals who want to share videos without giving their private data away. As a team,
we wanted to connect users without using them for our own gain. Uphoria is about sharing what makes you happy and creating 
positive feeds. We don't believe in data collection, and we hide your personal information from any potential scraping. 

 
 ### Erd | Wireframes | Color Pallet
 
 ![ERD](https://i.imgur.com/tlPjVXm.png)
 
 ![Wire Frame 1](https://i.imgur.com/BDTm53Y.png)

![color pallet](https://i.imgur.com/g12fs9F.png=50)

### Style Guide

* All components are functional, not class based and use arrowhead syntax
* Ensure your IDE is using 2 space tabbing (VS Code | Intellij)
* Use double quotes in strings
* We are #AntiSemiColon Gang
* Make sure your functions / variables describe what they are doing or storing
* Catch your errors, those are important.
* When console logging your errors, make it descriptive of what/where the error is
* Refrain from excessive coding comments
* Avoid going over 80 characters per line
* ONE FEATURE PER BRANCH (If you don’t it will lead to mass PR conflictions)

# The code

## GraphQL
Access your GraphQL playground by typing "http://localhost:4000/graphql" into your browser while your backend application is
running. Here you can play around with the querying syntax of GraphQL and see the exact formation that the data is stored in.
### Returning all users in database with specifics
![graphql](https://i.imgur.com/PnwWTMC.png)
### Returning a single user based on user id
![graphql](https://i.imgur.com/atuEVNr.png)



## Import Code Snippets

In Revolver.js 
```javascript
const resolver = {
  Query: {
    user: {
      description: "Returns a user based off their ID",
		resolve: async (_, {id, ...args}, context) => {
          console.log("User route hit")
			if (!args.privilegedSecret) {
			  args.privilegedSecret = ""
			}
			  const foundUser = await db.User.findById(id).populate({ 
                              path: "videos", options: { sort: { 'createdAt': -1 } } 
                              })
               console.log(foundUser)
			if (args.privilegedSecret !== "antiTikTok") {
			  foundUser.email = "Not Authorized"
				foundUser.birthday = "Not Authorized"
			}
			return foundUser
        }
    }
  }
}
```
Resolver is where our query logic goes. The above code returns a user when implemented.

Creating a mutation in Resolver.js
```javascript
deleteUser: {
  description: "We aren't Tik Tok",
	resolve: async (_, {id}, context) => {
      console.log(context.user)
		if (!context.user) throw new Error("Protected Route, please login")
		if (context.user._id !== id) throw new Error("You are not authorized to delete another user")
		  await new Promise((resolve, reject) => {
		    db.User.findByIdAndDelete(id, (err, docs) => {
		      if (err) reject(err)
			  else resolve(true)
		    })
		  })
            return new Promise((resolve, reject) => {
              db.Video.deleteMany({userId: id}, (err, docs) => {
                if (err) reject(err)
				else resolve(true)
              })
            })
    }
}
```
Also in our revolver, this code is our mutation query for deleting a user.

In typeDef.js
```javascript
const typeDefs = gql`  
type User {
    id: ID!
    username: String!
    email: String
    password: String!
    name: String!
    birthday: Date
    profile: Profile!
    followingUsers: [ID!]!
    videos: [Video!]!
  }
`
```
GraphQL requires type definitions. This is our User type. 

Video upload function
```javascript
const cloudinaryUpload = async ({stream}) => {
  try {
    await new Promise((resolve, reject) => {
      const streamLoad = cloudinary.uploader.upload_stream({ resource_type: 'video' },function (error, result) {
        if (result) {
          publicId = result.public_id
			resolve(publicId)
          } else {
            reject(error)
          }
        })
          stream.pipe(streamLoad)
    })
  } catch (err) {
    throw new Error(`Failed to upload uphoria video! Err:${err.message}`)
  }
}
await cloudinaryUpload({stream})
return (publicId)
```
This uses the cloudinary package to access it's uploader functionality, where the user passes resource type "video"

### Tech Stack

* Mongoose
* Mongodb
* Express
* React
* Nodejs
* GraphQL
* Apollo
* Material UI
* Cloudinary
* Bcrypt

# Models

### User Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| name | String | Must be provided |
| username | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| birthdate | Date | Can be updated later |
| followingUsers | Array | Can be updated later |
| followingHashtags | Array | Can be updated later |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Profile Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| bio | String | Can be provided later |
| instagramUrl | String | Can be provided later |
| personalUrl | String | Can be provided later |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |


### Videos Model

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| id | Integer | Serial Primary Key, Auto-generated |
| description | String | Can be provided later |
| shares | Integer | Can be provided later |
| user | String | ObjectId |
| likes | Integer | Inc |
| createdAt | Date | Auto-generated |
| updatedAt | Date | Auto-generated |

### Routes

| Route Name |  Notes |
| ---------------  | ------------------------------ |
| / |  Home route, protected |
| /auth  | Auth route with register and login |
| /profile  | User profile, protected |
| /create  | Upload videos |
| /edit  | Edit user profile, protected |

# Future updates to project

- [ ] Add comments to videos
- [ ] Follow Users/Hashtags
- [ ] Search Users/Hashtags
- [ ] Use audio has a seperate entity
- [ ] Admin and Moderation levels
- [ ] Browser version

<hr />

[Hooked on a feeling / Send it](https://giphy.com/gifs/office-chair-dabs-bXvwCQglnTGKs)

<iframe src="https://giphy.com/embed/bXvwCQglnTGKs" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/office-chair-dabs-bXvwCQglnTGKs">via GIPHY</a></p>

[HOW YOU SHOULD WRITE YOUR NEXT README.md](https://blog.bitsrc.io/how-to-write-beautiful-and-meaningful-readme-md-for-your-next-project-897045e3f991)

### a moment of hubris
The initial working period for this project was Friday the 4th to Friday the 11th. This group hit the ground running 
as soon as teams were announced. The first weekend we accomplished 80% of the Material UI layout, getting GraphQL built 
up correctly, and writing the proper queries for the frontend. We felt confident in reaching MVP of just photo uploaded by
that Monday night. Auth was working, routes were running, and things were coming along. Sometimes our CSS would disappear 
after a commit but who doesn't have a goblin living in their computer and eating code when no one is looking. We were 
young, wild, free, and cocky. On Thursday our Git Master experienced a terrible tragedy when his computer lost its battle 
with a kitten. This set us back a good and fast man. In the end though, even without all of our stretch goals uo and running,
we still have a pretty nice app 😌