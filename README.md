<h1>Live Football World Cup Score Board<h1>

<h2>Installion and Execution:</h2>
1. npm install
2. npm run cypress (To run the outer end-to-end testing cases using Cypress)
3. npm test (To run the internal test cases for each component which defines the component's behaviour)
4. npm start

<h2>Assumptions<:</h2>
1. For few test cases, it is assumed that there is alteast one match ongoing (edit/delete features of the matches)
2. Initially, there are more

<h2>Development Flow:</h2>
1. Wrote a Cypress test case for a new feature.
2. Implemented basic feature to satisfy Cypress test case.
3. Implemented component behavioural test case using RTL and Jest to cover the unit testing and edge cases.
4. Wrote the component code to satisfy the above test cases.
5. Repeated the process for every feature and component.

<h2>Features:</h2>
1. Add a game
2. Edit a game

<h2>Points to be noted:</h2>
1. I have not focused on the UI of the project, as it was not required.
2. In memory storage is used, so when we refresh the page, data will reset back to the initial state.
3. Initially there are 3 matches added in the memory.