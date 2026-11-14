import type { AppPrivacyPolicy } from "./types";

// Policy text and publication details supplied by the owner.
export const hearthAndHuePolicy: AppPrivacyPolicy = {
  slug: "hearth-and-hue",
  name: "Hearth & Hue",
  platform: "Android",
  contactEmail: "support@blynite.com",
  summary:
    "Blynite publishes Hearth & Hue for Android. This policy explains what information the game stores, what Google AdMob processes, and how you can manage your privacy choices.",
  status: "published",
  effectiveDate: "2026-11-15",
  hideDirectoryLink: true,
  sections: [
    {
      id: "game-progress-and-settings",
      title: "Game progress and settings",
      content: (
        <>
          <p>
            Hearth &amp; Hue stores your puzzle progress, Stars, renovation
            progress, and game settings on your device so you can resume
            playing. You can play without creating an account. Blynite does not
            upload your game saves to its servers.
          </p>
          <p>
            Your local game data stays in the app’s storage until you remove it.
            To delete it, open{" "}
            <strong>
              Android Settings → Apps → Hearth &amp; Hue → Storage → Clear data
            </strong>
            . This removes your saved progress and settings from the device.
          </p>
        </>
      ),
    },
    {
      id: "optional-rewarded-ads",
      title: "Optional rewarded ads",
      content: (
        <>
          <p>
            On eligible puzzles, you can choose to watch a video ad to earn one
            extra bottle. You can play through the game without watching ads.
          </p>
          <p>
            Hearth &amp; Hue uses <strong>Google AdMob</strong> to deliver
            rewarded ads and Google’s <strong>User Messaging Platform</strong>{" "}
            to manage ad privacy choices. When the game checks your ad privacy
            settings or requests an ad, Google may receive information from your
            device. The Google Mobile Ads SDK may collect and share the
            following information.
          </p>
          <ul>
            <li>
              Your IP address, which can be used to estimate your general
              location.
            </li>
            <li>
              App and ad interactions, such as app launches, taps, and video
              views.
            </li>
            <li>
              Diagnostic and performance information, such as app launch times
              and freezes.
            </li>
            <li>
              Device or app identifiers, such as the Android advertising ID or
              app set ID, and other identifiers where applicable.
            </li>
          </ul>
          <p>
            Google uses this information to deliver and measure ads, analyze
            performance, and detect fraud and abuse. Ads may be personalized
            depending on your choices, device settings, and region. Google and
            participating advertising partners may process information for these
            purposes. The Google Mobile Ads SDK encrypts data it transmits using
            TLS.{" "}
            <a href="https://policies.google.com/privacy">
              Google Privacy Policy
            </a>
            {" · "}
            <a href="https://policies.google.com/technologies/partner-sites">
              How Google uses information from partner apps
            </a>
          </p>
        </>
      ),
    },
    {
      id: "your-privacy-choices",
      title: "Your privacy choices",
      content: (
        <>
          <p>
            Where available, open{" "}
            <strong>Hearth &amp; Hue → Settings → Ad privacy choices</strong> to
            review or change your ad privacy choices. You can also manage your
            advertising ID in Android settings. Your ad privacy choices may
            affect the ads you see or whether a rewarded ad is available.
          </p>
          <p>
            Google retains and deletes information it receives under its own
            policies. Clearing local game data removes data stored by the game
            on your device. To manage information Google has already received,
            use the controls described in Google’s privacy resources.{" "}
            <a href="https://policies.google.com/technologies/retention">
              How Google retains data
            </a>
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
            If you email us, we receive your email address, your message, and
            any information you choose to include. We use that information to
            respond and resolve your request. We keep support correspondence for
            as long as needed to handle your request and meet any applicable
            legal obligations.
          </p>
          <p>
            Depending on where you live, you may have rights to access, correct,
            or delete personal information, or to object to or restrict certain
            uses. For privacy questions or requests, contact Blynite at{" "}
            <strong>
              <a href="mailto:support@blynite.com">support@blynite.com</a>
            </strong>
            .
          </p>
        </>
      ),
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to this policy",
      content: (
        <p>
          If we change this policy, we’ll post the updated version here and
          revise the effective date.
        </p>
      ),
    },
  ],
};
