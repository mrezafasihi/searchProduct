import axios from "axios";

const API_KEY = "bf96b168-366c-4092-96f9-09e61667442b";
const BASE_URL = `https://api.mouser.com/api/v1.0/search/keyword?apiKey=${API_KEY}`;

export const fetchSearch = async ({ valueInputSearcch }) => {
  const response = await axios.post(BASE_URL, {
    SearchByKeywordRequest: {
      keyword: valueInputSearcch,
      records: 0,
      MaxLength:80,
      startingRecord: 0,
      searchOptions: "string",
      searchWithYourSignUpLanguage: "string",
    },
  });
  return response.data;
};
