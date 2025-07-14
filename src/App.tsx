import React, { useState, useEffect, useRef } from "react";
import menuData from "./menuData";

const App = () => {
  const [cart, setCart] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(menuData[0].category);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [lastTransaction, setLastTransaction] = useState(null);
  const receiptRef = useRef();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const decreaseFromCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.name === item.name);
      if (existing && existing.quantity > 1) {
        return prevCart.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevCart.filter((i) => i.name !== item.name);
      }
    });
  };

  const getQuantity = (name) => {
    const found = cart.find((item) => item.name === name);
    return found ? found.quantity : 0;
  };

  const getItemTotal = (name) => {
    const found = cart.find((item) => item.name === name);
    return found ? found.quantity * found.price : 0;
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const formatPrice = (price) => `Rp${price.toLocaleString("id-ID")}`;

  const filteredItems = searchTerm
    ? menuData
        .flatMap((cat) =>
          cat.items.map((item) => ({
            ...item,
            category: cat.category,
          }))
        )
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : menuData.find((c) => c.category === currentCategory)?.items || [];

  const saveTransaction = (method) => {
    const history = JSON.parse(localStorage.getItem("transactions")) || [];
    const newRecord = {
      timestamp: new Date().toISOString(),
      items: cart,
      total: totalPrice,
      method,
    };
    history.push(newRecord);
    localStorage.setItem("transactions", JSON.stringify(history));
    setLastTransaction(newRecord);
  };

  const confirmPayment = (method) => {
    alert(`Pembayaran berhasil (${method})!`);
    saveTransaction(method);
    setCart([]);
    localStorage.removeItem("cart");
    setShowCart(false);
    setShowQR(false);
    setShowPaymentOptions(false);
    setShowReceipt(true);
    setTimeout(() => {
      window.print();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="bg-blue-900 text-white p-4 text-center text-2xl font-bold">
        INTERAKSI SPACE CAFE
      </header>

      <nav className="flex flex-wrap justify-center gap-3 p-3 text-sm bg-gray-100">
        {menuData.map((cat) => (
          <button
            key={cat.category}
            className={`py-1 px-3 rounded-full ${
              currentCategory === cat.category
                ? "bg-blue-800 text-white"
                : "bg-white border"
            }`}
            onClick={() => {
              setCurrentCategory(cat.category);
              setSearchTerm("");
            }}
          >
            {cat.category}
          </button>
        ))}
      </nav>

      <div className="px-4 pt-2 pb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cari menu..."
          className="w-full border p-2 rounded"
        />
      </div>

      <main className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems?.map((item) => {
          const qty = getQuantity(item.name);
          return (
            <div
              key={item.name}
              className="border rounded-xl p-4 flex flex-col items-center text-center"
            >
              <img
                src={`https://via.placeholder.com/100x100.png?text=${encodeURIComponent(
                  item.name
                )}`}
                alt={item.name}
                className="w-24 h-24 object-cover mb-2 rounded"
              />
              <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
              <p className="text-blue-900 font-bold mb-1">
                {(item.price / 1000).toFixed(0)} K
              </p>
              <div className="flex gap-2 mb-1">
                <button
                  onClick={() => decreaseFromCart(item)}
                  className="bg-red-500 text-white px-2 py-1 rounded-full text-sm"
                >
                  ➖
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-900 text-white px-3 py-1 rounded-full hover:bg-blue-700"
                >
                  ➕
                </button>
              </div>
              {qty > 0 && (
                <div className="text-sm text-blue-900 font-semibold">
                  {qty} pcs • {formatPrice(getItemTotal(item.name))}
                </div>
              )}
            </div>
          );
        })}
      </main>

      <footer className="fixed bottom-0 w-full bg-white border-t p-4 flex justify-between items-center">
        <button
          className="text-blue-900 font-semibold"
          onClick={() => setShowCart(true)}
        >
          View Cart ({totalItems})
        </button>
        <button
          className="bg-blue-900 text-white px-5 py-2 rounded-xl font-bold"
          onClick={() => setShowCart(true)}
        >
          {formatPrice(totalPrice)}
        </button>
      </footer>

      {showCart && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
          <h2 className="text-xl font-bold mb-4">Keranjang</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.name} className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => decreaseFromCart(item)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    ➖
                  </button>
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-600 text-white px-2 rounded"
                  >
                    ➕
                  </button>
                </div>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <strong>Total</strong>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              onClick={() => {
                setShowCart(false);
                setShowPaymentOptions(true);
              }}
              className="bg-blue-700 text-white px-4 py-2 rounded"
            >
              Lanjut Pembayaran
            </button>
            <button
              onClick={() => setShowCart(false)}
              className="border px-4 py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {showPaymentOptions && (
        <div className="fixed inset-0 bg-white z-50 p-4 overflow-auto">
          <h2 className="text-xl font-bold mb-4">Pilih Metode Pembayaran</h2>
          <div className="space-y-4">
            <button
              onClick={() => confirmPayment("Bayar di Kasir")}
              className="bg-green-700 text-white px-6 py-3 rounded text-lg w-full"
            >
              Bayar di Kasir
            </button>
            <button
              onClick={() => {
                setShowQR(true);
                setShowPaymentOptions(false);
              }}
              className="bg-purple-700 text-white px-6 py-3 rounded text-lg w-full"
            >
              Bayar via QRIS
            </button>
          </div>
        </div>
      )}

      {showQR && (
        <div className="fixed inset-0 bg-white z-50 p-4 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Scan QRIS untuk Bayar</h2>
          <img
            src="https://via.placeholder.com/200x200.png?text=QR+Payment"
            alt="QRIS"
            className="mb-4"
          />
          <button
            onClick={() => confirmPayment("QRIS")}
            className="bg-blue-700 text-white px-6 py-3 rounded"
          >
            Sudah Bayar
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
