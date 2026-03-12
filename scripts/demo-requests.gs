/**
 * AIDentist — Demo Request Sheet Handler
 * Deploy as: Extensions → Apps Script → Deploy → New deployment
 *   Type: Web app | Execute as: Me | Who has access: Anyone
 *
 * After deploying, copy the web app URL into NEXT_PUBLIC_SHEETS_ENDPOINT
 * in your Vercel environment variables (and local .env.local for dev).
 *
 * Sheet columns (auto-created on first submission):
 *   A: Timestamp       B: Full Name        C: Practice Name
 *   D: Email           E: Phone            F: # Providers
 *   G: Challenge       H: Best Time        I: Time Zone
 *   J: Notes           K: Submitted At (ISO)
 */

var SHEET_NAME = "Demo Requests";

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Practice Name",
      "Email",
      "Phone",
      "# Providers",
      "Primary Challenge",
      "Best Time",
      "Time Zone",
      "Notes",
      "Submitted At",
    ]);
    // Freeze header row and bold it
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 11).setFontWeight("bold");
  }

  return sheet;
}

// Handles POST from the demo form
function doPost(e) {
  try {
    var p = e.parameter;
    var sheet = getOrCreateSheet();

    sheet.appendRow([
      new Date(),
      p.fullName       || "",
      p.practiceName   || "",
      p.email          || "",
      p.phone          || "",
      p.numProviders   || "",
      p.primaryChallenge || "",
      p.bestTime       || "",
      p.timeZone       || "",
      p.notes          || "",
      p.submittedAt    || "",
    ]);

    // Optional: email notification on every new submission
    sendNotificationEmail(p);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required by Apps Script — returns 200 for CORS preflight
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(p) {
  var recipient = "demo@aidentist.com"; // change to your inbox
  var subject   = "New Demo Request: " + (p.practiceName || "Unknown Practice");
  var body = [
    "New demo request submitted via aidentist.com/demo",
    "",
    "Name:       " + (p.fullName || "—"),
    "Practice:   " + (p.practiceName || "—"),
    "Email:      " + (p.email || "—"),
    "Phone:      " + (p.phone || "—"),
    "Providers:  " + (p.numProviders || "—"),
    "Challenge:  " + (p.primaryChallenge || "—"),
    "Best Time:  " + (p.bestTime || "—"),
    "Time Zone:  " + (p.timeZone || "—"),
    "Notes:      " + (p.notes || "—"),
    "",
    "Submitted:  " + (p.submittedAt || new Date().toISOString()),
  ].join("\n");

  MailApp.sendEmail(recipient, subject, body);
}
