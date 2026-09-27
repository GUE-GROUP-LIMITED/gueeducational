"use client";

import { useEffect, useMemo, useState } from "react";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

const formatDate = (value) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString();
};

const formatAmount = (order) => {
  if (typeof order.amount === "number") {
    return `$${order.amount.toFixed(2)}`;
  }
  if (typeof order.amountKobo === "number") {
    return `$${(order.amountKobo / 100).toFixed(2)}`;
  }
  return "-";
};

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/orders", { cache: "no-store" });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Unable to load orders.");
        }

        setOrders(Array.isArray(payload.orders) ? payload.orders : []);
      } catch (fetchError) {
        setError(fetchError.message || "Unable to load orders.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const sortedOrders = useMemo(
    () =>
      [...orders].sort((a, b) => {
        const aDate = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const bDate = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return bDate - aDate;
      }),
    [orders]
  );

  return (
    <Layout>
      <PageBanner titleHtml={`Ord<span>ers</span>`} titleText="Orders" />

      <section className="gue-page-section">
        <div className="gue-page-section__header">
          <p className="gue-page-section__kicker">Payments</p>
          <h2 className="gue-page-section__title">Order and payment records</h2>
          <p className="gue-page-section__copy">
            This dashboard lists payment attempts and verified order activity from the current API.
          </p>
        </div>

        {isLoading && <p className="gue-page-section__copy">Loading orders...</p>}
        {!isLoading && error && <p className="gue-page-section__copy">{error}</p>}

        {!isLoading && !error && (
          <div className="gue-orders-table-wrap">
            <table className="gue-orders-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Plan</th>
                  <th>Billing</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {sortedOrders.length === 0 && (
                  <tr>
                    <td colSpan={7}>No orders found yet.</td>
                  </tr>
                )}

                {sortedOrders.map((order) => {
                  const status = (order.status || "pending").toLowerCase();

                  return (
                    <tr key={order.reference || `${order.createdAt}-${order.updatedAt}`}>
                      <td>{order.reference || "-"}</td>
                      <td>{order.plan || "-"}</td>
                      <td>{order.billing || "-"}</td>
                      <td>{formatAmount(order)}</td>
                      <td>
                        <span className={`gue-orders-badge gue-orders-badge--${status}`}>
                          {status}
                        </span>
                      </td>
                      <td>{order.customerEmail || order.email || "-"}</td>
                      <td>{formatDate(order.updatedAt || order.createdAt || order.paidAt)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default OrdersPage;
