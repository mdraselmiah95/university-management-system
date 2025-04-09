export const semesterOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();
export const yearOptions = Array.from({ length: 8 }, (_, i) => ({
  value: String(currentYear + i),
  label: String(currentYear + i),
}));
