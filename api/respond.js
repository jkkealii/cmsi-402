var respond = {
    failedToFindEvents: function (res) {
        res({
            statusCode: 500,
            message: "Unable to retrieve the list of events!"
        }).code(500);
    },
    returnEvents: function (res, events) {
        var code = events.length ? 200 : 404;
        res({
            statusCode: code,
            message: events.length ? "Success finding events!" : "There are no events currently!",
            events: events
        }).code(code);
    },
    failedToCreateEvent: function (res) {
        res({
            statusCode: 500,
            message: "Unable to create event!"
        }).code(500);
    },
    createdEvent: function (res, result) {
        res({
            statusCode: 201,
            message: "Success creating event!",
            result: result
        }).code(201);
    },
    failedToDeleteEvent: function (res) {
        res({
            statusCode: 500,
            message: "Unable to delete event!"
        }).code(500);
    },
    deletedEvent: function (res, result) {
        var code = result.result.n ? 200 : 404;
        res({
            statusCode: code,
            message: result.result.n ? "Success deleting event!" : "No event found to delete!",
            result: result.result
        }).code(code);
    },
    failedToGetEvent: function (res) {
        res({
            statusCode: 500,
            message: "Unable to find event!"
        }).code(500);
    },
    gotEvent: function (res, event) {
        var code = event ? 200 : 404;
        res({
            statusCode: code,
            message: event ? "Success finding event!" : "Event not found!",
            event: event
        }).code(code);
    },
    failedToUpdateEvent: function (res) {
        res({
            statusCode: 500,
            message: "Unable to update event!"
        }).code(500);
    },
    updatedEvent: function (res, result) {
        var code = result.result.n ? 200 : 404;
        res({
            statusCode: code,
            message: result.result.n ? "Success updating event!" : "No event found to update!",
            result: result.result
        }).code(code);
    },
    failedToGetMembers: function (res) {
        res({
            statusCode: 500,
            message: "Unable to retrieve the list of members!"
        }).code(500);
    },
    gotMembers: function (res, members) {
        var code = members.length ? 200 : 404;
        res({
            statusCode: code,
            message: members.length ? "Success finding members!" : "There are no members currently!",
            members: members
        }).code(code);
    },
    failedToCreateMember: function (res) {
        res({
            statusCode: 500,
            message: "Unable to create member!"
        }).code(500);
    },
    createdMember: function (res, result) {
        res({
            statusCode: 201,
            message: "Success creating member!",
            result: result
        }).code(201);
    },
    failedToDeleteMember: function (res) {
        res({
            statusCode: 500,
            message: "Unable to delete member!"
        }).code(500);
    },
    deletedMember: function (res, result) {
        var code = result.result.n ? 200 : 404;
        res({
            statusCode: code,
            message: result.result.n ? "Success deleting member!" : "No member found to delete!",
            result: result.result
        }).code(code);
    },
    failedToGetMember: function (res) {
        res({
            statusCode: 500,
            message: "Unable to find member!"
        }).code(500);
    },
    gotMember: function (res, member) {
        var code = member ? 200 : 404;
        res({
            statusCode: code,
            message: member ? "Success finding member!" : "Member not found!",
            member: member
        }).code(code);
    },
    failedToUpdateMember: function (res) {
        res({
            statusCode: 500,
            message: "Unable to update member!"
        }).code(500);
    },
    updatedMember: function (res, result) {
        var code = result.result.n ? 200 : 404;
        res({
            statusCode: code,
            message: result.result.n ? "Success updating member!" : "No member found to update!",
            result: result.result
        }).code(code);
    },
    failedToCalculateHours: function (res, err) {
        res({
            statusCode: 500,
            message: "Unable to calculate member hours!",
            error: err
        }).code(500);
    },
    calculatedHours: function (res, result) {
        res({
            statusCode: 200,
            message: "Success calculating member hours!",
            result: result
        }).code(200);
    },
    failedToGetMembersEvents: function (res, err) {
        res({
            statusCode: 500,
            message: "Unable to get member's events!",
            error: err
        }).code(500);
    },
    gotMembersEvents: function (res, events, member) {
        var code = events.length ? 200 : 404;
        res({
            statusCode: code,
            message: events.length ? "Success finding member's events!" : "There are no events for member currently!",
            events: events,
            member: member
        }).code(code);
    },
    failedToGetUsers: function (res, err) {
        res({
            statusCode: 500,
            message: "Unable to get users!",
            error: err
        }).code(500);
    },
    gotUserList: function (res, users) {
        var code = users.length ? 200 : 404;
        res({
            statusCode: code,
            message: users.length ? "Success finding users!" : "There are no users currently!",
            users: users
        }).code(code);
    },
    failedToCreateUser: function (res, err) {
        res({
            statusCode: 500,
            message: "Unable to create user!",
            error: err
        }).code(500);
    },
    createdUser: function (res, result) {
        res({
            statusCode: 201,
            message: "Success creating user!",
            result: result
        }).code(201);
    },
    failedToGetUser: function (res, err) {
        res({
            statusCode: 500,
            message: "Unable to find user!",
            err: err
        }).code(500);
    },
    userPassNoMatch: function (res) {
        res({
            statusCode: 401,
            message: "Username or Password do not match!"
        }).code(401);
    },
    failedToComparePasswords: function (res, err) {
        res({
            statusCode: 500,
            message: "Unable to compare passwords!",
            error: err
        }).code(500);
    }
};

module.exports = respond;