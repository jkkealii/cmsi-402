# video

| id | name |
| -- | -- |
| 1 | "hi" |
| 2 | "bye" |

# serial

| id | name |
| -- | -- |
| 1 | "WEWWE" |
| 2 | "GLJ" |


# match

| id | video_id | serial_id |
| -- | -- | -- |
| 1 | 1 | 1 |

# classes

| User | Serial | Video | Topic | CommentThread |
| -- | -- | -- | -- | -- |
| name: String | name: String | name: String | name: String | user: User |
| username: String | id: String | id: String (YouTube) | date_created: date? | date_created: date? |
| password: String | videos: Video[] | vote_count: long | null | comment: String |
| interests: Topic[] | main_topic: Topic | null | null | comment_replies: maybe CommentReply |
| favorites: Serial[] | other_topics: Topic[] | null | null | null |
| date_created: date? | creator: User | null | null | null |
| type: String | contributors: User[] | null | null | null |
| email: String | views: long | null | null | null |
| null | description: String | null | null | null |
| null | comments: CommentThread[] | null | null | null |
| null | date_created: date? | null | null | null |
