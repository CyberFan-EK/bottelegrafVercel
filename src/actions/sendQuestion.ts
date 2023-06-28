const { GoogleSpreadsheet } = require('google-spreadsheet');
const {google} = require('googleapis');

const EMAIL_TOKEN = process.env.EMAIL_TOKEN || '';
const KEY_TOKEN = process.env.KEY_TOKEN || '';

console.log("sdjhskdjh " +KEY_TOKEN)
    module.exports = (nameUser: string, phoneUser: string, questionUser: string) => {

      (async (nameUser, phoneUser, questionUser) => {
        const auth = new google.auth.JWT({
          email: EMAIL_TOKEN,
          key: KEY_TOKEN,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        })
        const sheet = google.sheets("v4")
        const time = new Date();
            let curr_date = time.getDate();
           let curr_month = time.getMonth() + 1;
            let curr_year = time.getFullYear();
            let fulldata = curr_year + "-" + curr_month + "-" + curr_date


        await sheet.spreadsheets.values.append({
          spreadsheetId: '1yWrjwjbcQtyFVHiyIJhqGq72D8LMvmddQLO7nn0U1NE',
          auth: auth,
          range: "Лист1",
          valueInputOption: "RAW",
          requestBody: {
            values: [[nameUser, phoneUser,questionUser, fulldata ]]
          }
        })
      })(nameUser, phoneUser, questionUser)
      phoneUser
    };
    
  