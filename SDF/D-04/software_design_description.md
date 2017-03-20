## 6.0 SOFTWARE DESIGN DESCRIPTION

### 6.1 INTRODUCTION

  This document presents the architecture and detailed design for the software for The Tube platform. The platform serves as an app one level above YouTube, to provide user and site-curated "serials" containing ordered collections of videos based around a topic.

#### 6.1.1 SYSTEM OBJECTIVES

  The objective of this application is to provide users with a wide array of "serials," so that the browse and search of YouTube can be skipped in favor of an easy to use interface with quality videos, approved and curated by humans. "Serials" are tagged with a broad topic, so that users can easily narrow down their selections by topics. The site will provide curated "serials" and users may also create and edit "serials" of their liking. In addition, the search bar at the top of every page, much like YouTube, will allow the user to quickly find new serials or topics.

#### 6.1.2 HARDWARE, SOFTWARE, AND HUMAN INTERFACES

  __6.1.2.1 HTTP Communication__
    Requires suitable client, e.g. a modern web browser. The Tube will provide resources in the form of HTML files that have been pre-processed by Nunjucks, as well as static resources like images and videos provided by the YouTube API.

  __6.1.2.2 Web User Interface__
    The user interface manifests itself as a web application, with a layout and design that is compliant with the guidelines set forth by Google's Material design guidelines and will look/function similar to the web interfaces provided by YouTube.

### 6.2 ARCHITECTURAL DESIGN
  
  The Tube can be partitioned into three subsystems: Front-End User Interface, Back-End, and Database Organization and Management. The front-end portion is partially coupled to the back-end, since the front-end will be presenting data that will be retrieved from and by the back-end. The back-end is then coupled with the database, for the requests will be organized and directed to and from the database, where the data will need to be organized and stored in an efficient manner.

#### 6.2.1 MAJOR SOFTWARE COMPONENTS

  The Tube will be making use of the Facebook, Twitter, and Google APIs in order to make an easy login/sign up feature for the site. General layout and design of the front-end will follow the guidelines set for by Material.io, and the Material Design Lite (MDL) framework will be used to ensure that. MDL provides a mobile first framework, and also makes many components easy to implement, such as search bars, side menus, responsive buttons, and more. In addition, Nunjucks will be used as the means by which modularization and dynamic design can be implemented in the front-end web pages.

  The back-end will be using dependencies such as Hapi, node, and others to manage the server and handle all requests from the user. It will follow the industry-standard status code guidelines when dealing with errors of all natures.

  The PostgreSQL database will be using the sequelize dependency, which will make the organization of the data efficient without need for the extra work involved in manually creating the tables and relations. The `api.js` file holds The Tube's API that will be used to access the database.

#### 6.2.2 MAJOR SOFTWARE INTERACTIONS

  The front-end will interact with the back-end through API calls, which are defined by the back-end. In turn, the back-end serves as the mediator between the front-end and the database, taking in requests from the client and forwarding the relevant queries from the database to the client. It is between the back-end and the database that Sequelize proves its importance, as it handles queries, additions, and edits to the PostgreSQL database.

#### 6.2.3 ARCHITECTURAL DESIGN DIAGRAMS

![Use Case Diagram][UCD]

[UCD]: /SDF/D-04/use-case-diagram.png "UCD Diagram"

### 6.3 CSC AND CSU DESCRIPTIONS

  * Front-End CSC
    * Navbar
    * Side menu
    * Home page
      * Browse topics module
      * Popular serials module
    * Serial page
      * Description section
      * Overview of videos
      * Similar serials module
      * Add to favorites feature
      * Edit serial (if applicable)
    * Video viewing page
      * Video view module (YouTube API)
      * Overview of serial module
      * Voting feature
    * User profile page
      * My serials tab
        * Create new serial
        * Edit/delete serial
      * Favorites tab
        * Remove favorite
      * Settings tab
        * Viewing
        * Accessibility
        * Social media links
      * Profile edit tab
        * Profile picture module
        * Favorite topics module
        * Description/personal information
  * Back-End CSC
    * API
      * Queries (create/get/edit/delete)
        * User
        * Serial
        * Video
        * Topic
        * Comment Thread
    * Routes
      * API routes
      * View routes

