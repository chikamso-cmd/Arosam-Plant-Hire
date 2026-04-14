import { Machine } from '../types';

export const machines: Machine[] = [
  {
    id: "cat-320-gc",
    name: "CAT 320 GC Excavator",
    desc: "High-performance hydraulic excavator for heavy-duty digging and lifting tasks.",
    fullDesc: "The Cat® 320 GC Excavator balances productivity with easy-to-use technology features, a new comfortable cab, reduced fuel consumption by up to 20%, and lower maintenance costs by up to 25% to bring you a durable, low-cost-per-hour excavator for your applications.",
    img: "/cat320.jpg",
    specs: [
      { label: "Engine Power", val: "107 kW" },
      { label: "Operating Weight", val: "21,900 kg" },
      { label: "Max Digging Depth", val: "6,720 mm" },
      { label: "Bucket Capacity", val: "1.2 m³" }
    ],
    category: "Excavator"
  },
  {
    id: "d6-dozer",
    name: "D6 Dozer",
    desc: "Powerful bulldozer designed for earthmoving and site preparation with maximum efficiency.",
    fullDesc: "The D6 Dozer is a versatile machine that delivers the power and precision needed for a wide range of tasks, from heavy dozing to fine grading. Its advanced powertrain and hydraulic systems ensure maximum productivity and fuel efficiency.",
    img: "/d6dozer.jpg",
    specs: [
      { label: "Engine Power", val: "161 kW" },
      { label: "Operating Weight", val: "19,000 kg" },
      { label: "Blade Capacity", val: "4.3 m³" },
      { label: "Track Width", val: "610 mm" }
    ],
    category: "Bulldozer"
  },
  {
    id: "745-articulated-truck",
    name: "745 Articulated Truck",
    desc: "Reliable off-road dump truck for transporting large volumes of material across rough terrain.",
    fullDesc: "The Cat® 745 Articulated Truck features a world-class cab design, re-engineered using global operator feedback to advance comfort and ease of operation. Improvements include new controls, transmission-protection features, hoist-assist system, and advanced traction control.",
    img: "/745 Articulated Truck.jpg",
    specs: [
      { label: "Payload Capacity", val: "41.0 tonnes" },
      { label: "Engine Power", val: "376 kW" },
      { label: "Max Speed", val: "55 km/h" },
      { label: "Body Capacity", val: "25 m³" }
    ],
    category: "Truck"
  },
  {
    id: "950m-wheel-loader",
    name: "950M Wheel Loader",
    desc: "Versatile loader for material handling, truck loading, and general construction work.",
    fullDesc: "The Cat® 950M Wheel Loader provides significant fuel savings while lowering long-term costs. This machine is designed to be more efficient, more productive, and easier to maintain, making it a top choice for any job site.",
    img: "/loader.jpg",
    specs: [
      { label: "Engine Power", val: "171 kW" },
      { label: "Operating Weight", val: "19,200 kg" },
      { label: "Bucket Capacity", val: "2.5 - 9.2 m³" },
      { label: "Static Tipping Load", val: "12,600 kg" }
    ],
    category: "Wheel Loader"
  },
  {
    id: "D8K Bulldozer",
    name: "D8K Bulldozer",
    desc: "The Caterpillar D8K Bulldozer is a powerful, heavy-duty machine built for demanding earthmoving and construction operations. Engineered for strength, durability, and consistent performance, the D8K remains a trusted choice for projects that require high pushing power and reliability in tough environments.",
    fullDesc: " Performance & Power Powered by a robust turbocharged diesel engine delivering approximately 300 horsepower, the D8K is designed to handle heavy loads with ease. Its strong torque output ensures efficient performance during grading, land clearing, and large-scale material movement. Built for Heavy-Duty Work With an operating weight of over 30 tons, this bulldozer provides exceptional traction and stability across rough and uneven terrain. The crawler track system allows it to operate efficiently on soft soil, making it ideal for construction sites, mining operations, and road development projects.",
    img: "/d8k.jpg",
    specs: [
      { label: "Engine Power", val: "300 hp" },
      { label: "Operating Weight", val: "32 tons" },
      { label: "Bucket Capacity", val: "20.4l - 640l m³" },
      { label: "Static Tipping Load", val: "12,600 kg" }
    ],
    category: "Bulldozer"
  },
];
