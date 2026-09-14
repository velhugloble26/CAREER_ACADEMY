export type Language = "mr" | "en";
export type Copy = { mr: string; en: string };
export const t = (copy: Copy, lang: Language) => copy[lang];

export const contact = {
  phones: ["8805667100", "9850789322", "8380066080"],
  nashik: {
    mr: "आर. के. सर्कल, पेठे विद्यालयासमोर, नाशिक ४२२००१",
    en: "R. K. Circle, opposite Pethe Vidyalaya, Nashik 422001",
  },
  branch: {
    mr: "हॉटेल सनराईजच्या बाजूला, राम टॉवर्स, अकोट रोड, दर्यापूर (अमरावती)",
    en: "Beside Hotel Sunrise, Ram Towers, Akot Road, Daryapur (Amravati)",
  },
};

export const nav = [
  { to: "/", label: { mr: "मुख्यपृष्ठ", en: "Home" } },
  { to: "/about", label: { mr: "आमच्याबद्दल", en: "About" } },
  { to: "/courses", label: { mr: "अभ्यासक्रम", en: "Courses" } },
  { to: "/success", label: { mr: "यशोगाथा", en: "Success" } },
  // { to: "/workshops", label: { mr: "मार्गदर्शन / कार्यशाळा", en: "Workshops" } },
  // { to: "/books", label: { mr: "पुस्तके", en: "Books" } },
  { to: "/gallery", label: { mr: "गॅलरी", en: "Gallery" } },
  { to: "/contact", label: { mr: "संपर्क", en: "Contact" } },
] as const;

export const courses = [
  { key: "mpsc", to: "/mpsc", name: { mr: "MPSC", en: "MPSC" }, desc: { mr: "महाराष्ट्र लोकसेवा आयोग परीक्षेसाठी मार्गदर्शन", en: "Guidance for Maharashtra Public Service Commission examinations" }, suitable: { mr: "राज्यसेवा व संबंधित MPSC परीक्षा", en: "State Services and related MPSC exams" } },
  { key: "psi", to: "/psi-police", name: { mr: "PSI / Police", en: "PSI / Police" }, desc: { mr: "PSI आणि पोलीस भरती परीक्षेची तयारी", en: "Preparation for PSI and police recruitment examinations" }, suitable: { mr: "PSI व पोलीस भरती", en: "PSI and Police Recruitment" } },
  { key: "tet", to: "/tet", name: { mr: "TET", en: "TET" }, desc: { mr: "महाराष्ट्र शिक्षक पात्रता परीक्षेसाठी तयारी", en: "Preparation for Maharashtra Teacher Eligibility Test" }, suitable: { mr: "महाराष्ट्र TET", en: "Maharashtra TET" } },
  { key: "military", to: "/psi-police", name: { mr: "Police & Military Recruitment", en: "Police & Military Recruitment" }, desc: { mr: "पोलीस व सैन्य भरती प्रशिक्षण", en: "Police and military recruitment training" }, suitable: { mr: "पोलीस व सैन्य भरती", en: "Police and Military Recruitment" } },
] as const;

export const benefits = [
  { mr: "परीक्षाभिमुख मार्गदर्शन", en: "Exam-focused guidance" },
  { mr: "अनुभवी मार्गदर्शन", en: "Experienced guidance" },
  { mr: "नियमित सराव व तयारी", en: "Regular practice and preparation" },
  { mr: "आवश्यक विषयांची तयारी", en: "Preparation of essential subjects" },
  { mr: "सराव परीक्षा / टेस्ट तयारी", en: "Practice tests and test preparation" },
  { mr: "विद्यार्थ्यांच्या यशावर भर", en: "Focus on student success" },
  { mr: "अभ्यासासाठी उपयुक्त नोट्स", en: "Useful study notes" },
  { mr: "मार्गदर्शक वातावरण", en: "Supportive learning environment" },
];
