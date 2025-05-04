import React from "react";
import { useEffect, useState } from "react";
import axios from "../api";
import { getUser, logout } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const user = getUser();
  const navigate = useNavigate();

  const fetchItems = async () => {
    // const res = await axios.get("/items");    import.meta.env.VITE_BACKEND_URL + "/api",
    // console.log("Token:", localStorage.getItem("token"));
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/items`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // console.log(res);
    setItems(res.data);
  };

  const createItem = async (e) => {
    e.preventDefault();
    await axios.post("/items", { name, description });
    setName("");
    setDescription("");
    fetchItems();
  };

  const deleteItem = async (id) => {
    try {
      const token = localStorage.getItem("token"); // localStorage se
      const res = await fetch(`http://localhost:8000/api/items/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('res:', res);
      if (res.ok) {
        setItems(items.filter((item) => item._id !== id));
      } else {
        const data = await res.json();
        console.error("Delete failed:", data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
    // fetchItems();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button onClick={handleLogout} className="text-red-500 underline">
          Logout
        </button>
      </div>

      <form className="mb-4" onSubmit={createItem}>
        <input
          className="border p-2 mr-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          className="border p-2 mr-2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          Add
        </button>
      </form>

      <ul>
        {items.map((item) => (
          <li
            key={item._id}
            className="border p-3 mb-2 flex justify-between items-center"
          >
            <div>
              <strong>{item.name}</strong>: {item.description}
            </div>
            {/* {console.log('user:', user?.role)} */}
            {user?.role === "admin" && (
              <button
                onClick={() => deleteItem(item._id)}
                className="text-red-600 font-bold"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
