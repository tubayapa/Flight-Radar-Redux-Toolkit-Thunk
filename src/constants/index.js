export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.480658",
    bl_lng: "25.73472",
    tr_lat: "42.527912",
    tr_lng: "44.865926",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "1262ca73e5mshc9b35e3013ce0a5p1db434jsn010af41d2e54",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headerOpt = {
  headers: {
    "X-RapidAPI-Key": "1262ca73e5mshc9b35e3013ce0a5p1db434jsn010af41d2e54",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
