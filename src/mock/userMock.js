import mock from "../utils/mock";

// mock.onPost("/api/home/login").reply(200, {
//   id: 1,
//   username: "darthvader",
//   email: "darthvader@empire.com",
//   password: "padme",
// });

mock.onPost("/api/home/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== "darthvader@empire.com" || password !== "padme") {
    return [400, { message: "Email ou senha inválidos." }];
  }

  const user = {
    id: 1,
    name: "Darth Vader",
    email: "darthvader@empire.com",
  };

  return [200, { user }];
});
