const fs = require("fs/promises");
// const ppaath = './text.txt'
const path = "./text.txt";

const file = async ({ action, data }) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(path, "utf-8");
      console.log(text);
      break;
    case "add":
      const addtext = await fs.appendFile(path, data);
      console.log(addtext);
      break;
    default:
      console.log("nu nu");
  }
};

// file({ action: "read" });
file({ action: "add", data: "\noggggo" });
