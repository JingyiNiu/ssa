import { AddressForm } from "../AddressForm";

const MOCK_BILLING = {
  name: "John Doe",
  line1: "123 Main Street",
  line2: "Apt 4B",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "United States",
};

export default function BillingAddressPage() {
  return <AddressForm title="Billing address" initialValues={MOCK_BILLING} />;
}
