const login = async () => {
  const credentials = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });
  const user = await res.json();

  console.log("user", user);
};

login();
