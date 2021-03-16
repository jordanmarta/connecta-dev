import mock from "../utils/mock";

mock.onPost("/api/home/me").reply(200, {
  user: {
    id: 1,
    name: "Darth Vader",
    username: "darthvader",
    email: "darthvader@empire.com",
    avatar: "/images/avatars/avatar_1.jpg",
  },
});

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "darthvader@empire.com" || password !== "padme") {
    return [400, { message: "Email ou senha inválidos." }];
  }

  const user = {
    id: 1,
    name: "Darth Vader",
    email: "darthvader@empire.com",
    avatar: "/images/avatars/avatar_1.jpg",
  };

  return [200, { user }];
});
