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
| id: integer | id: integer | id: integer | id: integer | id: integer
| name: String | name: String | name: String | name: String | op: User |
| username: String | fav_count: bigint | youtube_id: String | count: bigint | comment_replies: maybe CommentReply |
| password: String | videos: Video[] | vote_count: bigint | createdAt: date | comment: String |
| interests: Topic[] | topic: Topic | use_count: bigint | updatedAt: date | createdAt: date |
| favorites: Serial[] | creator: User | createdAt: date | null | updatedAt: date |
| serials: Serial[] | contributors: User[] | updatedAt: date | null | null |
| user_type: Enum | views: bigint | null | null | null |
| email: String | description: String | null | null | null |
| createdAt: date | comments: CommentThread[] | null | null | null |
| updatedAt: date | createdAt: date | null | null | null |
| null | updatedAt: date | null | null | null |