# Inspection - Team *T04* 

The goal of an Inspection is to find defects.
We first identify the code we wish to inspect, determine the time we wish to meet, and determine the checklist we will use to find faults in our code during the preparation before the meeting.

|  | Details |
| ----- | ----- |
| Subject | *usePlaces.js and actions.js* |
| Meeting | *11/03/21, 4:00PM, Biology Building - Group Study Room 138* |
| Checklist | *[checklist.md](https://github.com/CSU-CS-314-Fall-2021/t04/blob/main/reports/checklist.md)* |

### Roles

We note the amount of time each person spent reviewing the code in preparation for the meeting.

| Name | Preparation Time |
| ---- | ---- |
| Jacki | 40 min |
| Mallory | 30 min |
| Kay | 30 min |
| Abby | 25 min |
| Nick | 30 min |


### Problems found

We list each potential defect we found in the code during our preparation so we can discuss them in the meeting.
We add a GitHub issue for each defect that requires a modification to the system.

| file:line | problem | hi/med/low | who found | github#  |
| --- | --- | :---: | :---: | --- |
| usePlaces.js: 103 | no error handling for file parsing | low | Jacki | |
| usePlaces.js: 115, 136 | similar const variable used for latlng | low | Jacki | |
| usePlaces.js: 93 | readFile function has a cognitive complexity of 17; should be refactored | med | Mallory | |
| usePlaces.js: 103-145 | file parsing function split into mutiple function | low | Kay | |
| usePlaces.js: 148-184 | Testing coverage for save file functions & splitting up | low | Abby | #674 |
| actions.js: 15-47 | ItineraryActionsDropdown function violates Single Resonsibility principle. Could be split further to reduce complexity | low | Nick |  |
