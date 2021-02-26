import React from "react";

export default function TypeInfo({ fontinfo }) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img className="h-32 w-32 flex-shrink-0" src={fontinfo.imageUrl} alt={fontinfo.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{fontinfo.name}</h3>

        <p className="text-gray-600">jojo</p>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm">
            Explore {fontinfo.name}
          </a>
        </div>
      </div>
    </div>
  );
}