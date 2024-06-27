import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Clients`.
 */
export type ClientsProps = SliceComponentProps<Content.ClientsSlice>;

/**
 * Component for "Clients" Slices.
 */
const Clients = ({ slice }: ClientsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for clients (variation: {slice.variation}) Slices
    </section>
  );
};

export default Clients;
