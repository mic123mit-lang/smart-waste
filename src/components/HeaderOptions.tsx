"use client";

import React, { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
};

export default function HeaderOptions() {
  const [showCart, setShowCart] = useState(false);
  const [showVlog, setShowVlog] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const sampleProducts: CartItem[] = [
    { id: "p1", name: "Reusable Bin", price: 2499 },
    { id: "p2", name: "Compost Starter Kit", price: 1599 },
    { id: "p3", name: "Recycling Bag Pack", price: 799 },
  ];

  function addToCart(item: CartItem) {
    setCart((c) => [...c, item]);
  }

  function removeFromCart(id: string) {
    setCart((c) => c.filter((i) => i.id !== id));
  }

  function cartTotal() {
    return cart.reduce((s, i) => s + i.price, 0) / 100;
  }

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <button
        onClick={() => setShowCart((s) => !s)}
        aria-expanded={showCart}
        style={{
          background: "#0b5cff",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        🛒 Shopping ({cart.length})
      </button>

      <button
        onClick={() => setShowVlog(true)}
        style={{
          background: "white",
          color: "#0b5cff",
          border: "1px solid #0b5cff",
          padding: "8px 12px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        🎥 Vlog
      </button>

      {/* Shopping panel */}
      {showCart && (
        <div
          role="dialog"
          aria-label="Shopping panel"
          style={{
            position: "absolute",
            right: 20,
            top: 60,
            width: 320,
            background: "white",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            borderRadius: 8,
            padding: 16,
            zIndex: 40,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>Shop</strong>
            <button onClick={() => setShowCart(false)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
              ✖
            </button>
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{ marginBottom: 8 }}>
              {sampleProducts.map((p) => (
                <div
                  key={p.id}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>${(p.price / 100).toFixed(2)}</div>
                  </div>
                  <div>
                    <button
                      onClick={() => addToCart(p)}
                      style={{ background: "#0b5cff", color: "white", border: "none", padding: "6px 10px", borderRadius: 6 }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <hr />

            <div style={{ marginTop: 8 }}>
              <strong>Cart</strong>
              {cart.length === 0 ? (
                <div style={{ marginTop: 8, color: "#666" }}>Your cart is empty.</div>
              ) : (
                <div style={{ marginTop: 8 }}>
                  {cart.map((c) => (
                    <div key={c.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div>
                        <div style={{ fontWeight: 600 }}>{c.name}</div>
                        <div style={{ fontSize: 12, color: "#666" }}>${(c.price / 100).toFixed(2)}</div>
                      </div>
                      <div>
                        <button
                          onClick={() => removeFromCart(c.id)}
                          style={{ background: "transparent", border: "1px solid #ddd", padding: "4px 8px", borderRadius: 6 }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                    <div style={{ fontWeight: 700 }}>Total</div>
                    <div style={{ fontWeight: 700 }}>${cartTotal().toFixed(2)}</div>
                  </div>

                  <div style={{ marginTop: 10, textAlign: "right" }}>
                    <button
                      onClick={() => alert("Checkout flow not implemented in demo.")}
                      style={{ background: "#00b37e", color: "white", border: "none", padding: "8px 12px", borderRadius: 6 }}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Vlog modal */}
      {showVlog && (
        <div
          role="dialog"
          aria-label="Vlog modal"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.45)",
            zIndex: 50,
          }}
          onClick={() => setShowVlog(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "white", width: "min(900px, 95%)", borderRadius: 8, overflow: "hidden" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", padding: 12, borderBottom: "1px solid #eee" }}>
              <strong>Vlog</strong>
              <button onClick={() => setShowVlog(false)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                ✖
              </button>
            </div>

            <div style={{ padding: 16 }}>
              <p style={{ marginTop: 0 }}>
                Welcome to the SmartWaste vlog — short videos about waste reduction, driver stories, and route highlights. This demo embeds a sample video.
              </p>

              {/* example embed - replace src with real vlog link or internal player */}
              <div style={{ position: "relative", aspectRatio: "16/9", background: "#000" }}>
                <iframe
                  title="SmartWaste demo vlog"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div style={{ marginTop: 12 }}>
                <strong>Recent vlog posts</strong>
                <ul>
                  <li>How drivers optimize routes — 3:12</li>
                  <li>Citizen recycling tips — 2:05</li>
                  <li>Rewards & incentives explained — 4:20</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
