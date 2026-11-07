import type { AppPrivacyPolicy } from "./types";

// Policy text supplied by the owner for the ad-free Android release.
export const colorQuestPolicy: AppPrivacyPolicy = {
  slug: "color-quest",
  name: "Color Quest: Mystery Islands",
  platform: "Android",
  contactEmail: "support@blynite.com",
  summary:
    "Privacy information for the ad-free Color Quest: Mystery Islands game, including local progress, settings, and support messages.",
  status: "published",
  effectiveDate: "2026-11-07",
  hideDirectoryLink: true,
  sections: [
    {
      id: "about-this-policy",
      title: "About this policy",
      content: (
        <>
          <p>
            {
              "This policy describes the ad-free version of Color Quest: Mystery Islands distributed by Blynite. It covers the game and messages you choose to send to our support contact. It does not describe historical development builds or other Blynite products."
            }
          </p>
        </>
      ),
    },
    {
      id: "information-stored-on-your-device",
      title: "Information stored on your device",
      content: (
        <>
          <p>
            {
              "The game stores your completed levels, best results, stars, coins and reward receipts, owned and equipped cosmetics, island-restoration progress, and game settings in private app storage. These records let the game remember progress and preferences and recover from interrupted saves. An unfinished puzzle starts over after the app closes; completed progress and saved settings remain."
            }
          </p>
          <p>
            {
              "The game works without an account. It does not send your progress, settings or identifiers to Blynite or to an analytics service. It has no game server, cloud synchronization, social sharing, or automatic crash-reporting service."
            }
          </p>
        </>
      ),
    },
    {
      id: "advertising-tracking-and-permissions",
      title: "Advertising, tracking and permissions",
      content: (
        <>
          <p>
            {
              "This version of Color Quest: Mystery Islands is ad-free. The game does not include an advertising or advertising-consent SDK, access an advertising identifier, or use advertising trackers. Your progress and settings are saved in private storage on your device. The game does not send that data to Blynite or an analytics service."
            }
          </p>
          <p>
            {
              "The version distributed through Google Play declares one Android permission: Google Play’s licensing permission (com.android.vending.CHECK_LICENSE). At startup, the app calls the Google Play Store’s licensing client to check that the game was obtained through Google Play. The game does not request Android’s Internet permission or connect to Blynite servers. Google Play operates under its own privacy policy. This statement describes the game’s permissions and data handling; it does not describe what Google Play processes while providing licensing or distribution services."
            }
          </p>
        </>
      ),
    },
    {
      id: "storage-retention-and-removal",
      title: "Storage, retention and removal",
      content: (
        <>
          <p>
            {
              "Progress and settings remain on your device until the app data is removed. Local recovery files can retain an earlier version of progress. Android app backup is disabled. You may remove local data through Android Settings by clearing the app's storage or uninstalling it. This can permanently remove progress, and Blynite cannot restore it from a server. The game has no user account or server-side account data to delete."
            }
          </p>
        </>
      ),
    },
    {
      id: "support-and-voluntary-tester-feedback",
      title: "Support and voluntary tester feedback",
      content: (
        <>
          <p>
            {"If you email "}
            <a href="mailto:support@blynite.com">support@blynite.com</a>
            {
              ", we receive your email address, message and any information or attachments you choose to include. We use this information to answer requests, investigate reported problems, and improve the game. Please do not send passwords, payment details, sensitive personal information or complete device logs. Feedback is voluntary."
            }
          </p>
          <p>
            {
              "Support correspondence is handled by Blynite and its email service provider as needed to deliver and respond to messages. We retain it only as long as needed to handle the request, maintain necessary support records and meet applicable legal obligations. You can request deletion of correspondence by contacting "
            }
            <a href="mailto:support@blynite.com">support@blynite.com</a>
            {
              ", subject to applicable legal requirements. Removing the game does not automatically delete email correspondence."
            }
          </p>
        </>
      ),
    },
    {
      id: "sharing-and-platform-services",
      title: "Sharing and platform services",
      content: (
        <>
          <p>
            {
              "We do not sell personal information. The game does not collect or share user data off the device. Information you voluntarily send to support may be processed by our email provider or disclosed when legally required."
            }
          </p>
          <p>
            {
              "Google Play and Android operate under their own privacy policies. Information they process for app distribution, testing, device operation or platform services is distinct from data transmitted by this game. This policy does not control those services."
            }
          </p>
        </>
      ),
    },
    {
      id: "younger-users",
      title: "Younger users",
      content: (
        <>
          <p>
            {
              "The game is intended for teens and adults aged 13 and over. We do not collect ages or birth dates through the game. We do not intentionally request personal information from children. If you believe a child has sent personal information to our support contact, please contact us so we can address the request. Local laws may provide additional protections to younger users."
            }
          </p>
        </>
      ),
    },
    {
      id: "your-choices-and-questions",
      title: "Your choices and questions",
      content: (
        <>
          <p>
            {
              "You can play without creating an account or contacting support. To remove local progress, use the device controls described above. For questions, access, correction or deletion requests concerning information you have sent directly to Blynite, email "
            }
            <a href="mailto:support@blynite.com">support@blynite.com</a>
            {
              ". Available rights depend on applicable law; we may need information necessary to verify and respond to a request."
            }
          </p>
        </>
      ),
    },
    {
      id: "changes",
      title: "Changes",
      content: (
        <>
          <p>
            {
              "We will update the effective date on this page when this policy changes. Before introducing advertising, online accounts, analytics or other data collection, we will review and update the policy and relevant disclosures."
            }
          </p>
        </>
      ),
    },
  ],
};
