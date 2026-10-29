
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const fields = [
  "جميع المجالات",
  "التكنولوجيا",
  "التعليم",
  "الصحة",
  "التجارة",
  "الزراعة",
  "التصميم",
];

export default function ProjectFilters({
  onSearchChange,
  onFieldChange,
  projects = [],
}) {
  const [search, setSearch] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const projectFields = projects
    .map((project) => project.category)
    .filter(Boolean);
  const availableFields = [
    ...new Set([...fields, ...projectFields]),
  ];

  const handleFieldSelect = (field) => {
    const value = field === "جميع المجالات" ? "" : field;

    setSelectedField(value);
    onFieldChange?.(value);
    setIsOpen(false);
  };

  return (
    <div
      dir="rtl"
      className="
        mx-auto
        flex
        w-full
        max-w-[1440px]
        flex-col
        items-stretch
        gap-4
        px-5
        py-8

        sm:px-8
        md:flex-row
        md:items-center
        md:gap-3

        lg:py-10
      "
    >
      {/* FILTER */}
      <div className="relative w-full shrink-0 md:w-auto">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="
            flex
            h-[56px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-[48px]
            border
            border-[#DDDDDD]
            bg-[#FEFEFE]
            px-5
            text-[#64748B]
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
            transition-colors
            hover:border-[#B8943F]

            md:h-[64px]
            md:w-auto
            md:justify-start

            lg:h-[80px]
            lg:px-6
          "
        >
          <SlidersHorizontal
            size={20}
            strokeWidth={1.7}
            className="shrink-0"
          />

          <span
            className="
              whitespace-nowrap
              text-[16px]
              md:text-[17px]
              lg:text-[20px]
            "
          >
            {selectedField || "تصفية حسب المجال"}
          </span>
        </button>

        {/* DROPDOWN */}
        {isOpen && (
          <div
            className="
              absolute
              right-0
              top-full
              z-50
              mt-2
              w-full
              min-w-[200px]
              overflow-hidden
              rounded-[16px]
              border
              border-[#DDDDDD]
              bg-[#FEFEFE]
              py-2
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              md:w-max
            "
          >
            {availableFields.map((field) => (
              <button
                key={field}
                type="button"
                onClick={() => handleFieldSelect(field)}
                className="
                  block
                  w-full
                  whitespace-nowrap
                  px-5
                  py-3
                  text-right
                  text-[15px]
                  text-[#64748B]
                  transition-colors
                  hover:bg-[#F8F6F0]
                  hover:text-[#B8943F]
                "
              >
                {field}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SEARCH */}
      <div
        className="
          flex
          h-[56px]
          w-full
          min-w-0
          items-center
          rounded-[48px]
          border
          border-[#DDDDDD]
          bg-[#FEFEFE]
          px-5
          shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]

          md:h-[64px]
          md:flex-1

          lg:h-[80px]
          lg:max-w-[800px]
          lg:px-6
        "
      >
        <Search
          size={20}
          strokeWidth={1.8}
          className="ml-3 shrink-0 text-[#475569]"
        />

        <input
          type="search"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            onSearchChange?.(value);
          }}
          placeholder="ابحث عن مشروع أو كلمة مفتاحية"
          aria-label="البحث عن مشروع"
          className="
            w-full
            min-w-0
            bg-transparent
            text-right
            text-[15px]
            text-[#334155]
            placeholder:text-[#94A3B8]
            outline-none

            sm:text-[17px]
            lg:text-[20px]
          "
        />
      </div>
    </div>
  );
}
