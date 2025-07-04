interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
  { label: "Hot Deals", href: "/hot-deals" },
];

export const quickLinksData = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "FAQs", href: "/faqs" },
  { title: "Help", href: "/help" },
];
export const categoriesData = [
  { title: "Mobiles", href: "mobiles" },
  { title: "Appliances", href: "appliances" },
  { title: "Smartphones", href: "smartphones" },
  { title: "Air Conditioners", href: "air-conditioners" },
  { title: "Washing Machine", href: "washing-machine" },
  { title: "Kitchen Appliances", href: "kitchen-appliances" },
  { title: "gadget accessories", href: "gadget-accessories" },
];
export const productType = [
  { title: "Gadget", value: "gadget" },
  { title: "Appliances", value: "appliances" },
  { title: "Refrigerators", value: "refrigerators" },
  { title: "Others", value: "others" },
];
export default menuItems;
