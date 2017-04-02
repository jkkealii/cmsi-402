# Table of Contents

1. [Project Proposal Document/Presentation](/SDF/D-01)
  * 2.0 [Preliminary Proposal](/SDF/D-01/preliminary_project_proposal.md)
  * 3.0 [Project Proposal & Presentation](/SDF/D-01/project_proposal.md)
2. [Software Requirements Specification Document](/SDF/D-02/software_requirements_specification.md)
3. [Software Design Description](/SDF/D-03/software_design_description.md)
4. [Updated Software Design Description](/SDF/D-04/software_design_description.md)
5. [Updated Software Requirements Specification Document](/SDF/D-05/software_requirements_specification.md)
6. Preliminary Demonstrations Presentation
7. Final Product Delivery
8. Oral Status Reports
9. Oral Status Reports cont.

## Status Reports

### Week 9

Completed the [Software Design Description](/SDF/D-03/software_design_description.md), which helped to further my own understanding of what the final product will look like. Up to this point, I have been getting more familiar with the various components that will make up The Tube, with a focus on learning how the database and back-end systems will be set-up and run. That meant learning exactly how to work with an API, api routes, vision routes, sequelize, and PostgreSQL. Then I dabbled in the front-end for a little while, deciding on [Material Design Lite](https://getmdl.io/) as my front-end framework, since I wanted to stick to the [Material](https://material.io/) guidelines and philosophy to make The Tube consistent with proven methods of increased usability and organization. Then I started to get into the actual set-up of the back-end and database, gettting all of the necessary packages, files, and file organization in place to start some real work.

### Week 11

It has been quite a job in itself to smooth out the project so that all of the dependencies my project uses blends well and results in a coherent, working machine. Most recently, that has been resolving the issue with the [Nunjucks](https://mozilla.github.io/nunjucks/) dependency. Nunjucks is used for JavaScript templating on the front-end, and designing my front-end is difficult without Nunjucks working correctly. Turns out, the issue was that I had the wrong Nunjucks package installed. Since I am using the [Hapi](https://hapijs.com/) framework for my back-end, I needed the Hapi version of Nunjucks. D'oh. Now I am all set to hit the ground running on front-end design, and I plan to have a good chunk of the database schema set up by the next status update.

### Week 13

I have submitted my updated [SRS document](/SDF/D-05/software_requirements_specification.md) and I have made significant progress in terms of organizing my database, using a great tool: [Sequelize](http://docs.sequelizejs.com/en/v3/). Although the current schema is subject to change, and probably will be changed many times in the future, all models and migrations are set-up! The total number of tables now sits at six, with the most recent addition being the `CommentReply` table used in association with `CommentThread`. Progress has also been made on the front-end, in particular, on the homepage, where I am laying out some of the foundation for the rest of the site, using templating and [Material Design Lite](https://getmdl.io/) components to make a responsive interface focused on usability.

### Week 15

---

#### Tables in the database

| User | Serial | Video | Topic | CommentThread | CommentReply |
| -- | -- | -- | -- | -- | -- |
| id: integer | id: integer | id: integer | id: integer | id: integer | id: integer |
| name: String | name: String | name: String | name: String | op: User | op: User |
| username: String | fav_count: bigint | youtube_id: String | count: bigint | comment_replies: CommentReply[] | comment: String |
| password: String | videos: Video[] | vote_count: bigint | createdAt: date | comment: String | createdAt: date |
| interests: Topic[] | topic: Topic | use_count: bigint | updatedAt: date | createdAt: date | updatedAt: date |
| favorites: Serial[] | creator: User | createdAt: date |  | updatedAt: date |  |
| serials: Serial[] | contributors: User[] | updatedAt: date |  | likes: bigint |  |
| user_type: Enum | views: bigint |  |  |  |  |
| email: String | description: String |  |  |  |  |
| createdAt: date | comments: CommentThread[] |  |  |  |  |
| updatedAt: date | createdAt: date |  |  |  |  |
|  | updatedAt: date |  |  |  |  |