import { definePlugin } from 'sanity'

// ─── Data ────────────────────────────────────────────────────────────────────

type ServiceItem = {
  name: string
  url?: string
  description: string
  badge?: 'active' | 'pending'
}

type ServiceGroup = {
  category: string
  items: ServiceItem[]
}

type InfoItem = {
  heading: string
  body: string
}

type InfoGroup = {
  category: string
  items: InfoItem[]
}

const services: ServiceGroup[] = [
  {
    category: 'Website',
    items: [
      {
        name: 'Live site',
        url: 'https://www.chesterfieldcleaningfairies.co.uk',
        description: 'The public-facing website visitors see.',
        badge: 'active',
      },
    ],
  },
  {
    category: 'Domain — GoDaddy',
    items: [
      {
        name: 'GoDaddy',
        url: 'https://www.godaddy.com',
        description:
          'Where the domain (chesterfieldcleaningfairies.co.uk) is registered and renewed. Log in here to check the renewal date — if the domain expires, the site will go offline.',
        badge: 'pending',
      },
    ],
  },
  {
    category: 'Content — Sanity CMS',
    items: [
      {
        name: 'Sanity project dashboard',
        url: 'https://www.sanity.io/manage/personal/project/uoci4hci',
        description:
          'Manage API tokens, team members, and usage. The free tier covers up to 10,000 API calls per day and 20 GB bandwidth — more than enough for this site.',
        badge: 'active',
      },
    ],
  },
  {
    category: 'Hosting & deployment — Vercel',
    items: [
      {
        name: 'Vercel project',
        url: 'https://vercel.com/chesterfieldcleaningfaries/website',
        description:
          'Hosts the website on the free Hobby plan. Every change pushed to GitHub deploys automatically here. You can view deployment history, check logs, and roll back to a previous version if something goes wrong.',
        badge: 'active',
      },
      {
        name: 'Vercel status page',
        url: 'https://www.vercel-status.com',
        description: 'Check here first if the site appears to be down — shows any platform-wide incidents.',
      },
    ],
  },
  {
    category: 'Source code — GitHub',
    items: [
      {
        name: 'GitHub repository',
        url: 'https://github.com/chesterfieldcleaningwebsiteadmin/website',
        description:
          'Stores all the website code. Every commit here triggers a new deployment on Vercel. The full history of every code change is kept here permanently.',
        badge: 'active',
      },
    ],
  },
  {
    category: 'Contact form — Web3Forms',
    items: [
      {
        name: 'Web3Forms dashboard',
        url: 'https://app.web3forms.com',
        description:
          'Handles contact form submissions. The email address that receives enquiries is configured here — update it in this dashboard when the business email changes. The free tier allows 250 submissions per month.',
        badge: 'active',
      },
    ],
  },
  {
    category: 'Analytics — Google',
    items: [
      {
        name: 'Google Analytics (GA4)',
        url: 'https://analytics.google.com',
        description:
          'Tracks visitor numbers, pages viewed, and traffic sources. Measurement ID: G-B3WR7SW4EX. Data only collects after a visitor accepts cookies.',
        badge: 'active',
      },
      {
        name: 'Google Tag Manager',
        url: 'https://tagmanager.google.com',
        description:
          'Manages how tracking scripts are loaded on the site. Container ID: GTM-M6LGSRJ7. Analytics is fired through here — do not remove or edit GTM tags without understanding the impact.',
        badge: 'active',
      },
      {
        name: 'Google Search Console',
        url: 'https://search.google.com/search-console',
        description:
          'Shows how the site appears in Google search results — impressions, clicks, and any crawl errors. Set up once the domain is live by verifying ownership.',
        badge: 'pending',
      },
    ],
  },
  {
    category: 'Social — Instagram',
    items: [
      {
        name: 'Instagram — @chesterfieldcleaningfairies',
        url: 'https://www.instagram.com/chesterfieldcleaningfairies/',
        description:
          'The business Instagram account. Highlighted posts are featured in the Instagram section on the homepage — keep the account active to keep that section looking fresh.',
        badge: 'active',
      },
    ],
  },
  {
    category: 'Google Business Profile',
    items: [
      {
        name: 'Google Business Profile',
        url: 'https://business.google.com',
        description:
          'Manages the listing that appears in Google Maps and local search. The Google reviews URL is configured in Sanity Studio → Site Settings. Keep the profile up to date — it directly affects local search visibility.',
        badge: 'active',
      },
    ],
  },
  {
    category: 'Uptime monitoring',
    items: [
      {
        name: 'UptimeRobot',
        url: 'https://uptimerobot.com',
        description:
          'Free service that checks the site every 5 minutes and sends an email alert if it goes down. Set up once the domain is live: create a free account, add a new monitor for the live URL, and add the business email as a contact. Takes 5 minutes.',
        badge: 'pending',
      },
    ],
  },
]

