import http from "src/infra/http";

export const listMessagesByIntent = (mainIntent: string) => {
  const API_URL = process.env.GLASSES_API_URL;
  const { get } = http(API_URL);

  const query = new URLSearchParams({
    mainIntent,
  });

  try {
    return get(`/list${query}`);
  } catch (err) {
    console.error("Error while listing messages by intents");
  }
};
