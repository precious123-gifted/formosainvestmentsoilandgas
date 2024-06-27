import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Allproducts`.
 */
export type AllproductsProps = SliceComponentProps<Content.AllproductsSlice>;

/**
 * Component for "Allproducts" Slices.
 */
const Allproducts = ({ slice }: AllproductsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for allproducts (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Allproducts;
