import AnimatedSection from "../shared/ui/AnimatedSection"
import ExpandableList from "../shared/ui/ExpandableList";
import {faqItems} from "@/constants";

export default function FAQ() {
  return (
    <AnimatedSection className="mt-16 sm:mt-20 lg:mt-24">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 rounded-xl scroll-mt-23 pt-5" id="fqas">
        <p className="font-bold text-xl text-green-600 uppercase tracking-widest mb-1">
          F.A.Q. SECTION
        </p>
      </div>

      {/* FAQ List */}
      <ExpandableList
        items={faqItems}
        allowMultiple={false}
        className="max-w-3xl mx-auto space-y-3 sm:space-y-4"
      />

    </AnimatedSection>
  );
}