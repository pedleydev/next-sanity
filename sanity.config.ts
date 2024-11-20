import { defineConfig } from 'sanity';
import {structureTool} from 'sanity/structure'
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "b3ukgl95",
  dataset: "production",
  title: "Ryan Pedley",
  apiVersion: "2024-11-18",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas }

});

export default config;