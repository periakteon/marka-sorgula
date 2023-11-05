type Brand = {
  brandName: string;
  brandLogo: string;
  isBoycotted: boolean;
  proof: string;
};

const brands: readonly Brand[] = [
  {
    brandName: "Coca-Cola",
    brandLogo: "/brand-logos/coca-cola.png",
    isBoycotted: true,
    // news link or something like that
    proof: "https://www.coca-colacompany.com/contact-us/faqs",
  },
] as const;

export default brands;
