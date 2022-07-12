
# Day 3

Focused work mostly on how the user answers are handled.
Previously we decided to automatically create all answers for all the users in the database,
at the moment a survey is created using default data, but this aproach proved dificult
because it required using a complex sql query and a trigger.Insted we decided to go with
a simpler aproach and used a graphql query on the frontend which creates or updates an answer.
Created a TODO list with all of the UI features.
Created some simple UI mockups, because we found out thet we had different views on how the UI should work.

# Day 4

Decided to restructure the questions page with different react components,
which have parent-child relationship.Previously we were rendering the questions
using a single component.This change will make it easier to extend the app,
and reuse some components on later stages of the project.

# Day 5

Implemented the logic to save answers in the database, while the user is 
answering questions.






