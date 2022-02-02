import * as apiService from "../service";
import * as mockService from "../mockService";

const service =
  process.env.REACT_APP_MOCK_ACTIVE === "true" ? mockService : apiService;

export class Model {
  static async getUser(userId) {
    const result = await service.getUser(userId);
    return {
      id: result.id,
      keyData: result.keyData,
      score: (result.score || result.todayScore) * 100,
      userInfos: result.userInfos,
    };
  }
}
