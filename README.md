# lostItem
Using the app, we can post details of the lost item. We can also see all posted items 


How to run this app on your local machine

create a new react app, call it lostitem

then install the Material design dependencies

Then replace the src dir created with the scr dir on the github repo
We should run the json server to fetch the data in the json database. this can be achieved by installing the json server:-

 npm install -g json-server
 
 after installing the dependencies now run the the json server to watch our db.json file on a different port, use port 8000 since our api_url is pointing to that:-
 
 npx json-swever --watch src/json/db.json --port 8000
 
 the command above will lauch the server on port 8000, our db,json file in the src dir and in another dir json that's why we use scr/json/db.json
