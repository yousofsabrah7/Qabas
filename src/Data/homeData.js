import image18 from "../assets/image18.png";
import image15 from "../assets/image15.png";
import image17 from "../assets/image17.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.png";
import image29 from "../assets/image29.png";
import image32 from "../assets/image32.png";
import image31 from "../assets/image31.png";
import image30 from "../assets/image30.png";
import image33 from "../assets/image33.png";
import { Lightbulb, WandSparkles, Sprout, DraftingCompass, Rocket } from "lucide-react";

export const features = [
  { title: "فكرة", description: "نساعدك على اكتشاف وتطوير فكرتك.", icon: Lightbulb },
  { title: "مهارة", description: "نزودك بالمعرفة والخبرة اللازمة لبناء مشروعك.", icon: WandSparkles },
  { title: "أثر", description: "نساعدك على تحويل فكرتك إلى قيمة حقيقية.", icon: Sprout },
];
export const stages = [
  { image: image18, title: "01- مرحلة التدريب", description: "7 أسابيع من التدريب المكثف." },
  { image: image15, title: "02- مرحلة الحضانة", description: "دعم مشاريع جاهزة للنمو." },
  { image: image17, title: "03- بازار الجامعة", description: "تجربة بيع حقيقية." },
];
export const journey = [
  { num: "01", icon: Lightbulb, title: "اكتشف", desc: "نساعدك على اكتشاف الفكرة وتحديد المشكلة التي تستحق الحل." },
  { num: "02", icon: DraftingCompass, title: "طوّر", desc: "نحوّل الفكرة إلى نموذج واضح وقابل للتجربة والتطوير." },
  { num: "03", icon: Rocket, title: "أطلق", desc: "نساعدك على تحويل المشروع إلى واقع وبناء أساس لنموه." },
];
const projectDescription = "علامة تجارية تقدم منتجات غذائية محلية صحية و ذات جودة عالية.";
export const projects = [
  { image: image27, title: "مذاق", description: projectDescription },
  { image: image28, title: "خطوة", description: projectDescription },
  { image: image29, title: "بيئة", description: projectDescription },
];
export const partners = [image32, image31, image30, image33];
export const footerLinks = [
  { title: "الرئيسية", path: "/" },
  { title: "المراحل", path: "/stages" },
  { title: "مشاريع قبس", path: "/projects" },
  { title: "الشركاء", path: "/partners" },
  { title: "تواصل", path: "/contact" },
];
