import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import HumidityChart from "@/components/HumidityChart";
import InformationPanel from "@/components/InformationPanel";
import RainChart from "@/components/RainChart";
import StatCard from "@/components/StatCard";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import cleanData from "@/lib/cleanData";
import getBasePath from "@/lib/getBasePath";

export const revalidate = 600;

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "IST",
    },
  });

  const results: Root = data.myQuery;

  // const dataToSend = cleanData(results, city);

  // const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     weatherData: dataToSend,
  //   }),
  // });

  // const GPTdata = await res.json();
  // const { content } = GPTdata;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel city={city} results={results} lat={lat} long={long} />

      <div className="flex-1 p-5 lg:p-10 bg-gradient-to-br from-[#e9defa]/10 to-[#fbfcdb]">
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today's Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at:{" "}
              {new Date(results.current_weather.time).toLocaleString()} (
              {results.timezone})
            </p>
          </div>

          <div className="m-2 mb-10">
            {/* <CalloutCard message={content} /> */}
            <CalloutCard message="Here should be the AI powered weather forecast, but due to some technical difficulties, we're unable to process the AI forecast. Please kindly scroll down to grab an idea of the weather with the help of the charts and datas. We're very much sorry for the inconvenience." />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°`}
              color="yellow"
            />

            <StatCard
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°`}
              color="green"
            />

            <div>
              <StatCard
                title="UV Index"
                metric={results.daily.uv_index_max[0].toFixed(1)}
                color="rose"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message={
                    "The UV Index is high today. Please be sure to wear SPF take care when going outside!!"
                  }
                  warning
                />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)} km/h`}
                color="cyan"
              />

              <StatCard
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(1)}°`}
                color="violet"
              />
            </div>
          </div>
        </div>

        <hr className="mb-5" />

        <div className="space-y-3">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
