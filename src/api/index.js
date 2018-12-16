import firebase from "firebase";

// import users from "./db/users";
// import teams from "./db/teams";
// import events from "./db/events";

var usersRef = null;
var users = null;
var eventsRef = null;
var events = null;
var api_initialized = false;

function api_init() {
  if (!api_initialized) {
    var db = firebase.database();
    console.log("Initializing database");

    // Listen users data
    usersRef = db.ref("users");
    // usersRef.once("value").then(loadUsers);
    usersRef.on("value", function(snapshot) {
      users = snapshot.val();
      console.log(snapshot);
      console.log(snapshot.val());
    });
    console.log(users);

    // Listen events data
    eventsRef = db.ref("events");
    // eventsRef.once("value").then(loadEvents);
    eventsRef.on("value", function(snapshot) {
      events = snapshot.val();
      console.log(snapshot);
      console.log(snapshot.val());
    });
    console.log(events);

    api_initialized = true;
  }
}

export default {
  fetchUsers() {
    if (!api_initialized) {
      api_init();
    }
    return users;
  },
  fetchUser(userId) {
    if (!api_initialized) {
      api_init();
    }
    return users.find(user => user.id === Number(userId));
  },
  fetchEvents() {
    if (!api_initialized) {
      api_init();
    }
    return events;
  },
  fetchEvent(eventId) {
    if (!api_initialized) {
      api_init();
    }
    return events.find(event => event.id === Number(eventId));
  }
};
