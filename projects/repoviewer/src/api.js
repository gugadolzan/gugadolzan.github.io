import { request } from "https://cdn.skypack.dev/@octokit/request";

// errorMsg: output a formatted error message to the screen
const errorMsg = (msg) => alert(`[Error] ${msg}`);

// api: object that handles GitHub API calls
const api = {
  // sets the global options for API calls
  options: {
    method: 'GET',
    headers: {
      authorization: 'token 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',
    },
    org: 'tryber',
  },
  // query(query): queries the API and returns the response as a JSON-formatted object
  query: async (query) => {
    try {
      const response = await request(query, api.options);
      if (response.data.message === 'Not Found') {
        throw new Error('No result found!');
      }
      return response.data;
    } catch (error) {
      errorMsg(error);
      return null;
    }
  },
};

export { api as default };