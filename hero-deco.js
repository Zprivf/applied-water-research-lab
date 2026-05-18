/* ============================================================
   Hero Sketch Illustrations
   LEFT  (top→mid→bot): Earth System | Deep Learning | Groundwater
   RIGHT (top→mid→bot): Geospatial ML | Texas | Extreme Events
   CENTER: text only — no sketches
   ============================================================ */

function injectSketches() {
  var slots = {
    // Left column
    "sketch-tl": { src: "images/sketches/grace_satellite.png",   label: "Remote Sensing (GRACE,...)"           },
    "sketch-ml": { src: "images/sketches/deep_learning.png",     label: "Geospatial Machine Learning & AI"              },
    "sketch-bl": { src: "images/sketches/groundwater_model.png", label: "Groundwater Modelling"            },
    // Right column
    "sketch-tr": { src: "images/sketches/freshwater_tap.png",    label: "Earth System Modelling" },
    "sketch-mr": { src: "images/sketches/texas_boundary.png",    label: "Extreme Events Analysis"             },
    "sketch-br": { src: "images/sketches/river_delta.png",       label: "Coastal & Flood Modeling"   },
  };

  Object.keys(slots).forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var s = slots[id];
    el.innerHTML =
      '<img src="' + s.src + '" alt="' + s.label + '" loading="lazy"/>' +
      '<span class="sketch-label">' + s.label + '</span>';
  });

  var decoEl = document.getElementById("heroDeco");
  if (decoEl) decoEl.innerHTML = "";
}

var HERO_DECO_SVG = null;
