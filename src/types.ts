export interface Machine {
  id: string;
  name: string;
  desc: string;
  fullDesc: string;
  img: string;
  specs: {
    label: string;
    val: string;
  }[];
  category: string;
  price?: string;
}

export interface NavLink {
  name: string;
  href: string;
}
