/**
 * Fetch user data information
 * @param {string} userId
 * @returns user data
 */
const getUser = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}`);
    const formatedData = await res.json();
    return formatedData.data;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Fetch user activity data
 * @param {string} userId
 * @returns user activity data
 */
const getUserActivity = async (userId) => {
  try {
    const res = await fetch(`http://localhost:3000/user/${userId}/activity`);
    const formatedData = await res.json();
    return formatedData.data;
  } catch (err) {
    console.log(err);
  }
};

/**
 * Fetch user average session data
 * @param {string} userId
 * @returns user average session data
 */
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

/**
 * Fetch user performance data
 * @param {string} userId
 * @returns user performance data
 */
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
