import { AddressForm } from "../AddressForm";

const MOCK_SHIPPING = {
  name: "John Doe",
  line1: "456 Oak Avenue",
  line2: "",
  city: "Los Angeles",
  state: "CA",
  zip: "90001",
  country: "United States",
};

export default function ShippingAddressPage() {
  return <AddressForm title="Shipping address" initialValues={MOCK_SHIPPING} />;
}
