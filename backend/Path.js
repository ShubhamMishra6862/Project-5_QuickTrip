const turf = require('@turf/turf');
const busline1 = {
  "geometry": {
    "coordinates": [
      [77.48029, 12.910257],
      [77.499524, 12.9254],
      [77.513337, 12.93573],
      [77.52339, 12.939651],
      [77.528373, 12.945429],
      [77.541931, 12.953333],
      [77.559489, 12.961246],
      [77.569766, 12.96408],
      [77.57681, 12.964076],
      [77.58807, 12.966956],
      [77.597019, 12.964782],
      [77.602923, 12.969862],
      [77.60699, 12.971925],
      [77.628312, 12.978115],
      [77.643165, 12.985099],
      [77.663954, 12.99452],
      [77.676867, 13.00027]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 1 }
}
const busline2 = {
  "geometry": {
    "coordinates": [
      [77.430538, 12.977886],
      [77.459103, 12.991711],
      [77.472625, 12.98867],
      [77.48973, 12.986657],
      [77.512357, 12.987848],
      [77.523642, 12.998031],
      [77.526752, 13.00881],
      [77.537239, 13.030388],
      [77.550382, 13.023087],
      [77.554446, 13.015491],
      [77.571172, 13.009229],
      [77.584065, 13.003324],
      [77.585017, 12.993888],
      [77.588923, 12.986521]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 2 }
}

const busline3 = {
  "geometry": {
    "coordinates": [
      [77.528887, 12.859897],
      [77.53662, 12.869251],
      [77.543394, 12.875406],
      [77.564114, 12.890214],
      [77.555176, 12.895028],
      [77.562371, 12.902066],
      [77.572818, 12.910845],
      [77.57343, 12.916906],
      [77.573673, 12.929193],
      [77.573818, 12.941126],
      [77.573827, 12.957163],
      [77.57681, 12.964076],
      [77.581501, 12.972831],
      [77.584445, 12.977946]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 3 }
}
const busline4 = {
  "geometry": {
    "coordinates": [
      [77.645447, 13.048494],
      [77.641512, 13.03952],
      [77.632494, 13.027599],
      [77.625724, 13.012346],
      [77.620201, 13.000273],
      [77.616781, 12.995726],
      [77.611825, 12.984496],
      [77.610187, 12.980921],
      [77.608637, 12.977296],
      [77.60699, 12.971925],
      [77.606068, 12.958084],
      [77.6094, 12.939982],
      [77.620764, 12.927439],
      [77.665673, 12.920466]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 4 }
}
const busline5 = {
  "geometry": {
    "coordinates": [
      [77.48029, 12.910257],
      [77.488147, 12.932722],
      [77.492779, 12.938579],
      [77.499905, 12.952031],
      [77.504402, 12.960569],
      [77.50914, 12.974095],
      [77.512357, 12.987848],
      [77.523642, 12.998031],
      [77.526752, 13.00881],
      [77.537239, 13.030388],
      [77.516395, 13.041876],
      [77.505018, 13.063884],
      [77.50455, 13.075553]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 5 }
}

const busline6 = {
  "geometry": {
    "coordinates": [
      [77.617516, 13.137838],
      [77.615433, 13.131274],
      [77.607959, 13.117016],
      [77.597971, 13.100035],
      [77.592687, 13.077341],
      [77.593723, 13.055835],
      [77.590148, 13.042686],
      [77.584034, 13.02329],
      [77.583787, 13.018832],
      [77.584065, 13.003324],
      [77.585017, 12.993888],
      [77.588923, 12.986521],
      [77.584445, 12.977946],
      [77.581501, 12.972831],
      [77.57681, 12.964076],
      [77.573827, 12.957163],
      [77.593293, 12.949026],
      [77.597663, 12.939819],
      [77.601856, 12.937213],
      [77.600562, 12.927281],
      [77.599487, 12.916838],
      [77.599864, 12.896269],
      [77.59497, 12.87498]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 6 }
}
const busline7 = {
  "geometry": {
    "coordinates": [
      [77.632494, 13.027599],
      [77.62854, 13.034695],
      [77.620419, 13.041173],
      [77.61376, 13.041916],
      [77.590148, 13.042686],
      [77.573568, 13.047052],
      [77.553173, 13.043748],
      [77.537239, 13.030388],
      [77.550382, 13.023087],
      [77.554446, 13.015491],
      [77.557866, 12.990978],
      [77.569767, 12.982599],
      [77.584445, 12.977946]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 7 }
}
const busline8 = {
  "geometry": {
    "coordinates": [
      [77.512357, 12.987848],
      [77.520718, 12.986786],
      [77.548302, 12.975215],
      [77.557866, 12.990978],
      [77.569767, 12.982599],
      [77.584445, 12.977946]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 8 }
}
const busline9 = {
  "geometry": {
    "coordinates": [
      [77.528373, 12.945429],
      [77.539117, 12.933871],
      [77.554039, 12.92383],
      [77.57343, 12.916906],
      [77.585815, 12.917157],
      [77.599487, 12.916838],
      [77.620764, 12.927439],
      [77.633102, 12.938591],
      [77.639716, 12.951391],
      [77.641608, 12.960599],
      [77.666032, 12.958529],
      [77.658825, 12.971321],
      [77.643165, 12.985099]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": { "busline": 9 }
}
const busline10 = {
  "geometry": {
    "coordinates": [
      [77.658825, 12.971321],
      [77.66652, 12.975385],
      [77.678084, 12.97272],
      [77.679334, 12.977369],
      [77.679753, 12.983632],
      [77.678631, 12.988252],
      [77.685679, 12.993345]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": {
    "busline": 10
  }
}

const purple = {
  "geometry": {
    "coordinates": [
      [77.462701, 12.897934], [77.476466, 12.907963],
      [77.48731, 12.914962], [77.498288, 12.924326],
      [77.512182, 12.935423], [77.519593, 12.936662],
      [77.525598, 12.942479], [77.52971, 12.946549],
      [77.536973, 12.952191], [77.533589, 12.961954],
      [77.537389, 12.970795], [77.545541, 12.97424],
      [77.5555, 12.975633], [77.563474, 12.975626],
      [77.566017, 12.975842], [77.572967, 12.975697],
      [77.583998, 12.974345], [77.591752, 12.978793],
      [77.596645, 12.981227], [77.600939, 12.978783],
      [77.606762, 12.975505], [77.616984, 12.973033],
      [77.626616, 12.976431], [77.638731, 12.978318],
      [77.64493, 12.98595], [77.652504, 12.990738],
      [77.65612, 12.992118], [77.668323, 12.996499],
      [77.677427, 13.000133], [77.692534, 12.996623],
      [77.703896, 12.993393], [77.710515, 12.988396],
      [77.708791, 12.981041], [77.714957, 12.977701],
      [77.72394, 12.97677], [77.727703, 12.981848],
      [77.738169, 12.98768], [77.74651, 12.985824],
      [77.757732, 12.993819]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": {
    "metroline": "Purple"
  }
}

const green = {
  "geometry": {
    "coordinates": [
      [77.472775, 13.057437], [77.483042, 13.054155],
      [77.4914, 13.05126], [77.500112, 13.04802],
      [77.512407, 13.043338], [77.519698, 13.039429],
      [77.52544, 13.03628], [77.533227, 13.032815],
      [77.540772, 13.028383], [77.549859, 13.023172],
      [77.553933, 13.014698], [77.54881, 13.008193],
      [77.549701, 13.000334], [77.556972, 12.998523],
      [77.563439, 12.996461], [77.57077, 12.990502],
      [77.572022, 12.986532],
      [77.572967, 12.975697], [77.574678, 12.96666],
      [77.574828, 12.961108], [77.573653, 12.955834],
      [77.573669, 12.95059], [77.58002, 12.946408],
      [77.580096, 12.938377], [77.58016, 12.929641],
      [77.580128, 12.921464], [77.573588, 12.915649],
      [77.573213, 12.907382], [77.570193, 12.895952],
      [77.562602, 12.888872], [77.552683, 12.884636],
      [77.544739, 12.877513], [77.538398, 12.871395],
      [77.529868, 12.861809]
    ],
    "type": "MultiPoint"
  },
  "type": "Feature",
  "properties": {
    "metroline": "Green"
  }
}

// ----------------------------------------------Utility---------------------------------------------------------------------
function getdistance(from, to) {
  from = turf.point(from);
  to = turf.point(to);
  return turf.distance(from, to, { unit: 'km' });
}
function nearestP(array, point) {
  array = turf.featureCollection(array)
  point = turf.point(point);
  return turf.nearest(point, array, { unit: 'km' });
}

let buspath = [busline1, busline2, busline3, busline4, busline5, busline6, busline7, busline8, busline9, busline10];
let metropath = [purple, green];



function createadj(lines) {
  let adj = new Map();
  for (let j = 0; j < lines.length; j++) {
    let arr = lines[j].geometry.coordinates;
    for (let i = 0; i < arr.length; i++) {
      if (adj.has(arr[i][0]) == false) {
        adj.set(arr[i][0], new Array());
      }
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (adj.get(arr[i][0]).includes(arr[i + 1][0]) == false) {
        adj.get(arr[i][0]).push(arr[i + 1][0]);
      }
      if (adj.get(arr[i + 1][0]).includes(arr[i][0]) == false) {
        adj.get(arr[i + 1][0]).push(arr[i][0]);
      }
    }
  }
  return adj;
}

function Cvisited(lines) {
  let visit = new Map();
  for (let i = 0; i < lines.length; i++) {
    let arr = lines[i].geometry.coordinates;
    for (let j = 0; j < arr.length; j++) {
      visit.set(arr[j][0], [-1, lines[i], arr[j][1]])
    }
  }
  return visit;
}

let busadj = createadj(buspath);
let metroadj = createadj(metropath);
let visitedB = Cvisited(buspath);
let visitedM = Cvisited(metropath);
// console.log(metroadj);
let combineBus = [];
for (let i = 0; i < buspath.length; i++) {
  let arr = buspath[i].geometry.coordinates;
  for (let j = 0; j < arr.length; j++) {
    combineBus.push(turf.point(arr[j]));
  }
}

let combineMetro = [];
for (let i = 0; i < purple.geometry.coordinates.length; i++) {
  combineMetro.push(turf.point(purple.geometry.coordinates[i]));
}
for (let i = 0; i < green.geometry.coordinates.length; i++) {
  combineMetro.push(turf.point(green.geometry.coordinates[i]));
}

// -----------------------------------------------Bus------------------------------------------------------------------------


function findBus(from, to, parent, data = { dest: [], path: [], tpath: [], inidistance: 0, distance: 0, straightDist: 0, time: 0, transition: []}) {

  visitedB.get(from[0])[0] = 1;
  if (from[0] == to[0] && from[1] == to[1] && (data.distance <= data.straightDist)) {
    if (parent[0] !== -1) {
      data.distance += getdistance(parent, from);
    }
    data.distance = data.inidistance + data.distance;
    let nData = {
      pathCovered: data.path.slice(),
      distance: data.distance,
      time: data.time + (data.distance / 60),
      transition: data.transition.slice()
    }
    nData.transition.push(from);
    nData.pathCovered.push(from);
    data.tpath.push(nData);
    visitedB.get(from[0])[0] = -1;
    return;
  }


  if (parent[0] !== -1) {
    data.distance += getdistance(parent, from);
  }
  let nData = {
    dest: data.dest,
    path: data.path.slice(),
    tpath: data.tpath,
    inidistance: data.inidistance,
    distance: data.distance,
    straightDist: data.straightDist,
    time: data.time,
    transition: data.transition.slice(),
  }
  nData.path.push(from);

  // let neartoA = nearestP(combineMetro, from);
  // if(data.disable==1){
  //   console.log(data);
  // }
  // if ((neartoA.properties.distanceToPoint < 2) && (visitedM.get(neartoA.geometry.coordinates[0])[0] == -1)) {

  //   let neartoB = nearestP(combineMetro, nData.dest);
  //   let nmetroData = {
  //     dest: nData.dest,
  //     path: nData.path.slice(),
  //     tpath: nData.tpath,
  //     inidistance: nData.inidistance + nData.distance + neartoA.properties.distanceToPoint,
  //     distance: 0,
  //     time: nData.time + (nData.distance / 60) + (neartoA.properties.distanceToPoint / 65),
  //     transition: nData.transition.slice()
  //   }
  //   nmetroData.transition.push(from);
  //   nmetroData.transition.push(neartoA.geometry.coordinates);

  //   findMetro(neartoA.geometry.coordinates, neartoB.geometry.coordinates, [-1, -1], nmetroData);
  // }

  let adjarr = busadj.get(from[0]);
  for (let i = 0; i < adjarr.length; i++) {
    let next = [adjarr[i], visitedB.get((adjarr[i]))[2]];
    if (visitedB.get(next[0])[0] == -1 && (next[0] != parent[0] && next[1] != parent[1]) && ((nData.distance + nData.inidistance) <= nData.straightDist)) {
      if (adjarr.length > 2 && parent[0] != -1 && (visitedB.get(next[0])[1] != visitedB.get(parent[0])[1]) && nData.transition.indexOf(from) == -1) {
        nData.transition.push(from)
        findBus(next, to, from, nData);
        nData.transition.splice(nData.transition.indexOf(from), 1);
      }
      else {
        findBus(next, to, from, nData);
      }
    }
  }
  visitedB.get(from[0])[0] = -1;
}

// // ------------------------------------------------Metro------------------------------------------------------
function findMetro(from, to, parent, data = { dest: [], path: [], tpath: [], inidistance: 0, distance: 0, time: 0, transition: []}) {

  let fc = visitedM.get(from[0]);
  fc[0] = 1;
  if (from[0] == to[0] && from[1] == to[1]) {
    let nPath = data.path.slice();
    nPath.push(from);
    if (parent[0] !== -1) {
      data.distance += getdistance(parent, from);
    }
    let nData = {
      pathCovered: nPath.slice(),
      distance: data.distance + data.inidistance,
      time: data.time + (data.distance / 80),
      transition: data.transition.slice(),
    }
    nData.transition.push(from);
    data.tpath.push(nData);
    fc[0] = -1;
    return;
  }

  if (parent[0] !== -1) {
    data.distance += getdistance(parent, from);
  }

  let nData = {
    dest: data.dest,
    path: data.path.slice(),
    tpath: data.tpath,
    inidistance: data.inidistance,
    distance: data.distance,
    time: data.time,
    transition: data.transition.slice(),
  }
  nData.path.push(from);

  let adjarr = metroadj.get(from[0]);
  for (let i = 0; i < adjarr.length; i++) {
    let next = [adjarr[i], visitedM.get(adjarr[i])[2]];
    if (next[0] != parent[0] && next[1] != parent[1] && visitedM.get(next[0])[0] == -1) {
      if (parent[0] != -1 && ((visitedM.get(next[0])[1]) != (visitedM.get(parent[0])[1])) && adjarr.length > 2) {
        nData.transition.push(from);
        findMetro(next, to, from, nData);
        nData.transition.splice(nData.transition.indexOf(from), 1);
      }
      else {
        findMetro(next, to, from, nData);
      }
    }
  }
  fc[0] = -1;
}


// // ------------------------------------------------Int Main----------------------------------------------------

let i = [
  77.441222,
  13.017539
]
let d = [
  77.6584841515335,
  12.911662329083706
];

function findPath(from, to) {
  let NFBus = nearestP(combineBus, from);
  let NFMetro = nearestP(combineMetro, from);
  let NTBus = nearestP(combineBus, to);
  let NTMetro = nearestP(combineMetro, to);
  let totalpath = [];
  

  // let distfromB = getdistance(NTMetro.geometry.coordinates, to);

  // if (NFBus.properties.distanceToPoint < NFMetro.properties.distanceToPoint) {
    let data = {
      dest: to,
      path: [],
      tpath: totalpath,
      inidistance: 0,
      distance: 0,
      straightDist: 2 * getdistance(from, to),
      time: 0,
      transition: [],
    }
  //   data.transition.push(NFBus.geometry.coordinates);

    findBus(NFBus.geometry.coordinates, NTBus.geometry.coordinates, [-1, -1], data);
    totalpath.sort(function (a, b) {
    return a.time - b.time;
    })
  // }
  // else {
  //   // console.log(NFMetro);
  //   // console.log(NTMetro);
  //   let data={
  //     dest:to,
  //     path:[],
  //     tpath:totalpath,
  //     inidistance:0,
  //     disttance:0,time:0,transition=[]
  //   }

  // }

  if (totalpath.length > 11) {
    totalpath.length = 11;
  }
  // console.log(totalpath[0]);
  return totalpath;
}
findPath(i, d);
module.exports = { findPath }


