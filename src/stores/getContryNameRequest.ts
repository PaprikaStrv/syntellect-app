import { getCountryByName } from "../api/apiService";
import controllStore from "./controll-store";

export const getCountryByNameRequest = async (name: string) => {
  controllStore.startSearchResultLoading();
  const result = await getCountryByName(name);
  controllStore.setSearchResult(result);
  controllStore.stopSearchResultLoading();
};
