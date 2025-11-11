// index.js

console.log("make by marcinlowercase");

// const client_device_corner_radius =
//   window.APP_CONFIG.client_device_corner_radius;
// console.log(`client_device_corner_radius: ${client_device_corner_radius}`);

// value

const min_element_size = client_device_corner_radius * 2;
let client_device_corner_radius = 0;

// function
const border_radius_for_layer = (layer) => {
  if (layer == 0) {
    return client_device_corner_radius;
  }
  return Math.max(0, border_radius_for_layer(layer - 1) - 8);
};
// element
const oo1 = document.getElementById("oo1");
const marcinlowercase = document.getElementById("marcinlowercase");

// event listener
document.addEventListener("native_data_updated", function (event) {
  client_device_corner_radius = event.detail.corner_radius;
  console.log("client_device_corner_radius: " + client_device_corner_radius);

  oo1.style.borderRadius = `${border_radius_for_layer(1)}px`;
  marcinlowercase.style.borderRadius = `${border_radius_for_layer(1)}px`;
});
