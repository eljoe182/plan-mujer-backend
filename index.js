import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

function main() {
  app.listen(process.env.PORT || "3000", () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
}

main();
