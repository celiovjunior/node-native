const http = require("http");
const { randomUUID }  = require("crypto");

const users = [];

const server = http.createServer((request, response) => {  
  if(request.url === "/users") {
    if(request.method === "GET") {
      return response.end("App is on!")
    }
    if(request.method === "POST") {
      request.on("data", (data) => {

        const dataUser = JSON.parse(data);

        const user = {
          id: randomUUID(),
          ...dataUser
        }

        users.push(user);

      });

      return response.end("POST method working!");
    }
  }
});

server.listen(4080, () => console.log("Server is in PORT 4080"));