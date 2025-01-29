import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Flow Distribution API",
    description: "APIs for assigning users to astrologers",
  },
  host: "localhost:6000",
};

const outputFile = "./swagger-output.json";

const routes = ["./index.js"];

swaggerAutogen()(outputFile, routes, doc);
