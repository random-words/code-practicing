async function foo() {
  const token = await fetch("my-api.com/me");
  const user = await fetch(`my-api.com/profile?token=${token}`);
  const friends = await fetch(`my-api.com/users/${user.id}/friends`);
  return friends;
}

foo().then(console.log).catch(console.error);

// фактично то, шо просять по заваднню
