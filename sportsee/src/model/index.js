import * as apiService from "../service";
import * as mockService from "../mockService";
/**
 * service will either provide the server data or the mock service data
 */
const service =
  process.env.REACT_APP_MOCK_ACTIVE === "true" ? mockService : apiService;

/**
 * Creating a class that will ensure the good format of each data
 * Each function will format data from a specific fetch function
 */
export class Model {
  static async getUser(userId) {
    const result = await service.getUser(userId);
    return {
      id: result.id,
      userInfos: result.userInfos,
      score: (result.score || result.todayScore) * 100,
      keyData: result.keyData,
    };
  }
  static async getUserActivity(userId) {
    const result = await service.getUserActivity(userId);
    return {
      id: result.userId,
      sessions: result.sessions,
    };
  }
  static async getUserAvgSession(userId) {
    const result = await service.getUserAvgSession(userId);
    return {
      id: result.userId,
      sessions: result.sessions,
    };
  }
  static async getUserPerformance(userId) {
    const result = await service.getUserPerformance(userId);
    return {
      id: result.userId,
      kind: result.kind,
      data: result.data,
    };
  }
}
