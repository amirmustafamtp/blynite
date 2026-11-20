import type { AppPrivacyPolicy } from "./types";

// Policy text supplied by the owner.
export const sleepTrackerPolicy: AppPrivacyPolicy = {
  slug: "sleep-tracker",
  name: "Sleep Tracker",
  platform: "Android",
  contactEmail: "info@blynite.com",
  summary:
    "Privacy information for Sleep Tracker’s session timer, optional microphone tracking, diary, reports, routine tools and relaxation sounds.",
  status: "published",
  effectiveDate: "2026-11-20",
  dateLabel: "Last updated",
  hideDirectoryLink: true,
  sections: [
    {
      id: "about-this-policy",
      title: "About this policy",
      content: (
        <>
          <p>
            {
              "Sleep Tracker is an Android app provided by blynite. This policy explains how information is handled when you use its session timer, optional microphone tracking, diary, reports, routine tools and relaxation sounds. It covers the Sleep Tracker app, rather than other blynite websites or services."
            }
          </p>
          <p>
            {
              "You do not need to create an app account. You can use the session timer without granting microphone access. Sleep Tracker is a general wellness and journaling tool; its session and sound information does not diagnose medical conditions or measure sleep stages."
            }
          </p>
        </>
      ),
    },
    {
      id: "information-you-choose-to-save",
      title: "Information you choose to save",
      content: (
        <>
          <p>
            {
              "The app stores information on your device to provide the features you use. This can include session start and end times, session duration, recorded-input coverage and gaps, sound-event times and durations, and any sound labels you add."
            }
          </p>
          <p>
            {
              "If you use the diary or routine features, the app also stores the answers, notes, sleep estimates, routine preferences and other optional context you enter. Settings can include sound favorites, timers, reminders, alarm choices, clip-saving choices and retention preferences."
            }
          </p>
          <p>
            {
              "This information is used to show your sessions, diary, reports, trends and optional routine feedback, and to operate your selected features."
            }
          </p>
        </>
      ),
    },
    {
      id: "optional-microphone-use",
      title: "Optional microphone use",
      content: (
        <>
          <p>
            {
              "Microphone tracking starts only when you choose it and grant Android microphone permission. While a session is active, recording can continue when the screen is locked or another app is in the foreground. An ongoing notification provides recording status and a way to end the session."
            }
          </p>
          <p>
            {
              "Audio is processed locally to detect generic sound events. If you do not enable short-clip saving, microphone audio is processed in memory rather than saved as recordings. If you separately enable short-clip saving, the app can save bounded event clips for playback. It does not save a continuous all-night recording."
            }
          </p>
          <p>
            {
              "Current limits include up to eight seconds per clip, up to 24 clips per session and a device storage quota. Automatic sound categories and speaker identification are not enabled; sound labels are choices you make."
            }
          </p>
          <p>
            {
              "You can stop a session or revoke microphone permission in Android settings. Recording does not restart automatically after a reboot or interrupted session. Please obtain permission from anyone else who may be recorded."
            }
          </p>
        </>
      ),
    },
    {
      id: "local-storage-and-security",
      title: "Local storage and security",
      content: (
        <>
          <p>
            {
              "App-managed session information and diary entries are stored in the app’s private device storage. Saved sound clips are encrypted using a key managed through Android Keystore. App-managed backup is disabled in the current build."
            }
          </p>
          <p>
            {
              "Sleep Tracker does not automatically upload your recordings, diary or session reports to a blynite server, and it does not provide automatic cloud synchronization. Exporting information is a separate choice described below."
            }
          </p>
          <p>
            {
              "Device security and access to your unlocked phone affect the protection of local data. Encryption of app-managed clips does not extend to ordinary audio files you choose to export."
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
              "You can delete saved clips, individual saved sessions or saved history within the app. Deleting a clip may leave its event time, duration and other report metadata in place. Delete the associated session or saved history to remove those app-managed records."
            }
          </p>
          <p>
            {
              "Clip retention choices are one day, seven days, 30 days, or until you delete them. Expired-clip cleanup runs when the app opens or a session ends. Expiry is not a guaranteed background deletion deadline while the app is closed."
            }
          </p>
          <p>
            {
              "Uninstalling the app normally removes its app-managed local data. Copies you exported remain wherever you saved or shared them. We do not promise forensic erasure of underlying device storage or deletion of files controlled by another provider."
            }
          </p>
        </>
      ),
    },
    {
      id: "exports-and-sharing-you-initiate",
      title: "Exports and sharing you initiate",
      content: (
        <>
          <p>
            {
              "You choose the sessions, optional fields and destination when exporting information. PDF and JSON exports do not contain audio. Check-in answers, diary notes and personal sound labels have separate inclusion controls."
            }
          </p>
          <p>
            {
              "If you explicitly select clips for an audio export, the resulting ZIP contains ordinary audio files that recipients can play. Those exported files are not protected by the app’s clip-encryption key."
            }
          </p>
          <p>
            {
              "If you save an export to a cloud drive or share it with another person or service, their handling of that copy is governed by their own practices and policies. App deletion and retention controls do not remove those copies."
            }
          </p>
        </>
      ),
    },
    {
      id: "google-play-and-other-services",
      title: "Google Play and other services",
      content: (
        <>
          <p>
            {
              "The current app has no advertisements and does not use recordings or diary entries for advertising. Paid plans and purchase restoration are unavailable in this version. The app includes Google Play Billing components for purchase-related functionality, but no paid purchase flow is enabled."
            }
          </p>
          <p>
            {
              "Google Play and Android may process account, device, diagnostic and other technical information to distribute the app, provide updates, operate platform services and protect those services. Google’s processing depends on its services and your settings, and is described in the Google Privacy Policy: "
            }
            <a href="https://policies.google.com/privacy">
              Google Privacy Policy
            </a>
            {"."}
          </p>
          <p>
            {
              "The app does not automatically send your recordings or diary entries to Google Play. Any document or cloud provider you select for exports processes the exported copy under its own policy."
            }
          </p>
        </>
      ),
    },
    {
      id: "permissions-and-your-controls",
      title: "Permissions and your controls",
      content: (
        <>
          <p>
            {
              "Microphone permission supports optional microphone tracking. Notifications provide active-session and playback controls and optional reminders or alarm notices. Alarm and foreground-service permissions support the corresponding features you choose to use."
            }
          </p>
          <p>
            {
              "The app does not require access to your contacts or precise location. You can review or revoke permissions through Android settings, use the timer without the microphone, change clip-saving and retention choices, and manage saved information within the app."
            }
          </p>
        </>
      ),
    },
    {
      id: "contacting-blynite",
      title: "Contacting blynite",
      content: (
        <>
          <p>
            {"For privacy questions or requests, email "}
            <a href="mailto:info@blynite.com">info@blynite.com</a>
            {
              ". If you contact us, your email address, message and any attachments you choose to send are used to respond to and resolve your request. Please avoid sending recordings or sensitive diary information unless they are needed for your request."
            }
          </p>
          <p>
            {
              "Support communications are retained only for as long as reasonably needed to handle the request and meet applicable obligations. You can contact us to request deletion of information you sent directly to blynite. This is separate from deleting local app data, which you control on your device."
            }
          </p>
        </>
      ),
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to this policy",
      content: (
        <>
          <p>
            {
              "We may update this policy to reflect changes to the app or our information-handling practices. The updated policy will show a new last-updated date. Material changes that require additional notice or consent will be handled as applicable before the relevant processing begins."
            }
          </p>
        </>
      ),
    },
  ],
};
