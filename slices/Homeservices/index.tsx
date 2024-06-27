import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Homeservices`.
 */
export type HomeservicesProps = SliceComponentProps<Content.HomeservicesSlice>;

/**
 * Component for "Homeservices" Slices.
 */
const Homeservices = ({ slice }: HomeservicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for homeservices (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Homeservices;
