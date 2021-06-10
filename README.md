# Link-Trim
A minimal web app for URL shortner service

# Branches
1. **Main** : <a href="https://github.com/WE-FOSS/Link-Trim/tree/main">Checkout</a>
2. **Web-Services-API** : <a href="https://github.com/WE-FOSS/Link-Trim/tree/Web-Services-API">Checkout</a>

# Link-Trim Web Service API 🚀

<img src="https://cdn.discordapp.com/attachments/848998092518064153/849281320525758494/Logo---WeFoss.jpg" height=250px width=250px>

<img src="https://img.shields.io/npm/v/express.svg"> <img src="https://img.shields.io/badge/Node-JS-brightgreen"> <img src="https://img.shields.io/badge/Express-JS-brightgreen"> <img src="https://img.shields.io/badge/Mongo-DB-brightgreen"> <img src="https://img.shields.io/badge/Validator-JS-brightgreen">

<img src="https://img.shields.io/twitter/follow/fosswe?style=social"> <img src="https://img.shields.io/github/forks/we-foss/link-trim?style=social"> <img src="https://img.shields.io/github/stars/we-foss/link-trim?style=social">

# Expose URL ➰
```POST : .../url```
```
// Request Body

{
    "inputURL" : "https://somerandomurl.com/this-is-my-first-api-call-which-i-need-to-explain",
    "inputText" : "api-call"
}

// Response Body

{
    "_id": "60b65180e14f372af0e298bb",
    "inputURL": "https://somerandomurl.com/this-is-my-first-api-call-which-i-need-to-explain",
    "inputText": "api-call",
    "outputText": "localhost:3000/api-call",
    "__v": 0
}
```
```GET : .../```
```
// Response Body (returns all the url stored in the database)
[
    {
        "_id": "60b65180e14f372af0e298bb",
        "inputURL": "https://somerandomurl.com/this-is-my-first-api-call-which-i-need-to-explain",
        "inputText": "api-call",
        "outputText": "localhost:3000/api-call",
        "__v": 0
    }
]
```
```GET : .../api-call```
```
// Response Body when input is append to url
[
    {
        "_id": "60b65180e14f372af0e298bb",
        "inputURL": "https://somerandomurl.com/this-is-my-first-api-call-which-i-need-to-explain",
        "inputText": "api-call",
        "outputText": "localhost:3000/api-call",
        "__v": 0
    }
]
```


# Run Config
- <img src="https://img.shields.io/badge/npm%20run%20start-Normal%20Mode%20Run-orange">
- <img src="https://img.shields.io/badge/npm%20run%20dev-Nodemon%20Dev%20Mode-orange">

# Team Members 🥇
- Tushar Verma
- Kunal Agarwal
- Muqeet Zama Khan
- Varun
- Bilalumrani
- Fawaz
