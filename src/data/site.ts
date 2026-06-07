export type NavItem = {
  label: string;
  href: string;
};

export type ProcessItem = {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
  body: string;
};

export type SearchDocument = {
  title: string;
  href: string;
  excerpt: string;
  body: string;
  tags: string[];
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us-2/' },
  { label: 'The Process', href: '/the-process/' },
  { label: 'The CEO', href: '/the-ceo/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Contact', href: '/contact-us/' },
];

export const contact = {
  phoneDisplay: '323.646.6116',
  phoneHref: 'tel:+13236466116',
  email: 'ecwr@siteselectionstrategist.com',
  location: 'Headquartered in Los Angeles, CA.',
  reach: 'Sources programs worldwide.',
};

export const processItems: ProcessItem[] = [
  {
    title: 'Request for Proposal',
    slug: 'request-for-proposal',
    image: 'assets/process-request-for-proposal.jpg',
    excerpt:
      'Translate program needs into a clear hotel RFP that attracts responsive, comparable proposals.',
    body:
      'SiteSelectionStrategist helps define rooms, dates, meeting space, concessions, destination needs, and decision criteria before hotels are contacted. The result is a cleaner RFP process and a stronger basis for comparison.',
  },
  {
    title: 'Site Search',
    slug: 'site-search',
    image: 'assets/process-site-search.jpg',
    excerpt:
      'Identify hotel and destination options that fit the meeting goals, budget, and attendee experience.',
    body:
      'The search phase narrows the field from broad destination possibilities to practical properties that can support the program. Elizabeth uses hotel relationships and market knowledge to surface options planners can act on.',
  },
  {
    title: 'Negotiate',
    slug: 'negotiate',
    image: 'assets/process-negotiate.jpg',
    excerpt:
      'Negotiate business terms, concessions, room rates, space, and protections with both sides in view.',
    body:
      'With experience as both hotelier and buyer, SiteSelectionStrategist evaluates the tradeoffs in each offer and pushes for terms that protect the program while keeping the hotel relationship productive.',
  },
  {
    title: 'Site Visits',
    slug: 'site-visits',
    image: 'assets/process-site-visits.jpg',
    excerpt:
      'Plan focused site inspections that reveal whether the property can truly support the program.',
    body:
      'Site visits are structured around the actual attendee journey, meeting flow, food and beverage needs, guestroom blocks, and operational details that can affect the success of a conference.',
  },
  {
    title: 'Contracting',
    slug: 'contracting',
    image: 'assets/process-contracting.jpg',
    excerpt:
      'Review hotel contract details so the final agreement reflects the negotiated intent.',
    body:
      'Contracting support focuses on the practical clauses that matter for meetings: attrition, cancellation, concessions, cut-off dates, function space, billing, and the details that keep surprises out of the final agreement.',
  },
  {
    title: 'Advocacy',
    slug: 'advocacy',
    image: 'assets/process-advocacy.jpg',
    excerpt:
      'Represent the planner throughout the program, from inception through conclusion.',
    body:
      'SiteSelectionStrategist acts as the planner advocate through sourcing, negotiation, contracting, and follow-through. The work is built around protecting the program and maintaining productive hotel partnerships.',
  },
  {
    title: 'Brand-Blind',
    slug: 'brand-blind',
    image: 'assets/process-brand-blind.jpg',
    excerpt:
      'Compare hotel options by program fit and value, not by brand habit or sales pressure.',
    body:
      'A brand-blind approach keeps attention on the facts: destination fit, dates, meeting space, guestroom rates, concessions, service expectations, and contract terms.',
  },
  {
    title: 'Ancillary Services',
    slug: 'ancillary-services',
    image: 'assets/process-ancillary-services.jpg',
    excerpt:
      'Coordinate adjacent needs and recommendations that support a complete meeting plan.',
    body:
      'Beyond the hotel agreement, SiteSelectionStrategist can help surface considerations around destination support, vendor conversations, and operational details that affect the full attendee experience.',
  },
  {
    title: 'FeeFree',
    slug: 'fee-free',
    image: 'assets/process-fee-free.jpg',
    excerpt:
      'Support site selection through hotel-funded commissions rather than direct planner fees.',
    body:
      'The fee-free model is designed to give planners expert sourcing and negotiation support without adding a direct consulting line item to the program budget.',
  },
];

