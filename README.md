# Rick and Morty (Phase 1 Project)

## Project Description:
This project is based off the characters of Rick and Morty, chosen at random from an API source,
https://rickandmortyapi.com/api/character/
The five objects that will be returned from the API will be:
* Name
* Status
* Gender
* Species
* An Image of Each Character

As an user on this website, you can select from 20 characters. 
* The five objects from above will be shown corresponding to each character.
* The character names will be in 2 rows once starting up the website.
* The character names will show up as yellow labels.
* Hovering over the character names will present the character names as white with a black background.
* You can add the amount of likes on each character.
* You can also reset the amount of likes on each character simply with the press of the 'Morty Reset' button.
* The background image's URL that was used is 
https://4kwallpapers.com/images/walls/thumbs_3t/9531.jpg

# Project Setup Instructions
* Clone the repository.
* Install json-server globally by running npm install -g json-server
* Run the API using json-server --watch db.json
* Open index.html in your browser.

## Project Requirements:
Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIsLinks to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

Use at least 3 distinct event listenersLinks to an external site. (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.

Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
