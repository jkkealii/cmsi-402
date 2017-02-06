## 5.0 SOFTWARE REQUIREMENTS SPECIFICATION

### 5.1 REQUIREMENTS INTRODUCTION

This system will be a web platform with the main purpose of creating and viewing "serials," ordered collections of YouTube videos with a common thread in the form of a topic. The system will rely on the YouTube API to play videos, grab data from users and channels, and search YouTube for videos. In addition, users will be able to create accounts from which they can create "serials," keep track of "serials" that have been watched, and rate or comment on serials.
The remainder of this document is structured as follows. Section 5.2 contains the functional requirements, Section 5.3 contains the performance requirements, and Section 5.4 contains the environment requirements.

![UML Diagram][UML]

[UML]: /SDF/D-02/tube_high_UML.png "UML Diagram"

#### 5.1.1 "THE TUBE" GRAPHICAL USER INTERFACE (FRONT-END)

The graphical user interface (GUI) for "The Tube" provides the user with the means to select the desired function from those which are available on the platform, in addition to providing the user with the means to watch YouTube videos.

__5.1.1.1 Login/Create an Account Page: page that allows users to login and create an account__

* 5.1.1.1.1 Login input module: input fields for username/password
* 5.1.1.1.2 Login button module: button to submit credentials input to server
* 5.1.1.1.3 Third-party login button modules: buttons to redirect user to Twitter, Facebook, or Google to login
* 5.1.1.1.4 Create account input module: input fields for creating new account
* 5.1.1.1.5 Create account button module: button to submit account input to server

__5.1.1.2 Homepage: main page of "The Tube"__

* 5.1.1.2.1 Topic browse module: module containing various topics
* 5.1.1.2.2 Timeline module: module displaying a feed of "serials"

__5.1.1.3 Navbar: navbar module that will be displayed on every page__

* 5.1.1.3.1 Profile module: button to direct user to profile details
* 5.1.1.3.2 Search module: input field to search for "serials" or users
* 5.1.1.3.3 Logo module: image of site logo, redirects to homepage
* 5.1.1.3.4 Create "serial" button module: button that directs to create "serial" page
* 5.1.1.3.5 Notifications module: upon click, module will appear, showing recent notifications
* 5.1.1.3.6 Menu module: see 5.1.1.4

__5.1.1.4 Side menu: menu module that displays options for navigating "The Tube"__

* 5.1.1.4.1 Profile module: button to direct user to profile details
* 5.1.1.4.2 Popular module: button to direct user to popular "serials"
* 5.1.1.4.3 Following module: button to direct user to listing of followed users and topics
* 5.1.1.4.4 Progress module: button to direct user to progress page
* 5.1.1.4.5 List of topics module: listing of topics followed by the user

__5.1.1.5 Profile page: details of user profile, with editing features__

* 5.1.1.5.1 Profile picture module: image displaying current profile picture; upon click, user may choose a new picture
* 5.1.1.5.2 User information input/display module: input fields displaying current user information
* 5.1.1.5.3 Third party profile links module: buttons displaying status of profile links with Facebook, Twitter, and Google
* 5.1.1.5.4 Edit button module: button that allows input fields to be edited

__5.1.1.6 "Serial" viewing page: automatically-generated page that allows users to view selected "serial"__

* 5.1.1.6.1 YouTube iFrame module: video player embedded using YouTube API
* 5.1.1.6.2 Rating buttons module: up and down arrow buttons used for user rating
* 5.1.1.6.3 Comments section module: input field for new comment from user, along with display of existing comments regarding the "serial"
* 5.1.1.6.4 Related "serials" list: list of related "serials," as a list of thumbnails on the side of the page
* 5.1.1.6.5 Back and forward buttons module: buttons to allow users to watch previous video or skip ahead to next video

#### 5.1.2 SERVER

__5.1.2.1 NodeJS: modules to serve up files required for the Front-End__

__5.1.2.2 HTTPS: modules for network requests__

__5.1.2.3 API routes: modules for defining API routes__

#### 5.1.3 DATABASE

__5.1.3.1 Queries: modules for running queries on stored data__

__5.1.3.2 Indexing: modules for indexing the data__

__5.1.3.3 Tracking: modules for tracking user activity__

### 5.2 FUNCTIONAL REQUIREMENTS

"The Tube" shall give users the ability to create, view, and review "serials." In the requirements that follow, "serial" is understood to mean an ordered collection of YouTube videos based on a topic.

#### 5.2.1 FRONT-END

5.2.1.1 The front-end shall provide a login and create account page.

5.2.1.2 The front-end shall provide Facebook, Twitter, and Google login options.

5.2.1.3 The front-end shall display a navbar for all pages.

5.2.1.4 The front-end shall provide a logout option.

5.2.1.5 The front-end shall provide a search bar.

5.2.1.6 The front-end shall react to mouse clicks on buttons, links, and videos.

5.2.1.7 The front-end shall direct users that are logged in to a personalized homepage.

5.2.1.8 The front-end shall provide a video player to watch YouTube videos.

5.2.1.9 The front-end shall provide a side menu for quick navigation.

5.2.1.10 The front-end shall provide means for a user to create a "serial."

5.2.1.11 The front-end shall provide means for a user to rate and comment.

5.2.1.12 The front-end shall display a feed of new and popular "serials."

5.2.1.13 The front-end shall provide a module for browsing "serial" topics.

5.2.1.14 The front-end shall provide a way for users to view and edit their profile.

5.2.1.15 The front-end shall display suggested "serials" for the user.

5.2.1.16 The front-end shall be functional and easy to use on mobile devices.