export const testimonials = [
  'Elizabeth has been a true gift from the universe. She contacted us when our search for a conference site was in crisis, and calmly and efficiently contacted hotels in two different counties, vetted them completely using our conference guidelines, accompanied us on our site inspections, and helped us with the contract negotiations, attending to details I had not imagined.',
  'Working with Elizabeth on site selection, contract negotiation, and all of the details for two major events, one in 2018 and the other in 2019, has been a true joy. Her knowledge and expertise have benefited us greatly. Our level of confidence as a planning team is high when it comes to her attention to detail and assistance.',
  'If you are planning a meeting or other conference event, it is wise to have a seasoned professional assisting in the process. Elizabeth Caragay Watts-Russell is just that professional.',
  'You are wonderful to work with and I really thank you for all your patience and kindness during our recent negotiations!',
  'We have worked with Elizabeth Caragay Watts-Russell for multiple years now. She has helped us from every stage of planning our large-scale events in multiple cities. From helping us to find the proper venue, to negotiating contracts, event planning and event follow up, her advice and assistance is invaluable. I plan to work with Elizabeth for many years to come for all of our major events in cities around the country. Our events would not be near as successful if we did not have her support and guidance. Elizabeth is poised, professional and great to work with. She is constantly available and always ready to respond immediately to all our emails and calls. I would recommend working with Elizabeth to anyone planning an event.',
  'I have worked closely with Elizabeth Caragay Watts-Russell for over 5 years to help me with the hotel site selection inclusive of the searching among several hotel contenders, coordinating site visits, negotiating the best values and terms, contracting and advocating on our behalf every step of the way through the conclusion of the conferences. I cannot recommend her services enough. Not only does she find us the best fit every time, she always ensures we get the best deal and best terms in our contract. Another thing I really appreciate about working with her is her incredible support throughout and until the termination of the program. Elizabeth is always an incredible advocate and representative. I would not plan an event without her.',
  'Elizabeth has been great to work with in all aspects of our event. Her professionalism, experience and ability to interact well at all levels are assets that anyone would want on their team and we are grateful that she is on ours!',
  'Hosting a large event, such as a conference, is a very intimidating task. Thankfully we had Elizabeth to help us out. Her expertise in contacting and negotiating room rates to the hotel industry took that daunting task off our hands which made the process easier for us to focus on planning for our event.',
];

export const searchDocuments: SearchDocument[] = [
  {
    title: 'Home',
    href: '/',
    excerpt:
      'Hotel site selection support for meeting planners from program inception through conclusion.',
    body:
      'SiteSelectionStrategist LLC is the meeting planner conference site selection partner and advocate. Services include hotel sourcing, proposal management, negotiation, site visits, contracting, advocacy, and program support.',
    tags: ['home', 'hotel', 'conference', 'site selection'],
  },
  {
    title: 'About',
    href: '/about-us-2/',
    excerpt:
      'A hospitality-rooted site selection partner for meeting planners and conference programs.',
    body:
      'SiteSelectionStrategist brings hospitality experience, hotel relationships, negotiation knowledge, and planner advocacy to meetings, incentives, conferences, and exhibitions.',
    tags: ['about', 'core competence', 'hospitality'],
  },
  {
    title: 'The CEO',
    href: '/the-ceo/',
    excerpt:
      'Elizabeth Caragay Watts-Russell is a hospitality professional and hotel site selection expert.',
    body:
      'Elizabeth Caragay Watts-Russell has over twenty years of experience with big hotel brands and boutique properties in administration, food and beverage, room sales, MICE site selection, negotiation, contracting, and planner advocacy.',
    tags: ['ceo', 'elizabeth', 'bio'],
  },
  {
    title: 'The Process',
    href: '/the-process/',
    excerpt:
      'Nine service areas covering hotel proposal, search, negotiation, site visits, contracting, and advocacy.',
    body: processItems.map((item) => `${item.title}. ${item.excerpt} ${item.body}`).join(' '),
    tags: ['process', 'proposal', 'negotiation', 'contracting'],
  },
  {
    title: 'Testimonials',
    href: '/testimonials/',
    excerpt:
      'Client testimonials about Elizabeth support with hotel site selection, contracts, and events.',
    body: testimonials.join(' '),
    tags: ['testimonials', 'clients', 'events'],
  },
  {
    title: 'Contact',
    href: '/contact-us/',
    excerpt: 'Contact SiteSelectionStrategist by phone or email.',
    body: `Contact SiteSelectionStrategist at ${contact.phoneDisplay} or ${contact.email}. ${contact.location} ${contact.reach}`,
    tags: ['contact', 'phone', 'email'],
  },
  ...processItems.map((item) => ({
    title: item.title,
    href: `/${item.slug}/`,
    excerpt: item.excerpt,
    body: item.body,
    tags: ['process', item.slug, item.title.toLowerCase()],
  })),
];
