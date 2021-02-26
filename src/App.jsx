import React from "react";

import typeList from "./data/typeList";
import TypeInfo from "./components/TypeInfo";

export default function App() {
  return (
    <div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Fonts</h2>
        <p className="mt-2 text-gray-600">A selection of great fonts to explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {typeList.map((fontinfo) => (
            <TypeInfo fontinfo={fontinfo} key={fontinfo.name} />
          ))}
        </div>
      </div>
    </div>
  );
}