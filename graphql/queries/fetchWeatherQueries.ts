import { gql, useQuery } from "@apollo/client";

const fetchWeatherQuery  = gql`
      query myQuery(
        $current_weather: String
        $daily: String
        $hourly: String
        $latitude: String
        $longitude: String
        $models: String
        $timezone: String
      ) {
        myQuery(
          current_weather: $current_weather
          daily: $daily
          hourly: $hourly
          latitude: $latitude
          longitude: $longitude
          models: $models
          timezone: $timezone
        ) {
          current_weather {
            is_day
            temperature
            time
            weathercode
            winddirection
            windspeed
          }
          daily {
            apparent_temperature_max
            apparent_temperature_min
            precipitation_probability_max
            precipitation_sum
            rain_sum
            sunrise
            sunset
            temperature_2m_max
            temperature_2m_min
            time
            uv_index_clear_sky_max
            uv_index_max
            weathercode
            windspeed_10m_max
          }
          daily_units {
            apparent_temperature_max
            apparent_temperature_min
            precipitation_probability_max
            precipitation_sum
            rain_sum
            sunrise
            sunset
            temperature_2m_max
            temperature_2m_min
            time
            uv_index_clear_sky_max
            uv_index_max
            weathercode
            windspeed_10m_max
          }
          elevation
          generationtime_ms
          hourly {
            apparent_temperature
            dewpoint_2m
            is_day
            precipitation
            precipitation_probability
            pressure_msl
            relativehumidity_2m
            temperature_2m
            time
            uv_index
            uv_index_clear_sky
            weathercode
            windspeed_10m
          }
          hourly_units {
            apparent_temperature
            dewpoint_2m
            is_day
            precipitation
            precipitation_probability
            pressure_msl
            relativehumidity_2m
            temperature_2m
            time
            uv_index
            uv_index_clear_sky
            weathercode
            windspeed_10m
          }
          latitude
          longitude
          timezone
          timezone_abbreviation
          utc_offset_seconds
        }
      }
    `;
    
    export default fetchWeatherQuery;
