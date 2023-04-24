import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="bg-gradient-to-tl from-[#00008b]/80 via-[#1F5A82] to-[#87CEEB] min-h-screen flex flex-col items-center justify-center text-slate-600">
      <SunIcon
        className="h-24 w-24 animate-spin text-yellow-500"
        color="yellow"
      />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Data...
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, we are crunching the numbers & generating an AI summary of the
        Weather Data!
      </h2>
    </div>
  );
}

export default Loading;
