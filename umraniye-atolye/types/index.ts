export interface WorkshopStat {
  id: string;
  value: number | null;
  display: string;
  label: string;
  sublabel: string;
  color: string;
}

export interface WorkshopService {
  id: string;
  icon: string;
  title: string;
  desc: string;
  badge: string;
  badgeVariant: string;
  detail: string;
  featured: boolean;
  longDesc?: string;
  benefits?: string[];
  slug?: string | null;
}

export interface WorkshopStep {
  n: string;
  icon: string;
  title: string;
  desc: string;
  tag: string;
  longDesc?: string;
}

export interface TransitOption {
  icon: string;
  label: string;
  detail: string;
  highlight: boolean;
}

export interface Testimonial {
  name: string;
  initials: string;
  role: string;
  district: string;
  platform: string;
  stars: number;
  text: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export interface OtherWorkshop {
  name: string;
  side: string;
  type: string;
  href: string;
}

export interface BookingData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  date: string;
  timeSlot: string;
  platforms: string[];
  bagTypes: string[];
  bagCount: string;
  isB2B: boolean;
  companyName?: string;
  notes?: string;
  consent: true;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
