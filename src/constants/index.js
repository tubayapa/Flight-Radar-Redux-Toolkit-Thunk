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
    "X-RapidAPI-Key": "77c98b0588msh98828b2b0d0eb78p15b0c1jsn05bf3b079533",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};