#### 5.2.2 BACK-END

5.2.2.1 The back-end shall respond to HTTP requests from the client.

5.2.2.2 The back-end shall forward the results of queries from the database to the front-end.

5.2.2.3 The back-end shall support concurrent access of the database from multiple users.

5.2.2.4 The back-end shall timeout the network connection to the database after uninterrupted idling of 5 minutes.

5.2.2.5 The back-end shall send error messages with details regarding connection issues.

5.2.2.6 The back-end shall close network channels that are not in use.

5.2.2.7 The back-end shall determine a network channel as "not in use" when a channel has not made a request in 5 minutes.

5.2.2.8 The back-end shall maintain a network log.

5.2.2.9 The back-end shall track successful HTTP requests.

5.2.2.10 The back-end network log shall track failed HTTP requests.

5.2.2.11 The back-end network log shall track server load.

5.2.2.12 The back-end network log shall track request speed.

5.2.2.13 The back-end network log shall track requests per second.

5.2.2.9 The back-end shall send reports on network performance every second at the least.

5.2.2.10 The back-end shall respond with a 404 error code when a page or route is not found.

5.2.2.11 The back-end shall respond with a 500 error code when there is an error in the client-side server.

5.2.2.12 The back-end shall respond with a 200 error code when an HTTP request is successfully made and returned.

#### 5.2.3 DATABASE

5.2.3.1 The database shall perform queries on stored data.

5.2.3.2 The database shall prevent errors from concurrent data modification.

5.2.3.3 The database shall perform basic statistical analysis on queried data.

5.2.3.4 The database shall generate aggregate data that can be used for reports.

5.2.3.5 The database shall have procedures for backing-up stored data.

5.2.3.6 The database shall be accessible only through an API.

#### 5.2.4 SYSTEM-WIDE

5.2.4.1 The system shall provide a means for retrieving lost password information.

5.2.4.2 The system shall provide a means for resetting user passwords.

5.2.4.3 The system shall provide a means for troubleshooting connection errors.

5.2.4.4 The system shall provide a means for monitoring vulnerabilities.

5.2.4.5 The system shall provide a means for creating a new user profile.

5.2.4.6 The system shall provide a means for editing existing user profile information.

5.2.4.7 The system shall provide a means for deleting existing user profile information.

5.2.4.8 The system shall have a means for communicating its current functional status to users.

5.2.4.9 The system shall provide a means for users to customize settings relevant to the front-end.

### 5.3 PERFORMANCE REQUIREMENTS

##### 5.3.1 SUCCESSFUL LOGIN IN <5 SECONDS: For a user with an existing account, login should take no longer than five seconds, ending at the homepage.

* 5.3.1.1 THIRD-PARTY LOGIN IN ~<7 SECONDS: For users logging in with Facebook, Twitter, or Google, login should take no longer than 7 seconds, not including time for the user to interact with the third-party environment.

* 5.3.1.2 CREATE AN ACCOUNT SUBMISSION IN <5 SECONDS: Users creating an account should not have to wait more than five seconds before an account is created and the user is logged in with that account.

##### 5.3.2 NEARLY INSTANTANEOUS NAVIGATION: There will be no delays in navigation of pages within "The Tube."

##### 5.3.3 USABILITY DESIGN PRINCIPLES: The GUI shall be user-friendly and easy to use, on both desktop and mobile.

* 5.3.3.1 FEEDBACK: The GUI shall always provide the user with feedback after any user interaction.

##### 5.3.4 ACCESSIBILITY: Minimum standard software requirements for users with disabilities shall be met.

* 5.3.4.1 VOICE NAVIGATION: Formats for verbal mouse-grid navigation will be incorporated into the front-end design.

* 5.2.4.2 COLOR: Colors chosen to differentiate "serials" will be interchangeable, to accommodate various color blindness types.

##### 5.3.5 SEARCH RESULTS IN <1 SECOND: The first results of a search should display within 1 second of initializing the search.

##### 5.3.6 OPTIMIZE STORAGE: The database subsystem should be able to store the maximum amount of data with the minimum amount of storage space.

##### 5.3.7 BANDWIDTH: The back-end should optimize use of available bandwidth for data transmission.

##### 5.3.8 NETWORK CONNECTION LOSS: The system should have default procedures for handling incomplete transactions during a network crash.

##### 5.3.9 MODULAR SOFTWARE: The system design will incorporate separate functionalities into independent, interchangeable modules, such that each is fully self-contained and is able to fully execute its functionality without the need for other modules.

##### 5.3.10 OPEN-ENDED SOFTWARE: The system will be designed using principles which will allow for easy modification and addition of software in the future.

##### 5.3.11 DATA MIGRATION: Data stored in the database will have the property of being easy to move to a different database software.

##### 5.3.12 BACK-UP: The database will immediately back-up data if any network or server issues are detected.

### 5.4 ENVIRONMENT REQUIREMENTS

#### 5.4.1 DEVELOPMENT ENVIRONMENT REQUIREMENTS

| Category | Requirement |
|---|---|
| Front-end | Material.io, Google Fonts, YouTube API, jQuery | 
| Server | Node.js, npm, Hapi, Joi, npm-pg, Chai, CodeCov, ESLint, Istanbul, Mocha, Mocha-Istanbul, Nodemon |
| Database | PostgreSQL |

#### 5.4.2 EXECUTION ENVIRONMENT REQUIREMENTS

| Category | Requirement |
|---|---|
| Frontend | I/O server-side environment and API |
| Server | Inexpensive third-party cloud server hosting |
| Database | Inexpensive third-party cloud database hosting |