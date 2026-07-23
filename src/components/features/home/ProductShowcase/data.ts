import type { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    icon: "🏫",
    title: "School Management System",
    description:
      "Complete digital platform for schools, colleges, and universities.",

    status: "In Development",

    color: "from-blue-600 to-cyan-500",

    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Java",
      "MySQL",
    ],

    features: [
      "Student Portal",
      "Teacher Portal",
      "Parent Portal",
      "Enrollment",
      "Attendance",
      "Grading",
    ],
  },

  {
    id: 2,
    icon: "👥",
    title: "HR & Payroll System",
    description:
      "Enterprise HR platform for employee management and payroll.",

    status: "Coming Soon",

    color: "from-emerald-600 to-green-500",

    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
    ],

    features: [
      "Payroll",
      "Attendance",
      "Recruitment",
      "Leave",
      "Performance",
      "Reports",
    ],
  },

  {
    id: 3,
    icon: "🏨",
    title: "Hotel Management System",

    description:
      "Reservation, billing, housekeeping and guest management.",

    status: "Coming Soon",

    color: "from-violet-600 to-purple-500",

    technologies: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
    ],

    features: [
      "Reservation",
      "Front Desk",
      "Billing",
      "Rooms",
      "Reports",
      "Analytics",
    ],
  },

  {
    id: 4,
    icon: "🍽",
    title: "Restaurant POS",

    description:
      "Modern restaurant POS with QR ordering and kitchen display.",

    status: "Coming Soon",

    color: "from-orange-500 to-red-500",

    technologies: [
      "React",
      "Spring Boot",
      "MySQL",
    ],

    features: [
      "POS",
      "QR Ordering",
      "Kitchen Display",
      "Inventory",
      "Reports",
      "Analytics",
    ],
  },

  {
    id: 5,
    icon: "📦",
    title: "Inventory Management",

    description:
      "Warehouse and inventory tracking platform.",

    status: "Coming Soon",

    color: "from-indigo-600 to-blue-500",

    technologies: [
      "React",
      "Java",
      "MySQL",
    ],

    features: [
      "Warehouse",
      "Barcode",
      "Suppliers",
      "Purchasing",
      "Reports",
      "Analytics",
    ],
  },

  {
    id: 6,
    icon: "🏥",
    title: "Hospital Management",

    description:
      "Integrated hospital software for clinics and healthcare providers.",

    status: "Coming Soon",

    color: "from-red-600 to-pink-500",

    technologies: [
      "React",
      "Spring Boot",
      "Java",
      "MySQL",
    ],

    features: [
      "EMR",
      "Appointments",
      "Pharmacy",
      "Laboratory",
      "Billing",
      "Doctors",
    ],
  },
];