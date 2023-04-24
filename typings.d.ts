interface CurrentWeather {
  is_day: number;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

interface Daily {
  apparent_temperature_max: [number];
  apparent_temperature_min: [number];
  precipitation_probability_max: [number];
  precipitation_sum: [number];
  rain_sum: [number];
  sunrise: [string];
  sunset: [string];
  temperature_2m_max: [number];
  temperature_2m_min: [number];
  time: [string];
  uv_index_clear_sky_max: [number];
  uv_index_max: [number];
  weathercode: [number];
  windspeed_10m_max: [number];
}

interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  precipitation_probability_max: string;
  precipitation_sum: string;
  rain_sum: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
  windspeed_10m_max: string;
}

interface Hourly {
  apparent_temperature: [number];
  dewpoint_2m: [number];
  is_day: [number];
  precipitation: [number];
  precipitation_probability: [number];
  pressure_msl: [number];
  relativehumidity_2m: [number];
  temperature_2m: [number];
  time: [string];
  uv_index: [number];
  uv_index_clear_sky: [number];
  weathercode: [number];
  // winddirection_10m: [number];
  // winddirection_80m: [number];
  windspeed_10m: [number];
  // windspeed_80m: [number];
}

interface HourlyUnits {
  apparent_temperature: string;
  dewpoint_2m: string;
  is_day: string;
  precipitation: string;
  precipitation_probability: string;
  pressure_msl: string;
  relativehumidity_2m: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  weathercode: string;
  // winddirection_10m: string;
  // winddirection_80m: string;
  windspeed_10m: string;
  // windspeed_80m: string;
}

interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: String;
  timezone_abbreviation: String;
  utc_offset_seconds: number;
}
