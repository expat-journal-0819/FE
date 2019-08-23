# Expat-Journal
Expat-Journal BW 2

To setup Dev Environment:

1. in root yarn install, 

2. yarn create react-app expat-journal

3. yarn add axios

4. add JSON server 
 in root of expat-journal react app,  yarn global add json-server

5. Create components folder in project root/src

6. Create a /img directory in project root

7. configure end-point at localhost:3000/content 
use this article for a reference https://blog.eleven-labs.com/en/json-server/

8. Run JSON Server on a different port since React will be using 3000, src\data\json-server -p 4000 db.json

9. end points, localhost:3000 React landing Page. 
                localhost:4000/comments
                localhost:4000/articles
                
