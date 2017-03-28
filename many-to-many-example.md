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
| username: String | id: bigint | id: String (YouTube) | date_created: DateTime | date_created: DateTime |
| password: String | videos: Video[] | vote_count: bigint | count: bigint | comment: String |
| interests: Topic[] | main_topic: Topic | use_count: bigint | null | comment_replies: maybe CommentReply |
| favorites: Serial[] | creator: User | null | null | null |
| date_created: DateTime | contributors: User[] | null | null | null |
| user_type: String | views: bigint | null | null | null |
| email: String | description: String | null | null | null |
| null | comments: CommentThread[] | null | null | null |
| null | date_created: DateTime | null | null | null |
| null | fav_count: bigint | null | null | null |
