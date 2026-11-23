import type { AppPrivacyPolicy } from "./types";

// Policy text and publication details supplied by the owner.
export const hearthAndHuePolicy: AppPrivacyPolicy = {
  slug: "hearth-and-hue",
  name: "Hearth & Hue",
  platform: "Android",
  contactEmail: "support@blynite.com",
  summary:
    "Blynite publishes Hearth & Hue. This policy explains the information stored by the game, information processed by its advertising services and regional Google Play age-assurance features, and your privacy choices. Features and controls vary by app version. The updated startup flow described below applies beginning with version 0.29.0 and later versions using that flow; earlier versions may offer fewer or different controls.",
  status: "published",
  effectiveDate: "2026-11-24",
  hideDirectoryLink: true,
  sections: [
    {
      id: "game-progress-and-settings",
      title: "Game progress and settings",
      content: (
        <>
          <p>
            {
              "Hearth & Hue stores puzzle progress, Stars, renovation progress, earned hints and bottles, personal-best records and cosmetic medals where available, and game settings on your device so you can resume playing. You can play without creating an account. Blynite does not upload your game saves to its servers."
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
                "Age-treatment and consent-restriction flags based on a selected age range or the protective default for an unknown range. These flags may indicate an age category or a protective processing choice; the game does not request or send an exact date of birth."
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
          <h3>{"Updated startup flow"}</h3>
          <p>
            {
              "Beginning with version 0.29.0, the game does not automatically show a local age-range selection screen. Optional age-range and advertising controls remain available in Settings. You do not need to give an exact date of birth."
            }
          </p>
          <p>
            {
              "For a new installation with no saved advertising preference, advertising is enabled with protective processing settings. If your age range is unknown, the game requests Google's child-protective ad treatment, turns off ad personalization, and applies the advertising-consent under-age flag. This is a processing safeguard, not a statement that your age has been verified. Google's documented child treatment restricts advertising identifiers and third-party ad processing; it does not mean that no information is processed at all."
            }
          </p>
          <p>
            {
              "Under this protective treatment, Google's UMP SDK does not request adult advertising consent. Ads may still be served when eligible under the SDK's privacy checks and restrictions; availability is not guaranteed. Other eligible users receive regional privacy messages when required by the configured Google privacy flow."
            }
          </p>
          <p>
            {
              "Existing saved advertising preferences are preserved. A previous choice to switch advertising off remains off. If an existing local preference file cannot be read safely, advertising stays off rather than treating it as a new installation."
            }
          </p>
          <h3>{"Selected age ranges and other protections"}</h3>
          <p>{"In versions with these controls:"}</p>
          <ul>
            <li>
              {
                "A selected age range under 13 disables advertising and advertising-consent requests; the game remains playable."
              }
            </li>
            <li>
              {
                "Players selecting 13–15 receive the SDK's stricter child/under-age-of-consent treatment. Players selecting 16–17 receive teen treatment. Known teen ad requests disable personalization."
              }
            </li>
            <li>
              {
                "Adults receive applicable regional privacy choices. Advertising personalization depends on those choices and the provider's permitted processing."
              }
            </li>
            <li>
              {
                "Switching advertising off prevents new advertising and advertising-consent requests."
              }
            </li>
            <li>
              {
                "Ad requests use the SDK's general-audience ad-content limit. These controls help restrict delivery but do not guarantee the content of every third-party creative."
              }
            </li>
          </ul>
          <p>
            {
              "Earlier versions using the previous age-selection flow do not request ads or advertising consent while the age range is unknown. The updated startup behavior above applies only to versions that include it."
            }
          </p>
          <p>
            {
              "Blynite does not receive your selected range on its own servers. Where advertising is enabled, Google receives the applicable protection and consent-restriction flags. Selecting an age range does not itself grant advertising consent."
            }
          </p>
          <h3>{"Google Play age assurance"}</h3>
          <p>
            {"Versions with "}
            <strong>{"Google Play Age Signals"}</strong>
            {
              " first ask Google Play whether mandatory age sharing applies to the user. When Google Play reports that it applies, the game requests access to the available signals. Google Play may provide an age range and verification or parental-approval status. The game uses these responses only for age-appropriate access notices and to direct users to Google Play when age verification or parental review is needed. If the service is unavailable or a response is missing, the game does not treat that as proof that a user is an adult."
            }
          </p>
          <p>
            {
              "These responses are processed temporarily in memory. The game does not save them to game progress, send them to Blynite servers, or use them for advertising, marketing, profiling, or analytics. They do not fill in your separate advertising age choice or grant advertising consent. In these versions, the game does not request a voluntary age-sharing prompt where Google Play does not report mandatory sharing."
            }
          </p>
          <p>
            {
              "Google Play manages its own account, age-verification, supervision, and sharing processes under Google's policies. The game does not ask you to upload identity documents to Blynite. For information about Google's handling, see "
            }
            <a href="https://policies.google.com/privacy">
              {"Google's Privacy Policy"}
            </a>
            {" and "}
            <a href="https://support.google.com/googleplay/answer/17232873">
              {"age range sharing on Google Play"}
            </a>
            {"."}
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
              "Where advertising is enabled, the game uses UMP to check applicable privacy requirements. The protective unknown-age and younger-teen treatment sets the under-age-of-consent flag, so UMP does not request adult advertising consent for those cases. For other eligible users, UMP checks whether a regional consent message is required. A previously valid choice may be reused, and a new choice may be requested when required. Declining personalization does not block puzzle progression. Depending on the permissions available, the provider may serve restricted ads or no ads. Non-personalized ads may still involve device storage or identifiers and may require consent."
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
              "Local game progress, personal-best records, cosmetic medals, and settings remain on your device until removed through the game’s storage controls or your device’s app-management settings."
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
          <p>
            {
              "Play Age Signals responses are not retained by the game after the in-memory check. Google Play may retain its own account and verification information under Google’s policies."
            }
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
