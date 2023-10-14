"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#360033]/20 via-[#0b8793] to-[#360033] p-10 flex flex-col justify-center items-center font-sfpro">
      <Card className="shadow-lg max-w-4xl mx-auto bg-gradient-to-b from-[#1cd8d2]/50 to-[#93edc7]/20 rounded-xl">
        <Text className="text-5xl font-semibold text-center mb-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f56772]/70 to-[#7280ff]/80 drop-shadow-lg dropshadow-md">
            Weather-AI Reporter
          </span>
        </Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13, Tailwind CSS, Tremor 2.0 & More!!
        </Subtitle>

        <Divider className="my-7" />

        <Card className="bg-gradient-to-br from-[#e8e895a4] to-[#dd6060a7] rounded-xl">
          {/* CityPicker */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
