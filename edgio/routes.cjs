import { Router } from "@edgio/core";

export default new Router()
  .static("dist", { ignore: "!**/^/assets(/|$)" })
  .fallback(({ renderWithApp }) => {
    renderWithApp();
  });
