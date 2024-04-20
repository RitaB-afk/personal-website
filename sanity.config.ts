import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config= defineConfig({
    projectId: "29s1v8fj",
    dataset: "production",
    title:"My Personal Website",
    apiVersion: "2024-04-19",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types: schemas}
})

export default config