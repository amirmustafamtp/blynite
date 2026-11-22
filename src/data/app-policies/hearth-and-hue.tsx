import type { AppPrivacyPolicy } from "./types";

// Policy text and publication details supplied by the owner.
export const hearthAndHuePolicy: AppPrivacyPolicy = {
  slug: "hearth-and-hue",
  name: "Hearth & Hue",
  platform: "Android",
  contactEmail: "support@blynite.com",
  summary:
    "Blynite publishes Hearth & Hue. This policy explains the information stored by the game, information processed by its advertising services, and your privacy choices. Features and controls vary by app version. The age-range and advertising controls described below apply to versions that include them; older versions may offer fewer controls.",
  status: "published",
  effectiveDate: "2026-11-23",
  hideDirectoryLink: true,
  sections: [
    {
      id: "game-progress-and-settings",
      title: "Game progress and settings",
      content: (
        <>
          <p>
            {
              "Hearth & Hue stores puzzle progress, Stars, renovation progress, earned hints and bottles, and game settings on your device so you can resume playing. You can play without creating an account. Blynite does not upload your game saves to its servers."
            }
          </p>
          <p>
            {
              "Versions with age and advertising controls also store your selected age range and advertising preference on your device, separately from game progress. The game does not ask for an exact date of birth."
            }
          </p>
          <p>
            {
              "Your local game data remains in the app’s storage until you remove it. You can delete it through "
            }
            <strong>
              {"Android Settings → Apps → Hearth & Hue → Storage → Clear data"}
            </strong>
            {
              ". This deletes saved progress and settings, including local privacy preferences. Changing an advertising or age preference within the game does not delete earned progress."
            }
          </p>
        </>
      ),
    },
    {
      id: "advertising",
      title: "Advertising",
      content: (
        <>
          <p>
            {
              "Depending on the app version and your settings, Hearth & Hue may display:"
            }
          </p>
          <ul>
            <li>{"Banner ads during puzzles."}</li>
            <li>
              {
                "Interstitial ads at natural breaks, such as after level completion."
              }
            </li>
            <li>
              {
                "Optional rewarded videos for hints or extra bottles. Each eligible completed video provides the reward shown in the game. Closing a video early does not earn its reward."
              }
            </li>
          </ul>
          <p>
            {
              "Puzzles are designed to be solvable without rewarded hints or extra bottles. Advertising availability depends on your privacy choices, age settings, region, network connection, and the advertising provider."
            }
          </p>
          <p>
            {"Hearth & Hue uses "}
            <strong>{"Google AdMob"}</strong>
            {" to deliver ads and Google’s "}
            <strong>{"User Messaging Platform (UMP)"}</strong>
            {
              " to manage applicable privacy choices. When the game checks ad privacy requirements, initializes permitted advertising services, or requests an ad, Google and participating advertising partners may process information including:"
            }
          </p>
          <ul>
            <li>
              {
                "Your IP address, which may be used to estimate general location."
              }
            </li>
            <li>
              {
                "App and ad interactions, such as app launches, taps, and video views."
              }
            </li>
            <li>
              {
                "Diagnostic and performance information, such as launch times, freezes, and energy usage."
              }
            </li>
            <li>
              {
                "Device or app identifiers, such as the Android advertising ID or app set ID, where permitted and applicable."
              }
            </li>
            <li>
              {
                "Age-treatment and consent-restriction flags derived from your selected age range. These flags may indicate an age category; the game does not request or send an exact date of birth."
              }
            </li>
          </ul>
          <p>
            {
              "This information may be collected and shared for advertising, ad measurement, analytics, and fraud prevention. Google’s Mobile Ads SDK encrypts data it transmits using Transport Layer Security (TLS)."
            }
          </p>
          <p>
            {"Further information is available in "}
            <a href="https://policies.google.com/privacy">
              {"Google’s Privacy Policy"}
            </a>
            {", "}
            <a href="https://policies.google.com/technologies/partner-sites">
              {"how Google uses information from partner apps"}
            </a>
            {", and "}
            <a href="https://developers.google.com/admob/android/privacy/play-data-disclosure">
              {"Google Mobile Ads data disclosures"}
            </a>
            {"."}
          </p>
        </>
      ),
    },
    {
      id: "age-ranges-and-advertising-protections",
      title: "Age ranges and advertising protections",
      content: (
        <>
          <p>
            {"Hearth & Hue is intended for teenagers aged "}
            <strong>{"13 and over"}</strong>
            {" and adults. It is not directed to children under 13."}
          </p>
          <p>{"In versions with age-range controls:"}</p>
          <ul>
            <li>
              {
                "You can select an age range without providing an exact birth date, or choose not to provide a range."
              }
            </li>
            <li>
              {
                "No ad or advertising-consent requests are made while the age is unknown, the selected range is under 13, or advertising is switched off. The game remains playable."
              }
            </li>
            <li>
              {
                "Players aged 13–15 receive the SDK’s stricter under-age-of-consent treatment. Players aged 16–17 receive teen treatment. Teen ad requests disable personalization."
              }
            </li>
            <li>
              {
                "Ad requests use the SDK’s general-audience ad-content limit. These settings help restrict delivery but do not guarantee the content of every third-party creative."
              }
            </li>
            <li>
              {
                "Adult users receive applicable regional privacy choices. Advertising personalization depends on those choices and the provider’s permitted processing."
              }
            </li>
          </ul>
          <p>
            {
              "Blynite does not receive your selected range on its own servers. Where advertising is enabled, Google receives the age-treatment and consent-restriction flags described above."
            }
          </p>
          <p>
            {
              "If you believe a child’s personal information has been provided to Blynite inappropriately, contact "
            }
            <a href="mailto:support@blynite.com">{"support@blynite.com"}</a>
            {" so we can review the request and take appropriate action."}
          </p>
        </>
      ),
    },
    {
      id: "your-advertising-and-privacy-choices",
      title: "Your advertising and privacy choices",
      content: (
        <>
          <p>
            {"In versions with these controls, open "}
            <strong>{"Hearth & Hue → Settings → Age & ad privacy"}</strong>
            {
              " to change your age range, switch advertising off, or open available regional ad privacy choices. Earlier versions may call this entry "
            }
            <strong>{"Ad privacy choices"}</strong>
            {"."}
          </p>
          <p>
            {
              "Changes to age or advertising preferences may apply a clean app restart after verifying saved progress. Switching advertising off prevents new ad requests; it does not erase information already received by Google or its partners. You can also manage or delete your advertising ID through Android settings."
            }
          </p>
          <p>
            {
              "Where applicable, UMP checks whether a consent message is required. A previously valid choice may be reused, and a new choice may be requested when required. Declining personalization does not block puzzle progression. Depending on the permissions available, the provider may serve restricted ads or no ads. Non-personalized ads may still involve device storage or identifiers and may require consent."
            }
          </p>
          <p>
            {
              "Changing these preferences does not reset Stars, earned hints or bottles, completed repairs, or level progress."
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
              "Local game progress and settings remain on your device until removed through the game’s storage controls or your device’s app-management settings."
            }
          </p>
          <p>
            {
              "Google and participating advertising partners retain and delete information under their own policies. Removing local game data does not delete information they have already received. Use the controls and contact methods in their privacy resources to manage that information. See "
            }
            <a href="https://policies.google.com/technologies/retention">
              {"Google’s data-retention information"}
            </a>
            {"."}
          </p>
        </>
      ),
    },
    {
      id: "support-and-privacy-requests",
      title: "Support and privacy requests",
      content: (
        <>
          <p>
            {
              "If you email Blynite, we receive your email address, message, and information you choose to include. We use this information to respond and resolve your request. We retain support correspondence for as long as needed to handle the request and meet applicable legal obligations."
            }
          </p>
          <p>
            {
              "Depending on where you live, you may have rights to access, correct, or delete personal information, withdraw consent, or object to or restrict certain processing. For privacy questions or requests, contact "
            }
            <strong>
              <a href="mailto:support@blynite.com">{"support@blynite.com"}</a>
            </strong>
            {"."}
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
              "If this policy changes, we will publish the updated version on this page and revise its effective date. Please review it periodically for changes relevant to your use of Hearth & Hue."
            }
          </p>
        </>
      ),
    },
  ],
};
