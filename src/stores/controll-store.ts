import { CountryInfo } from "../api/apiService";
import { observable, action, makeObservable } from "mobx";

class ControllStore {
  @observable value: string;
  @observable searchResults: CountryInfo[];
  @observable isSearchResultLoading: boolean;

  constructor() {
    this.value = "";
    this.searchResults = [];
    this.isSearchResultLoading = false;
    makeObservable(this);
  }

  @action("change input")
  onValueChanged(inputValue: string) {
    this.value = inputValue;
  }
  @action("show alert with current value")
  callAllertWithCurrentValue() {
    alert(this.value);
  }

  @action("show alert if value is nuber")
  callAllertIfNumber() {
    const stringWithNoSpaces = this.value.replace(/ /g, "");

    if (stringWithNoSpaces !== "" && !isNaN(Number(stringWithNoSpaces))) {
      alert(stringWithNoSpaces);
    }
  }

  @action("start result request")
  startSearchResultLoading() {
    this.isSearchResultLoading = true;
  }
  @action("end result request")
  stopSearchResultLoading() {
    this.isSearchResultLoading = false;
  }

  @action("set search result")
  setSearchResult(result: CountryInfo[]) {
    console.log(result);
    this.searchResults = result;
  }
}

export default new ControllStore();
