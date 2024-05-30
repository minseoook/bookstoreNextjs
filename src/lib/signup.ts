export const signup = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:9999/users/join", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
    credentials: "include",
  });

  return response;
};
