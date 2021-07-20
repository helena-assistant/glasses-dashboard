import http from "src/infra/http";
import { Rate } from "src/model";

export const listRatings = async (): Promise<Rate[]> => {
  try {
    const { body: ratings } = await http.get<Rate[]>(`/rate`);
    const orderedRatings = ratings.sort((rateA, rateB) => rateA.pk - rateB.pk);
    return orderedRatings;
  } catch (err) {
    console.error("Error while listing ratings");
    return [];
  }
};
