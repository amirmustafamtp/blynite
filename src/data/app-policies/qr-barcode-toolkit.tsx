import type { AppPrivacyPolicy } from "./types";

// Prepared from the supplied policy text. Internal reviewer notes are not included.
export const qrBarcodeToolkitPolicy: AppPrivacyPolicy = {
  slug: "qr-barcode-toolkit",
  name: "QR & Barcode Toolkit",
  platform: "Android",
  version: "0.4.0",
  contactEmail: "support@blynite.com",
  summary:
    "How QR & Barcode Toolkit handles scanning, generated codes, local history, and content you choose to share.",
  status: "public-preview",
  hideDraftNotice: true,
  effectiveDate: null,
  sections: [
    {
      id: "who-is-responsible-and-what-this-policy-covers",
      title: "Who is responsible and what this policy covers",
      content: (
        <>
          <p>
            {
              "This policy describes how this version of QR & Barcode Toolkit handles camera images, scanned and generated content, local history and settings, and content you choose to copy, export or share. Third-party SDK behavior is addressed separately below. This version does not support account creation, login with an external account, or app-managed cloud history."
            }
          </p>
        </>
      ),
    },
    {
      id: "camera-permission-and-scanning",
      title: "Camera permission and scanning",
      content: (
        <>
          <p>
            {
              "The app asks for camera permission when you choose to allow scanning. The camera supplies a live preview and images for recognizing QR codes and supported barcodes. You can decline permission and still use features that do not need the camera, including QR generation. You can change camera permission in Android settings."
            }
          </p>
          <p>
            {
              "The scanner is configured to use the camera while the scanning screen is active in the foreground. Leaving the screen, showing a result or pausing the app releases the camera resources. Analysis uses the camera frame, not only the visible target outline, so avoid pointing the camera at information you do not intend to process."
            }
          </p>
          <p>
            {"The app does not save camera frames as photographs or videos. "}
            <strong>{"Decoded text is different from camera images:"}</strong>
            {
              " an accepted scan is automatically added to local history, subject to the Wi-Fi rules below. Google's published description of ML Kit image processing and the remaining diagnostic questions are in section 7."
            }
          </p>
        </>
      ),
    },
    {
      id: "qr-and-barcode-content",
      title: "QR and barcode content",
      content: (
        <>
          <p>
            {
              "The app processes the contents of codes you scan and the information you enter to generate a QR code. Content may include text, website addresses, phone numbers, email addresses and messages, contact details, or Wi-Fi network information. Any other personal information contained in that text may also be processed."
            }
          </p>
          <p>
            {
              "QR generation uses local encoding. Scanning uses a bundled on-device barcode model; these content-processing functions can work without a network connection. This does not mean every SDK function or external app action is network-free."
            }
          </p>
          <p>
            {
              "Contact, email and phone fields come from your input or scanned content. The app does not import your address book, email inbox or call history. A scan does not automatically open a website, dial a number, send an email, join a Wi-Fi network or add a contact."
            }
          </p>
        </>
      ),
    },
    {
      id: "history-favorites-and-local-settings",
      title: "History, favorites and local settings",
      content: (
        <>
          <p>
            {
              "An accepted scan and each successful generation are automatically saved to the app's private local history. Typing in a generator form does not by itself create a history record. Records contain the decoded or generated content, subject to Wi-Fi redaction, along with a local record ID, creation time, source, code/content type, preview label and favorite status."
            }
          </p>
          <p>
            {
              "For non-Wi-Fi content, the full text can be stored, including personal contact or email-message details. Generic contact/email labels in the list do not remove that underlying content. History search runs against the local records; the app does not maintain a separate search-history log. Favorites refer to the same records rather than separate copies. Eligible saved generated codes can be regenerated locally from their saved content."
            }
          </p>
          <p>
            {
              "The app also stores your theme choice and a marker that camera permission has been requested. Live generator drafts and scan results are held in memory; they are not a separate draft-storage service. Saved history remains after the live screen is closed."
            }
          </p>
        </>
      ),
    },
    {
      id: "wi-fi-qr-codes-and-passwords",
      title: "Wi-Fi QR codes and passwords",
      content: (
        <>
          <p>
            {
              "Generating a protected Wi-Fi QR code requires the network details and password you enter. The live QR image and original content necessarily contain the information needed by a receiving reader, including the password where supplied."
            }
          </p>
          <p>
            {
              "For content recognized as Wi-Fi, the app excludes the password and original payload from history. It retains only a parseable network name and security type, or a generic Wi-Fi label. A network name can itself be identifying. Wi-Fi history cannot regenerate a QR code, including for open networks; enter the network details again, including a password when required, to create a new code."
            }
          </p>
          <p>
            {
              "This redaction applies to history, not to the original live QR, clipboard or exported files. Text that is not recognized as Wi-Fi is handled as ordinary content; the app is not a general-purpose detector of secrets in arbitrary text. Review what you copy, save or share."
            }
          </p>
        </>
      ),
    },
    {
      id: "copying-exporting-sharing-and-opening-content",
      title: "Copying, exporting, sharing and opening content",
      content: (
        <>
          <p>{"These actions happen when you request them:"}</p>
          <ul>
            <li>
              <strong>{"Copy"}</strong>
              {
                " puts the complete selected text on the Android clipboard. On Android 13 and later, the app marks it as sensitive, but Android and other apps control subsequent clipboard behavior."
              }
            </li>
            <li>
              <strong>{"Share text or a QR image"}</strong>
              {
                " passes the selected content to an app you choose. Image sharing uses a temporary read grant to an app-private PNG. The receiving app may retain or transmit its own copy."
              }
            </li>
            <li>
              <strong>{"Save PNG"}</strong>
              {
                " writes a new image through Android's document picker to the location/provider you choose. A provider may store or synchronize files in the cloud."
              }
            </li>
            <li>
              <strong>{"Open a link, dialer or email app"}</strong>
              {
                " hands the validated destination to another app. That app handles any later network request, call or message under its own controls."
              }
            </li>
          </ul>
          <p>
            {
              "Wi-Fi QR images or original text shared through these actions can contain credentials. History deletion does not remove clipboard contents, saved documents or copies held by another app. Other providers' and recipients' privacy practices apply to their handling of the content."
            }
          </p>
        </>
      ),
    },
    {
      id: "third-party-libraries-diagnostics-and-possible-transmissions",
      title: "Third-party libraries and SDK data handling",
      content: (
        <>
          <p>
            {
              "The app uses Google's bundled ML Kit Barcode Scanning SDK, version 17.3.0. "
            }
            <a href="https://developers.google.com/ml-kit/terms">
              {"Google's ML Kit privacy documentation"}
            </a>
            {
              " describes recognition as on-device processing: input images/text and recognition results are not sent to Google servers by ML Kit. The app separately stores accepted results in local history and lets you choose the copying, exporting and sharing actions described above."
            }
          </p>
          <p>
            {"Google also documents SDK metrics sent to Google. Based on "}
            <a href="https://developers.google.com/ml-kit/android-data-disclosure">
              {"Google's SDK disclosure"}
            </a>
            {
              ", our Data safety answers include these types as data the SDK may collect and share with Google:"
            }
          </p>
          <ul>
            <li>
              <strong>{"Diagnostics:"}</strong>
              {
                " technical information such as device/model and Android version, available accelerators, app package/version, processing times, API configuration, input/output sizes, SDK versions and error codes. Input/output sizes describe amounts of data rather than QR contents."
              }
            </li>
            <li>
              <strong>{"Device or other IDs:"}</strong>
              {
                " an identifier associated with the SDK's installation in the app. This does not require an app account."
              }
            </li>
            <li>
              <strong>{"App interactions:"}</strong>
              {
                " SDK feature-use events, such as initialization, barcode detection and resource release. This describes SDK utilization, without asserting an app-wide record of screen taps or uploading your local search queries."
              }
            </li>
          </ul>
          <p>
            {
              "Google describes using SDK metrics to assess, maintain and improve its APIs and detect misuse or abuse. Our declaration reflects "
            }
            <strong>
              {"analytics and fraud prevention, security and compliance"}
            </strong>
            {
              " purposes. Sharing here includes sending these metrics to Google. Google's separate statement that it does not transfer the listed data onward to third parties does not remove that initial transfer from our disclosure."
            }
          </p>
          <p>
            {"Google states that the listed metric transmissions use "}
            <strong>{"HTTPS encryption in transit"}</strong>
            {
              ". This statement concerns the SDK metrics; local storage and other apps or document providers have the separate boundaries described in this policy."
            }
          </p>
          <p>
            {"The app has "}
            <strong>{"no setting to turn off SDK diagnostics"}</strong>
            {
              ", and our declaration treats this handling as required and non-ephemeral. We do not promise that the records exist only in memory during a scan. Declining camera access is not established as disabling all SDK initialization or metric handling. We have not established a specific SDK/server retention period or a Blynite-operated mechanism for deleting Google-held SDK records."
            }
          </p>
          <p>
            <strong>{"Draft evidence qualification:"}</strong>
            {
              " the reviewed release does not request Internet permission. We have not verified which documented metrics actually reach Google under that configuration, including possible handling through another process. The disclosure uses Google's documented SDK baseline rather than promising that transmission is impossible or claiming a successful upload was observed. Exact delivery paths and retention remain technical follow-ups."
            }
          </p>
          <p>
            {
              "The app also uses CameraX, ZXing Core, Room and DataStore. ML Kit includes Play-services, DataTransport and Firebase component/encoding support. There is no AdMob or app-added Firebase Analytics/Crashlytics integration in this version. The SDK metrics described here remain part of the disclosure. Barcode auto-zoom is not enabled."
            }
          </p>
        </>
      ),
    },
    {
      id: "retention-and-deletion",
      title: "Retention and deletion",
      content: (
        <>
          <p>
            {
              "History has no automatic expiry. You can delete an individual record from History or Favorites. Removing favorite status alone does not delete it. "
            }
            <strong>{"Clear history preserves favorites"}</strong>
            {
              "; delete those records individually or remove favorite status before clearing if you want them removed too."
            }
          </p>
          <p>
            {
              "Clearing the app's storage through Android settings or uninstalling removes its private local data. These controls do not delete user-saved images, clipboard contents, recipient copies or any data a third-party service may hold. Local database deletion is not a promise of forensic secure erasure."
            }
          </p>
          <p>
            {
              "Temporary shared PNGs become eligible for cleanup after one hour. Removal is best effort: cleanup runs when the file service starts, on later shares, and through a timer while the process remains alive. If Android stops the process, files may remain until a later cleanup or Android cache reclamation. There is no guaranteed one-hour destruction deadline."
            }
          </p>
          <p>
            {
              "The app is configured to exclude its private data from Android cloud backup and device transfer. This is not a guarantee about every device manufacturer's behavior or files managed by another provider."
            }
          </p>
          <p>
            {
              "The local controls above do not provide a verified way to request deletion of the SDK metrics held by Google or remove records held by another process. We do not claim that those metrics are automatically deleted within 90 days. The support-record periods in section 12 apply to Blynite-controlled correspondence and case records, not to app history or Google-held SDK information."
            }
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "Security",
      content: (
        <>
          <p>
            {
              "History and preferences use Android's app-private storage. The history database has no additional encryption implemented by the app and should not be treated as a password vault. Android/device protections apply. Shared image access is limited through a scoped content provider and temporary read permission; recipients can still copy what they receive."
            }
          </p>
          <p>
            {
              "No system can be described here as guaranteeing complete confidentiality or secure erasure. Google's SDK transport statement in section 7 does not establish encryption for every recipient/provider or for the local history database. Use care with sensitive information and with anyone who can access your device or exported QR images."
            }
          </p>
        </>
      ),
    },
    {
      id: "your-controls",
      title: "Your controls",
      content: (
        <>
          <p>
            {
              "You can deny or revoke camera permission, choose whether to copy/export/share/open content, manage individual history records and favorites, clear non-favorite history, and clear app storage through Android. Review a QR's content before exporting it. The current app does not provide a separate SDK-diagnostics preference; choosing not to scan is not established as a way to disable all SDK diagnostic activity."
            }
          </p>
        </>
      ),
    },
    {
      id: "children-s-privacy",
      title: "Children's privacy",
      content: (
        <>
          <p>
            {
              "QR & Barcode Toolkit is intended for people aged 13 and over and is not intended for children under 13. The sections of this policy about local storage, sharing and third-party SDKs also apply to users aged 13–17."
            }
          </p>
          <p>
            {
              "If you are a parent or guardian with a concern about your child's personal information, contact "
            }
            <a href="mailto:support@blynite.com">{"support@blynite.com"}</a>
            {
              ". Please describe the concern without sending passwords, private QR contents, identity documents or unnecessary details about the child. We will review the request and explain the actions available for information we control."
            }
          </p>
        </>
      ),
    },
    {
      id: "contact-and-privacy-requests",
      title: "Contact and privacy requests",
      content: (
        <>
          <p>
            {
              "For help with QR & Barcode Toolkit, privacy questions, or a request about information you have sent directly to Blynite, email "
            }
            <a href="mailto:support@blynite.com">{"support@blynite.com"}</a>
            {
              ". Please include the app name and a brief description of your request. Do not send Wi-Fi passwords, private QR contents, identity documents or unrelated personal information."
            }
          </p>
          <p>
            {
              "Blynite's dedicated support staff handle inquiries through this address, hosted with Namecheap."
            }
          </p>
          <p>
            {
              "When you contact us, we receive your email address, message and any information or attachments you choose to provide. We use this information to respond, investigate the issue and handle your request. Access is limited to authorized people handling the request and the email or support providers used to operate that service."
            }
          </p>
          <p>
            {
              "We may ask for limited additional information when reasonably needed to identify the relevant correspondence or protect another person's information. We can help explain the app's local data controls, but do not have a remote service for accessing or deleting the history stored on your device. Deleting Blynite-held correspondence does not remove exported QR images, copies held by other apps, or data independently held by a third-party SDK provider."
            }
          </p>
          <p>
            {
              "We normally delete support correspondence and attachments within 90 days after a request is closed. We retain a minimal record of the request type, dates and outcome for up to 12 months after closure. If specific information must be retained to meet a legal obligation, we limit its use and retention to that purpose."
            }
          </p>
          <p>
            <strong>{"Draft qualification:"}</strong>
            {
              " these are owner-approved periods for Blynite-controlled support records, not verified deletion results or periods for app history or SDK data. Namecheap's deleted-mail and backup retention/deletion behavior remains under verification. No claim is made that all provider copies disappear within these periods. The actual support workflow must be verified before final publication; this qualification must be resolved into accurate final wording."
            }
          </p>
        </>
      ),
    },
    {
      id: "policy-location",
      title: "Policy location",
      content: (
        <>
          <p>
            <strong>{"Current policy preview:"}</strong>{" "}
            <a href="https://www.blynite.com/apps/qr-barcode-toolkit/privacy">
              {"www.blynite.com/apps/qr-barcode-toolkit/privacy"}
            </a>
          </p>
          <p>
            {
              "This address hosts a review draft, not an approved or effective final policy. Final policy approval, the effective date, and approval of the final policy URL remain pending."
            }
          </p>
        </>
      ),
    },
  ],
};
