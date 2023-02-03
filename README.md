# collabotrek-front-end

May have to run the following in the terminal if I get an invalid hook error: npm link ../collabotrek-front-end/collabotrek/node_modules/react

jsonwebtoken
axios
react-router-dom
bootsrap
reactstrap

votes should be separated into two fields, 1 for member IDs of who has voted, and another as just the pure length of that array (or just do that part on the front end) this way I can see if the logged in member's ID is in the vote array for a particular item and toggle the button to say "vote"/"remove vote" as well as change what I send the API