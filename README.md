# OriHub

A protfolio website for display projects with links to GitHub Repositories

## Back-End: 
#### API Build with Node.js and Express.js.
#### Handle requests from the react.js front-end.

    node server.js
    
    
| request type        | url           | parms  |return|
| ------------- |:-------------:| -----:|------:|
| GET      | /resumeOS | ---- |resume img file|
| POST      | /folder/projects |   string: folder name | array of sub-folders|
| POST | /file/content      |   string: file name |object: {title : file name, content : content of file, ext : ext of file} |
| POST | /sendMeEmail |string: name,string: email, string: subject, string: message |string: success or error message|

Server listen in port 3004


#### Dependencies(npm):
##### - body-parser: https://www.npmjs.com/package/body-parser
##### - express: https://www.npmjs.com/package/express
##### - nodemailer: https://www.npmjs.com/package/nodemailer
    
## Front-End: 
#### Build with React.js 
    npm start

    
#### Dependencies(npm):
##### - react-reveal-text: https://www.npmjs.com/package/react-reveal-text
##### - pts: https://www.npmjs.com/package/pts
##### - react-router-dom: https://www.npmjs.com/package/react-router-dom
##### - whatwg-fetch: https://www.npmjs.com/package/whatwg-fetch
##### - react-scripts: https://www.npmjs.com/package/react-scripts
##### - react-reveal: https://www.npmjs.com/package/react-reveal
