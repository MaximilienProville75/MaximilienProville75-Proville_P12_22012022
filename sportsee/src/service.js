const getUser = (userId) => {
  return fetch(`http://localhost:3000/user/${userId}`).then((response) =>
    response.json()
  );
};

export { getUser };
