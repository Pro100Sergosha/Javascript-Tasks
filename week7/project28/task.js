const prompt = require("prompt-sync")();

function mimeType() {
  const type = prompt("File name: ");
  const types = {
    gif: "image/gif",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    pdf: "application/pdf",
    txt: "text/plain",
    zip: "application/zip",
  };
  if (types.hasOwnProperty(type.split(".").pop())) {
    return types[type.split(".").pop()];
  }
  return "application/octet-stream";
}

console.log(mimeType());
