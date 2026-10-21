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
  effectiveDate: null,
  sections: [
    {
      id: "who-is-responsible-and-what-this-policy-covers",
      title: "Who is responsible and what this policy covers",
      content: (
        <>
          <p>
            {
              "This policy describes how QR & Barcode Toolkit for Android handles camera images, scanned and generated content, local history and settings, and content you choose to copy, export or share. Third-party SDK behavior is addressed separately below. This version has no app account or app-managed cloud-history feature."
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
      title: "Third-party libraries, diagnostics and possible transmissions",
      content: (
        <>
          <p>
            {"The app uses Google's bundled ML Kit Barcode Scanning SDK. "}
            <a href="https://developers.google.com/ml-kit/terms">
              {"Google's ML Kit privacy documentation"}
            </a>
            {
              " states that input images/text and resulting outputs are processed on-device and are not sent to Google servers. Separately, it describes SDK metrics sent to Google and possible server contacts for SDK maintenance and compatibility. This is Google's published description, not a measurement of this app's network activity."
            }
          </p>
          <p>
            <a href="https://developers.google.com/ml-kit/android-data-disclosure">
              {"Google's Android SDK disclosure"}
            </a>
            {
              " lists device/OS/accelerator information, app package/version, per-installation identifiers, timing, API configuration, input/output sizes, feature versions, events and error codes for diagnostics and usage analytics. Sizes are not the content itself. Google describes HTTPS protection for the listed transmissions. These descriptions do not establish which events occur or reach Google from this particular configuration."
            }
          </p>
          <p>
            {"The reviewed build does not request Internet permission. "}
            <strong>
              {
                "The effect of that restriction on actual SDK diagnostic transmissions has not been verified."
              }
            </strong>
            {
              " This draft does not assert either that this app definitely transmits those diagnostics or that SDK transmission is impossible. SDK-local storage, transmission paths and retention remain unresolved before publication."
            }
          </p>
          <p>
            {
              "The app also uses Android CameraX for camera access, ZXing Core for QR encoding, Room for local history, and DataStore for settings. ML Kit brings Play-services, DataTransport and Firebase component/encoding support. Those support components are not a Firebase Analytics or Crashlytics integration. This version has no AdMob integration or app-added analytics/crash-reporting service. That distinction does not resolve ML Kit's own diagnostics."
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
              "The app is configured to exclude its private data from Android cloud backup and device transfer. This is not a guarantee about every device manufacturer's behavior or files managed by another provider. No specific retention period or developer-operated deletion capability for SDK-held information has been established in this draft."
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
            {"QR & Barcode Toolkit is intended for people aged "}
            <strong>{"13 and over"}</strong>
            {"."}
          </p>
          <p>{"The final children’s privacy statement is awaiting review."}</p>
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
              "For privacy questions or help with the app’s local data controls, contact "
            }
            <a href="mailto:support@blynite.com">{"support@blynite.com"}</a>
            {"."}
          </p>
          <p>
            {
              "Avoid including Wi-Fi passwords, private QR payloads or unrelated personal information in an inquiry."
            }
          </p>
          <p>
            {
              "How support and privacy requests are monitored, handled, and retained is awaiting confirmation. This draft does not promise a response deadline or the ability to retrieve or delete Google-held or other third-party SDK records."
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
            This draft is available for review at{" "}
            <a href="https://blynite.com/apps/qr-barcode-toolkit/privacy">
              blynite.com/apps/qr-barcode-toolkit/privacy
            </a>.
            Public access to this draft does not make it the final or effective
            policy. Final policy approval and the effective date remain pending.
          </p>
        </>
      ),
    },
  ],
};
