<template>
  <div>
        <!-- FORM ADD DEVICE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-title">Add new Device</h4>
        </div>

        <div class="row">
          <div class="col-4">
            <base-input
              label="Device Name"
              type="text"
              placeholder="Ex: Home, Office..."
            >
            </base-input>
          </div>

          <div class="col-4">
            <base-input
              label="Device Id"
              type="text"
              placeholder="Ex: 7777-8888"
            >
            </base-input>
          </div>

          <div class="col-4">
            <slot name="label">
              <label> Template </label>
            </slot>

            <el-select
              value="1"
              placeholder="Select Template"
              class="select-info"
              style="width:100%"
            >
              <el-option
                class="text-dark"
                value="Template 1"
                label="Template 1"
              ></el-option>

              <el-option
                class="text-dark"
                value="Template 2"
                label="Template 2"
              ></el-option>

              <el-option
                class="text-dark"
                value="Template 3"
                label="Template 3"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="row pull-right">
          <div class="col-12">
            <base-button type="info" class="mb-3" size="lg">Add</base-button>
          </div>
        </div>
      </card>

    </div>
        <!-- DEVICES TABLE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-title">Devices</h4>
        </div>
        <el-table :data="devices">
          <el-table-column label="#" min-width="50" align="center">
            <div slot-scope="{row, $index}">
            {{$index + 1}}
            </div>
          </el-table-column>

          <el-table-column prop="name" label="Name"></el-table-column>
          <el-table-column prop="dId" label="Device Id"></el-table-column>
          <el-table-column prop="templateName" label="Template"></el-table-column>
          <el-table-column label="Actions">
            <div slot-scope="{row, $index}">

              <el-tooltip content="Saver Status Indicator" style="margin-right:10px">
                <i class="fas fa-database " :class="{'text-success' : row.saverRule, 'text-dark' : !row.saverRule}" ></i>
              </el-tooltip>

              <el-tooltip content="Database Saver">
                <base-switch @click="updateSaverRulesStatus($index)" :value="row.saverRule" type="info" on-text="On" off-text="Off"></base-switch>
              </el-tooltip>

              <!-- {{row}} -->
              <el-tooltip content="Delete" effect="light" :open-delay="300" placement="top">
                <base-button type="danger" icon size="sm" class= "btn-link" @click="deleteDevice(row)">
                  <i class="tim-icons icon-simple-remove"></i>
                </base-button>
              </el-tooltip>
            </div>
          </el-table-column>
        </el-table>

      </card>
    </div>
    <json-viewer :value="devices"></json-viewer>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Option.name]: Option,
    [Select.name]: Select
  },
  data(){
    return{
      devices: [
        {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "9809183208130012938",
          saverRule: false
        },
                {
          name: "Office",
          dId: "9999",
          templateName: "Power Sensor",
          templateId: "1287398107381097333",
          saverRule: true
        },
                {
          name: "Farm",
          dId: "7777",
          templateName: "Power Sensor",
          templateId: "5912830912830912834",
          saverRule: false
        }
      ]
    };
 },
  methods: {
    deleteDevice(device){
      alert("DELETING " + device.name)
    },
    updateSaverRulesStatus(index){
      console.log(index)
      this.devices[index].saverRule = !this.devices[index].saverRule
    }
  }
};
</script>
