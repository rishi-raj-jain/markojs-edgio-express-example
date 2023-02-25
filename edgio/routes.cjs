import { Router } from "@edgio/core";

export default new Router()
  .static("dist", { glob: "assets/*" })
  .fallback(({ renderWithApp }) => {
    renderWithApp();
  });
