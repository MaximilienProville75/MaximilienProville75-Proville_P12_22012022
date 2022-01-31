const getUser = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getUserActivity = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}/activity`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getUserAvgSession = async (userId) => {
  try {
    const res = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getUserPerformance = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}/performance`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export { getUser, getUserActivity, getUserAvgSession, getUserPerformance };
