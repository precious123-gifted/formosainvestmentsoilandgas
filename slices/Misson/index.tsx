import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Misson`.
 */
export type MissonProps = SliceComponentProps<Content.MissonSlice>;

/**
 * Component for "Misson" Slices.
 */
const Misson = ({ slice }: MissonProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for misson (variation: {slice.variation}) Slices
    </section>
  );
};

export default Misson;
