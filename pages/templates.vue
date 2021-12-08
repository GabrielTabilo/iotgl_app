<template>

  <div class="row">

    <iot-button :config="configButton"></iot-button>

    <iot-indicator :config="configIndicator"></iot-indicator>


    <button @click="sendData1()">SEND</button>

  </div>
</template>

<script>
import IOTButton from '../components/Widgets/IOTButton.vue';
import IOTIndicator from '../components/Widgets/IOTIndicator.vue';
export default {
  components: { IOTIndicator },
  data() {
    return {

      value: false,
      configButton:{
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "984237562348756ldksjfh",
          saverRule: false
        },
        variableFullName: "Pump",
        variable: "var1",
        icon: "fa-sun",
        column: "col-6",
        widget: "indicator",
        class: "danger",
        message: "{'fanstatus': 'stop'}"
      },

      configIndicator: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "984237562348756ldksjfh",
          saverRule: false
        },
        variableFullName: "Pump",
        variable: "var1",
        icon: "fa-sun",
        column: "col-6",
        widget: "indicator",
        class: "success"
      },


    };
  },

  methods: {

    sendData1() {
      this.value = !this.value;
      const toSend = {
        value: this.value
      };
      this.$nuxt.$emit("userid/8888/var1/sdata", toSend);
    },


  }
};
</script>
