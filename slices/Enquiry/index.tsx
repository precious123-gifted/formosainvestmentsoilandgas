import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Enquiry`.
 */
export type EnquiryProps = SliceComponentProps<Content.EnquirySlice>;

/**
 * Component for "Enquiry" Slices.
 */
const Enquiry = ({ slice }: EnquiryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for enquiry (variation: {slice.variation}) Slices
    </section>
  );
};

export default Enquiry;
