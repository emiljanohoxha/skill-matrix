### Day 3

First thing first I made some changes on Page.js styling.
After we set up the Routes I look forward to make logic in start button that will direct user to the Survey Route.
By lot of tries to render questions we found a way. I implemented logic that everytime a user
click next or previous button it will render the right question.
One bug that happened after we implemented the logic of buttons was when we reload the page.
We fixed it by help of our mentors.

### Day 4 FRIDAY

Day 4 went quite productive because we implemented some essential things for survey.
The day started by working on some proper queries to get certain data for frontend part.
It was a little bit challenging because the data we get from query should be the proper way
to get easily on UI component.
I implemented the logic for answers, which is a simple rating form. This took some time to finshed it. The brainstorming today took us on refactoring the code.(structure the component by hierarchy)

### Day 5 Tuesday

For today work I would say it was great!
1-Managed to fix the bug we had on getting the right answer.
2-Implemented correctly mutation to update and insert(upsert) the user answer.
3-Added a component which user is capable to see the progess by showing him all answers completed.
4-Added a pagination to direct the user to specific question.
5-Refactored some piece of code.

### Struggles

The first hassle was on fixing the bug which nearly took us 1-2hours.
The second thing important was implementing the mutation to update and insert the given user answer.
Other challenges faced were more unexpected for example we forget to change the permissions in hasura.

### Day 6 Thursday

For today work
1-Added new table in database for different types of questions.
2-Fixed pagination bug to direct the user to the right question.
3-Implemented logic for different type of scores for each component form.
4-Changed styling of components.
5-Added route review and implemented route review component.

## Struggles

Our first struggle was on pagination which we fixed some bugs.
Second was the review page which took many hours to do. The problem here
was on user answer, the values given should be converted. After fixed this we moved on
updating the answer with mutation.
