# lostItem
Using the app, we can post details of the lost item. We can also see all posted items 


How to run this app on your local machine

step1: clone the app using from git hub using git;
git clone https://github.com/JosephatJuma/lostItem.git

step2: open the directroy where you have cloned the app, open the terminal and install npm;
npm i

step3: you can now run the app;
npm start

step4: open another app and run the json server on port 8000 from which we are fetching the items;
npx json-server --watch src/json/db.json --port 8000

now we can fetch data and everything should be working

