import { google } from 'googleapis'
import * as credentials from '../credentials.json'

export default async function getAuth(sheetName: string) {
  const auth = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  )

  const googleSheets = google.sheets({ version: 'v4', auth: auth })

  const spreadsheetId = '1TIHRPQIc7F16dbN0giJaix9w5fe2auCd_jPBinLAWUo'

  const getRows = await googleSheets.spreadsheets.values.get({
    spreadsheetId,
    range: sheetName
  })
  
  return getRows.data
}