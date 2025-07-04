import yaml from "js-yaml";
import RefParser from "@apidevtools/json-schema-ref-parser";
export async function loadAndDereferenceYaml(yamlData) {
    const raw = yaml.load(yamlData);
    const data = (await dereferenceSchema(raw));
    return data;
}
async function dereferenceSchema(schema) {
    try {
        const dereferencedSchema = await RefParser.dereference(schema);
        return dereferencedSchema;
    }
    catch (error) {
        console.error("Error dereferencing schema:", error);
    }
}
