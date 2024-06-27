import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Homeproducts`.
 */
export type HomeproductsProps = SliceComponentProps<Content.HomeproductsSlice>;

/**
 * Component for "Homeproducts" Slices.
 */
const Homeproducts = ({ slice }: HomeproductsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for homeproducts (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Homeproducts;
