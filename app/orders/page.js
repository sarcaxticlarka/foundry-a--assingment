import ProtectedRoute from "../../components/protectedRoute";

const ordersData = [
  { id: "PZA001", customer: "John Doe", type: "Margherita", quantity: 2, date: "2025-05-29 12:00", status: "Pending" },
  { id: "PZA002", customer: "Jane Smith", type: "PizzaMeniaoni", quantity: 1, date: "2025-05-29 12:30", status: "Delivered" },
  //bahut sara aur bhi add krna
];

export default function Orders() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Pizza Orders</h1>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Pizza Type</th>
              <th>Quantity</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.type}</td>
                <td>{order.quantity}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  );
}