const reference: InfoGroup[] = [
  {
    category: 'Costs & billing',
    items: [
      {
        heading: 'This site runs on free tiers',
        body: 'Vercel (Hobby plan), Sanity, Web3Forms, and UptimeRobot all have free tiers that cover a small business site. You are unlikely to be charged anything. If traffic ever grows significantly, Vercel Pro is £16/month and Sanity Growth is £15/month — but this would only matter at much higher scale.',
      },
    ],
  },
  {
    category: 'Your content is safe',
    items: [
      {
        heading: 'Sanity saves every edit',
        body: 'Every change made in this Studio is stored with full version history. If something is accidentally deleted or overwritten, it can be restored from the Sanity project dashboard → the document → History.',
      },
      {
        heading: 'Vercel keeps deployment history',
        body: 'Every deployment is stored. If a bad code change goes live, the previous working version can be restored in one click from the Vercel project dashboard → Deployments → select a previous build → Redeploy.',
      },
    ],
  },
  {
    category: 'SSL certificate',
    items: [
      {
        heading: 'The padlock is automatic',
        body: 'The HTTPS padlock (SSL certificate) is managed and auto-renewed by Vercel. There is nothing to configure, renew, or pay for — it just works as long as the domain is pointed at Vercel.',
      },
    ],
  },
  {
    category: 'If something seems wrong',
    items: [
      {
        heading: 'Site appears to be down',
        body: '1. Check vercel-status.com for a platform outage. 2. Log in to Vercel and check the latest deployment succeeded. 3. If the domain is new, check it is correctly pointed at Vercel in GoDaddy.',
      },
      {
        heading: 'Contact form not delivering emails',
        body: 'Log in to app.web3forms.com and check the submission history — if submissions appear there but no email arrived, check the recipient email address in the dashboard and check your spam folder.',
      },
      {
        heading: 'Content change not showing on the site',
        body: 'The site caches content for 60 seconds. Wait a minute and hard-refresh (Ctrl + Shift + R on Windows). If it still has not updated, check that the document was published (not just saved as a draft) in the Studio.',
      },
      {
        heading: 'Studio not loading',
        body: 'Check status.sanity.io for a Sanity outage. The live website will still work during a Studio outage — only the editing interface is affected.',
      },
    ],
  },
  {
    category: 'Support & help',
    items: [
      {
        heading: 'Vercel support',
        body: 'vercel.com/help — documentation and community forums. Hobby plan does not include direct support, but the community is very active.',
      },
      {
        heading: 'Sanity support',
        body: 'sanity.io/help and slack.sanity.io — Sanity has a large community Slack where questions get answered quickly.',
      },
      {
        heading: 'Site builder contact',
        body: 'Owen O\'Loughlin — owen.oloughlin1@gmail.com. The person who built this site. Contact for anything that cannot be resolved through the above.',
      },
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function Badge({ type }: { type: 'active' | 'pending' }) {
  const isPending = type === 'pending'
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '2px 7px',
        borderRadius: 99,
        backgroundColor: isPending ? 'rgba(200,150,0,0.12)' : 'rgba(0,160,80,0.1)',
        color: isPending ? '#a07000' : '#007a40',
        flexShrink: 0,
      }}
    >
      {isPending ? 'To set up' : 'Active'}
    </span>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <h2
      style={{
        fontSize: '0.68rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        opacity: 0.45,
        margin: '0 0 0.65rem',
      }}
    >
      {children}
    </h2>
  )
}

// ─── Component ───────────────────────────────────────────────────────────────

function SystemsInfoComponent() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: '2.5rem 1.5rem 4rem',
        fontFamily: 'inherit',
        color: 'inherit',
      }}
    >
      {/* Header */}
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 0.25rem' }}>
        Site systems
      </h1>
      <p style={{ margin: '0 0 2.5rem', opacity: 0.55, fontSize: '0.88rem', lineHeight: 1.5 }}>
        A reference guide to every service this website is connected to. Nothing here needs to be
        changed — it is information only. Use the URLs to log in to each service.
      </p>

      {/* Services */}
      {services.map((group) => (
        <section key={group.category} style={{ marginBottom: '1.75rem' }}>
          <SectionLabel>{group.category}</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {group.items.map((item) => (
              <div
                key={item.name}
                style={{
                  border: '1px solid rgba(128,128,128,0.18)',
                  borderRadius: 8,
                  padding: '0.9rem 1.1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    flexWrap: 'wrap',
                    marginBottom: '0.35rem',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: '0.92rem' }}>{item.name}</span>
                  {item.badge && <Badge type={item.badge} />}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        marginLeft: 'auto',
                        fontSize: '0.75rem',
                        opacity: 0.45,
                        wordBreak: 'break-all',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      {item.url.replace('https://', '')} ↗
                    </a>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: '0.83rem', opacity: 0.62, lineHeight: 1.55 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Divider */}
      <div
        style={{
          borderTop: '1px solid rgba(128,128,128,0.18)',
          margin: '2.5rem 0',
        }}
      />

      {/* Reference info */}
      {reference.map((group) => (
        <section key={group.category} style={{ marginBottom: '1.75rem' }}>
          <SectionLabel>{group.category}</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {group.items.map((item) => (
              <div
                key={item.heading}
                style={{
                  border: '1px solid rgba(128,128,128,0.18)',
                  borderRadius: 8,
                  padding: '0.9rem 1.1rem',
                }}
              >
                <p style={{ margin: '0 0 0.3rem', fontWeight: 600, fontSize: '0.88rem' }}>
                  {item.heading}
                </p>
                <p style={{ margin: 0, fontSize: '0.83rem', opacity: 0.62, lineHeight: 1.55 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p
        style={{
          marginTop: '3rem',
          fontSize: '0.75rem',
          opacity: 0.35,
          borderTop: '1px solid rgba(128,128,128,0.15)',
          paddingTop: '1rem',
        }}
      >
        This page is part of the site and will not appear to the public. Last updated June 2026.
      </p>
    </div>
  )
}

// ─── Icon ────────────────────────────────────────────────────────────────────

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8h.01M12 11v5" strokeLinecap="round" />
    </svg>
  )
}

// ─── Plugin ──────────────────────────────────────────────────────────────────

export const systemsInfoPlugin = definePlugin({
  name: 'systems-info',
  tools: [
    {
      name: 'systems-info',
      title: 'Site systems',
      icon: InfoIcon,
      component: SystemsInfoComponent,
    },
  ],
})
