import { google } from "googleapis";

export async function getGoogleSheetsData(id, range) {
  const auth = await google.auth.getClient({
    projectId: "gdb-management",
    credentials: {
      type: "service_account",
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: id,
    range: range,
  });

  return data.data.values;
}