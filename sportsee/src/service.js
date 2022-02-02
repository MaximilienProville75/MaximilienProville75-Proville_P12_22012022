const getUser = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}`);
    const formatedData = await res.json();
    return formatedData.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserActivity = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}/activity`);
    const formatedData = await res.json();
    return formatedData.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserAvgSession = async (userId) => {
  try {
    const res = await fetch(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const formatedData = await res.json();
    return formatedData.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserPerformance = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}/performance`);
    const formatedData = await res.json();
    return formatedData.data;
  } catch (err) {
    console.log(err);
  }
};

export { getUser, getUserActivity, getUserAvgSession, getUserPerformance };
