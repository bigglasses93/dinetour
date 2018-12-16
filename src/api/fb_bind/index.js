// Binding Firebase database to Vuex Store

var bind_initialized = false;

export default {
  init(firebase, store) {
    if (!bind_initialized) {
      var db = firebase.database();
      console.log("Initializing database");

      // Listen users data
      var usersRef = db.ref("users");
      // usersRef.once("value").then(loadUsers);
      usersRef.on("value", function(snapshot) {
        console.log("Reading users");
        console.log(snapshot);
        console.log(snapshot.val());
        store.commit("users/RECEIVE_USERS", snapshot.val());
      });

      // Listen events data
      var eventsRef = db.ref("events");
      // eventsRef.once("value").then(loadEvents);
      eventsRef.on("value", function(snapshot) {
        console.log("Reading events");
        console.log(snapshot);
        console.log(snapshot.val());
        var events = Object.keys(snapshot.val()).map(function(key) {
          return snapshot.val()[key];
        });
        for (var event in events) {
          console.log(event);
        }
        store.commit("events/RECEIVE_EVENTS", events);
      });

      bind_initialized = true;
    }
  }
};
