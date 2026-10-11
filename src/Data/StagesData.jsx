
import stageImage from "../assets/training layer.png";
import stageImage1 from "../assets/incubator layer.png";
import stageImage2 from "../assets/bazaar layer.svg";
import timelineEnd from "../assets/stars.svg"

import curvedLine1 from "../assets/Vector 3.svg";
import curvedLine2 from "../assets/Vector 4.svg";
import curvedLine3 from "../assets/Vector 3-1.svg";

export const stagesData = [
    {
        id: 1,
        number: "01",
        phase: "المرحلة الأولى",
        title: "التدريب",
        duration: "7 أسابيع",

        subtitle: "من التدريب المكثف لبناء المهارات وتطوير الفكرة.",

        description:
            "تبدأ الرحلة ببناء الأساس المعرفي والمهارات الريادية التي تساعدك على فهم فكرتك وتطويرها وتحويلها إلى مشروع أكثر وضوحًا واستعدادًا للخطوة التالية.",

        listTitle: "ماذا ستتعلم؟",

        learn: [
            "أساسيات ريادة الأعمال",
            "تحليل المشكلة وتحديد الفرص",
            "التسويق والهوية التجارية",
            "الإدارة المالية والتسعير",
            "اختبار الفكرة في السوق",
        ],

        image: stageImage,
        imageAlt: "مرحلة التدريب في قبس",

        theme: "light",
        imagePosition: "left",

        timeline: {
            line: curvedLine1,
            position:
                "lg:right-[calc(50%-80px)] xl:right-[537.55px]",
            dotPosition: "top-[45%] lg:left-[30px] xl:left-[37px]",
        },
        imageConfig: {
            containerClass: "",
            imageClass: "relative z-10 w-full max-w-[619.296px] h-auto object-contain",
            circles: [
                "absolute -left-16 top-0",
                "absolute left-1/2 top-1/2",
            ],
        },
    },

    {
        id: 2,
        number: "02",
        phase: "المرحلة الثانية",
        title: "الحضانة",
        duration:" من الفكرة إلى مشروع جاهز للنمو.",

        subtitle: "",

        description:
            " في هذه المرحلة، تحصل المشاريع الجاهزة للنمو على الدعم الذي يساعدها على الانتقال من مرحلة الفكرة والتطوير إلى مرحلة أكثر استعدادًا للتطبيق والنمو.",

        listTitle: "ماذا تقدم لك الحضانة؟ ",

        learn: [
            "  تقييم جاهزية المشروع",
            "الارشاد والمتابعة المستمرة",
            " تطوير المنتج او الخدمة",
            "بناء الشراكات وفرص النمو",
            "الاستعداد لدخول السوق",
        ],

        image: stageImage1,
        imageAlt: "مرحلة الحضانة في قبس",

        theme: "dark",
        imagePosition: "right",

        timeline: {
            line: curvedLine2,
            position:
                "lg:right-[calc(50%-80px)] xl:right-[537.551px]",
            dotPosition: "top-[35%] left-[95px]",
        },
        imageConfig: {
            containerClass: "",
            imageClass: "relative z-10 w-full max-w-[528px] h-auto object-contain",
            circles: [
                "absolute -right-16 top-0",
                "absolute right-1/3 top-1/2",
            ],
        },
    },

    {
        id: 3,
        number: "03",
        phase: "المرحلة الثالثة",
        title: "بازار الجامعة",
        duration: "من مشروعك… إلى الجمهور.",

        subtitle: "",

        description:
            " تجربة بيع حقيقية تتيح للمشاريع فرصة عرض منتجاتها أمام الجمهور، والتفاعل مع العملاء، واختبار المشروع في بيئة واقعية.",

        listTitle: " ماذا تنتظر هنا؟",

        learn: [
            "عرض المشروع أمام الجمهور",
            "تجربة البيع المباشر",
            " بناء أول قاعدة من العملاء",
            " تقييم النتائج وتحسين المشروع",
            "الاستعداد للتوسع والنمو",
        ],

        image: stageImage2,
        imageAlt: "بازار الجامعة في قبس",

        theme: "light",
        imagePosition: "left",

        timeline: {
            line: curvedLine3,

            position:
                "lg:right-[calc(50%-80px)] xl:right-[523.075px]",

            dotPosition: "top-[55%] left-[20px]",

            clipBottom: true,
            endImage: timelineEnd,
            endPosition: " left-[35px]",
        },
        imageConfig: {
            containerClass: "",
            imageClass: "relative z-10 w-full max-w-[427.022px] h-auto object-contain",
            circles: [
                "absolute -left-16 top-0",
                "absolute left-1/2 top-1/2",
            ],
        },
    },
];
