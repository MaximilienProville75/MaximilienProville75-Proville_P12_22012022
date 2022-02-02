// import { getUser } from "../service";
import { getUser } from "../mockService";

export class Model {
  static async getUser(userId) {
    const result = await getUser(userId);
    return {
      id: result.id,
      keyData: result.keyData,
      score: (result.score || result.todayScore) * 100,
      userInfos: result.userInfos,
    };
  }
}
