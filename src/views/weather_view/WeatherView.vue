<template>
  <div class="card cellContainer">
    <div class="card-body">
      <div class="row centerItems" v-if="loadWeather">
        <p>
          <span class="card-icon-text-2">
            <img
              v-if="loadWeather"
              :src="'img/weather/' + weather_icon.toLowerCase() + '.png'"
            />
            &nbsp;<label style="font-weight: 700">
              {{ Math.round(weather_temp) }} °C
            </label>
          </span>
        </p>
        <div class="text-right text-huge">
          <!-- <p>{{ weather_icon_name }}</p> -->
          <div class="card-icon-text">
            {{ weather_name }}, {{ weather_country }}
          </div>
        </div>
      </div>
      <div class="row centerItems" v-else>
        <span class="card-icon-text-2" style="font-size: 12px">
          <span style="font-weight: 700"
            >{{ msg }} <i class="fa fa-map-marker-alt"></i
          ></span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeatherViewer",
  data() {
    return {
      loadWeather: false,
      weather: {},
      weather_icon: "",
      weather_temp: "",
      weather_name: "",
      weather_icon_name: "",
      weather_country: "",
      msg: "",
    };
  },
  async mounted() {
    let self = this;
    self.getWeather();
  },
  methods: {
    getWeather() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (gps) => {
            let coordinates = gps.coords;
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&lang=es&units=metric&appid=b079452a19ebe2164110c17a10d1c8ca`
            )
              .then((response) => {
                return response.json();
              })
              .then((dataWeather) => {
                this.loadWeather = true;
                this.weather = dataWeather;
                this.weather_icon = this.weather.weather[0].main;
                this.weather_temp = this.weather.main.temp;
                this.weather_name = this.weather.name;
                this.weather_country = this.weather.sys.country;
                switch (this.weather_icon.toLowerCase()) {
                  case "clear":
                    this.weather_icon_name = "Soleado";
                    break;
                  case "clouds":
                    this.weather_icon_name = "Nublado";
                    break;
                  case "drizzle":
                    this.weather_icon_name = "llovizna";
                    break;
                  case "rain":
                    this.weather_icon_name = "lluvia";
                    break;
                  case "snow":
                    this.weather_icon_name = "Nevada";
                    break;
                  case "thunderstorm":
                    this.weather_icon_name = "Tormenta";
                    break;
                  default:
                    break;
                }
              })
              .finally(() => {});
          },
          () => {
            this.msg =
              "Para visualizar el pronostico de clima en su ciudad, permita el acceso a su ubicación";
          },
          {
            enableHighAccuracy: true,
          }
        );
      } else
        alert(
          "Lo siento, tu navegador no tiene soporte para obtener tu ubicación"
        );
    },
  },
};
</script>
