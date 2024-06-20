// import * as httpRequest from "~/ultis/httpRequest";

// export const search = async (q, type = "less") => {
//   try {
//     const res = await httpRequest.get("users/search", {
//       params: {
//         q,
//         type,
//       },
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };
import * as httpRequest from "~/ultis/httpRequest";

export const search = async (q, type = "less") => {
  try {
    const res = await httpRequest.get("users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
