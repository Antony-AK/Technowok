"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TabletDashboardScreen() {
  return (
    <div className="absolute inset-0 bg-[#f3f4f8] text-black overflow-hidden">

      {/* 🔷 SIDEBAR */}
      <div className="absolute left-0 top-0 h-full w-24 bg-[#111] text-white flex flex-col items-center py-6 gap-8">
        {/* Logo Box */}
        <div className="w-12 h-12 bg-red-600 rounded-xl shadow-lg" />

        {/* Sidebar Icons */}
        {[1,2,3,4,5].map(i => (
          <div
            key={i}
            className="w-10 h-10 bg-white/15 rounded-xl hover:bg-red-600/70 transition"
          />
        ))}
      </div>

      {/* 🔷 MAIN CONTENT AUTO SCROLL */}
      <motion.div
        className="absolute left-28 top-0 right-0 px-6 py-6 space-y-7"
        initial={{ y: 0 }}
        animate={{ y: ["0%", "-60%", "0%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >

        {/* 🔥 HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Dashboard Overview</h2>
            <p className="text-xs text-gray-500">Updated 5 mins ago</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300 shadow-inner" />
        </div>

        {/* 🔥 STATS CARDS */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Active Users", color: "bg-blue-500" },
            { label: "Total Sales", color: "bg-green-500" },
            { label: "Revenue", color: "bg-purple-500" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className={`w-8 h-8 ${item.color} rounded-md mb-2`} />
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="font-bold text-xl mt-1">
                {Math.floor(Math.random()*9000) + 1000}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 GRAPH CARD */}
        <div className="w-full bg-white rounded-xl shadow-lg p-5 border border-gray-100">
          <p className="text-sm font-semibold mb-3 text-gray-700">Monthly Analytics</p>

          {/* Fake Bar Graph */}
          <div className="flex items-end gap-3 h-32">
            {[30, 60, 45, 80, 55, 95, 70].map((h, i) => (
              <div
                key={i}
                className="w-6 bg-red-500/70 rounded-md animate-pulse"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* 🔥 MINI CARDS ROW */}
        <div className="grid grid-cols-4 gap-4">
          {["Orders", "Refunds", "Tickets", "Sessions"].map((item, i) => (
            <div key={i} className="p-3 bg-white rounded-xl border shadow">
              <p className="text-xs text-gray-400">{item}</p>
              <p className="text-lg font-semibold mt-1">
                {Math.floor(Math.random()*100)}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 DATA TABLE PREVIEW */}
        <div className="w-full bg-white rounded-xl shadow-lg border border-gray-100 p-5">
          <p className="text-sm font-semibold text-gray-700 mb-4">Recent Transactions</p>

          {/* Table headers */}
          <div className="grid grid-cols-4 text-xs font-medium text-gray-500 mb-3">
            <div>User</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Date</div>
          </div>

          {/* Fake rows */}
          {[1,2,3,4].map(i => (
            <div
              key={i}
              className="grid grid-cols-4 text-xs text-gray-600 py-2 border-b last:border-none"
            >
              <div>John Doe</div>
              <div>₹{Math.floor(Math.random()*5000)+500}</div>
              <div className="text-green-600 font-semibold">Success</div>
              <div>12 Jan</div>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
