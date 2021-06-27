import http from "src/infra/http";
import { Message } from "src/model";

export const listMessagesByIntent = async (
  mainIntent: string
): Promise<Message[]> => {
  const query = new URLSearchParams({
    mainIntent,
  });

  try {
    const { body: messages } = await http.get<Message[]>(`/list?${query}`);
    return messages;
  } catch (err) {
    console.error("Error while listing messages by intents");
    return [];
  }
};
