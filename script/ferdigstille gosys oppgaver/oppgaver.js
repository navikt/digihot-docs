const fs = require("fs")

const data = fs.readFileSync("/Users/mats/ws/tmp/oppgaver.json", "utf8")
console.log("data", data)
console.log(
  JSON.stringify(
    JSON.parse(data).oppgaver.map((oppgave) => ({ id: oppgave.id, versjon: oppgave.versjon })),
  ),
)
