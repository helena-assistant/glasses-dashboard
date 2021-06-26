import http from "src/infra/http";

export const getIntents = () => {
  const API_URL = process.env.GLASSES_API_URL;
  const { get } = http(API_URL);

  try {
    return get("/intents/list");
  } catch (err) {
    console.error("Error while getting intents");
  }
};
