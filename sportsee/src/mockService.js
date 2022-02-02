const getUser = async (userId) => {
  return new Promise((resolve) => {
    resolve({
      id: 12,
      userInfos: {
        firstName: "Mock Karl",
        lastName: "Dovineau",
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    });
  });
};

export { getUser };
