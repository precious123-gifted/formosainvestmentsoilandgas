import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Whyus`.
 */
export type WhyusProps = SliceComponentProps<Content.WhyusSlice>;

/**
 * Component for "Whyus" Slices.
 */
const Whyus = ({ slice }: WhyusProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for whyus (variation: {slice.variation}) Slices
    </section>
  );
};

export default Whyus;
