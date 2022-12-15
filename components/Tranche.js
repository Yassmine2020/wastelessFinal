export default function Tranche(props) {
  const kWh = props.kWh;
  let tranche = 0;
  let price = 0;
  let unit_price = 0;
  const PU1 = 0.901;

  if (0 <= kWh <= 100) {
    unit_price = 0.901;
    tranche = "1ère";
  }
  if (101 <= kWh <= 150) {
    unit_price = 1.0732;
    tranche = "2éme";
    price = 100 * PU1 + unit_price * (kWh - 100);
  }
  if (151 <= kWh <= 200) {
    unit_price = 1.0732;
    tranche = "3éme";
    price = kWh * unit_price;
  }

  if (201 <= kWh <= 300) {
    unit_price = 1.1676;
    tranche = "4éme";
    price = kWh * unit_price;
  }

  if (301 <= kWh <= 500) {
    unit_price = 1.3817;
    tranche = "5ème";
    price = kWh * unit_price;
  }

  if (500 < kWh) {
    unit_price = 1.5958;
    tranche = "6ème";
    price = kWh * unit_price;
  }

  return (
    <div>
      <div>tranche : {tranche}</div> <div>price : {price}</div>
    </div>
  );
}
