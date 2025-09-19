import React from "react";
import { OutlineText } from "@/components/ui/outline-text";

export default function OutlineTextDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <OutlineText className="text-white">21st.dev</OutlineText>
        <p className="text-gray-400 mt-4 text-lg">Outline Text Component Demo</p>
      </div>
    </div>
  );
}
