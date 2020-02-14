const whosOnline = friends => {
  let output = {};
  console.log(friends[1].status);
  friends.forEach(e => {
    if(e.status === "online" && e.lastActivity > 10)
  });
};

whosOnline([
  {
    username: "David",
    status: "online",
    lastActivity: 10
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104
  }
]);
