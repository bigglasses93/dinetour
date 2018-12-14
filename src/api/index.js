import users from "./db/users";
import teams from "./db/teams";
import events from "./db/events";

export default {
  fetchUsers() {
    return users;
  },
  fetchUser(userId) {
    return users.find(user => user.id === Number(userId));
  },
  fetchEvents() {
    return events;
  },
  fetchEvent(eventId) {
    return events.find(event => event.id === Number(eventId));
  }
};
