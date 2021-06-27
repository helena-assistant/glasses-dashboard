import http from "src/infra/http";
import { Intent } from "src/model";

export const getAvailableIntents = async (): Promise<Intent[]> => {
  try {
    const { body: availableIntents } = await http.get<Intent[]>(
      "/intents/list"
    );
    return availableIntents;
  } catch (err) {
    console.error("Error while getting intents");
    return [];
  }
};
