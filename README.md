<h1>Live Football World Cup Score Board<h1>

<h2>Installion and Execution</h2>
1. npm install<br/>
2. npm run cypress (To run the outer end-to-end testing cases using Cypress.)<br/>
3. npm test (To run the internal test cases for each component which defines the component's behaviour.)<br/>
4. npm start<br/>

<h2>Development Flow</h2>
1. Wrote a Cypress test case for a new feature.<br/>
2. Implemented basic feature to satisfy Cypress test case.<br/>
3. Implemented component behavioural test case using RTL and Jest to cover the unit testing and edge cases.<br/>
4. Wrote the component code to satisfy the above test cases.<br/>
5. Repeated the process for every feature and component.<br/>

<h2>Features</h2>
1. Add a game.<br/>
2. Edit a game.<br/>
3. Finish a game.<br/>
4. Summary is displayed under the scoreboard. Whenever there is a change in the scoreboard, summary will sort matches in descending order according to the total score of the matches. If two matches have the same score, match will be sorted based on the time when match started and the recent one will be on top.  <br/>

<h2>Assumptions</h2>
1. For few test cases, it is assumed that there is alteast one match ongoing (edit/delete features of the matches).<br/>
2. Only one match at a time can be edited. <br/>

<h2>Points to be noted</h2>
1. I have not focused on the UI of the project, as it was not required.<br/>
2. In-memory storage is used, so when we refresh the page, data will reset back to the initial state.<br/>
3. Initially there are 3 matches added in the memory.<br/>
4. Focused on clean and reusable coding approaches.<br/>
5. Throughout followed Test Driven Development (TDD).<br/>