#### 6.3.1 CLASS DESCRIPTIONS

  The following sections provide the details of all classes used in The Tube application. This list is subject to changes, additions, and removals as seen fit as development progresses.

  __6.3.1.1 CommentThread __
    This class will contain the components necessary for displaying the comments module for each serial. Similar to YouTube, this includes a text box for adding a comment, a list view of posted comment threads, each with the main comment and possible replies.

    Fields: user: User, date_created: Date, comment: String, comment_replies: CommentReply

    Methods: get methods for all, set methods for all

  __6.3.1.2 Topic __
    This is a basic class for defining topics. Each serial will have a single topic associated with it, but topics can be assigned to multiple serials.

    Fields: name: String, date_created: Date

    Methods: get methods for both, set methods for both

  __6.3.1.3 Video __
    This class will define the individual videos within a serial. A special property of the Video class is the `vote_count` field, which will be used to gauge public approval or disapproval of a video within a serial.

    Fields: name: String, id: String, vote_count: long

    Methods: get methods for all, set methods for all

  __6.3.1.4 User __
    This class defines new users, contains the serials he/she has made and/or favorited, and defines the type of user: Verified, Curator, or Standard.

    Fields: name: String, email: String, username: String, password: String, interests: Topic[], favorites: Serial[], date_created: Date, type: String

    Methods: get methods for all, set methods for all

  __6.3.1.5 Serial __
    This is the most complicated class, for it sits at the heart of the project. There will most likely be additions to this list in the future.

    Fields: name: String, id: String, videos: Video[], main_topic: Topic, creator: User, contributors: User[], views: long, description: String, comments: CommentThread[], date_created: date

    Methods: get methods for all, set methods for all

#### 6.3.2 DETAILED INTERFACE DESCRIPTIONS
  The following sections provide the details of all interfaces used in The Tube application. This list is subject to changes, additions, and removals as seen fit as development progresses.

  __6.3.2.1 Hapi __
    Hapi is a server framework for node.js, which "enables developers to focus on writing reusable application logic instead of spending time building infrastructure." Hapi transmits all of the necessary data to the front-end, and makes the server management much easier.

  __6.3.2.2 Sequelize __
    Sequelize is a promise-based ORM for Node.js and io.js. It supports the PostgreSQL dialect, which is what The Tube uses, and features solid transaction support, relations, read replication and more.

#### 6.3.3 DETAILED DATA STRUCTURE DESCRIPTIONS
  The following sections provide the details of all data structures used in The Tube application. This list is subject to changes, additions, and removals as seen fit as development progresses.

#### 6.3.4 DETAILED DESIGN DIAGRAMS

### 6.4 DATABASE DESIGN AND DESCRIPTION
  The relational database for this project will be of the PostgreSQL dialect. Sequelize, a promise-based object-relational mapping, will be utilized to streamline database creation and upkeep.

#### 6.4.1 DATABASE DESIGN ER DIAGRAM

#### 6.4.2 DATABASE ACCESS
  Database access will only be available to the user through the back-end, and will be limited depending on the type of user making the request. Curators are the de facto administrators in the system, and they have the ability to edit, create, or remove The Tube's curated content. In addition, Curators have moderator permissions, which will be used to routinely regulate comments on The Tube. Standard users will only be able to create, edit, or remove their own serials, and have view-only permissions for most other data. Verified users have an added "verified" flair next to their name, but for the most part will have the same permissions as Standard users.

#### 6.4.3 DATABASE SECURITY
  Aside from the varying levels of authorization described in the previous section, the database will provide encrypted passwords and end-to-end encryption between the back-end and database. If the opportunity presents itself, encryption between the front-end and the back-end will be implemented through HTTPS.