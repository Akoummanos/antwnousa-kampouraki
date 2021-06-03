var mymap;

function map_init() {
    mymap = L.map("mapid").setView([35.25, 24.93], 13);

    L.tileLayer(
        "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}",
        {
            attribution:
                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: "abcd",
            minZoom: 0,
            maxZoom: 9,
            ext: "png",
        }
    ).addTo(mymap);
}
