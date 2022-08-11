const http = require("http");

const server = http.createServer((request, response) => {
  
  //Verificação da URL
  if(request.url === "/") {
    if(request.method === "GET")
    return response.end("App is on!");
  }
});

server.listen(4080, () => console.log("Server is in PORT 4080"));