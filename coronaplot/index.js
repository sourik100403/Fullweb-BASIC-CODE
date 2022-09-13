function updatemap(){
    fetch("/data.json")
    .then(Response=>Response.json())
    .then(rsp=> {
        console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;

            // Create a new marker.
            new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);

            new mapboxgl.Marker({
                color: "#FFFFFF",
                draggable: false,
                color:"red"
                }).setLngLat([30.5, 50.5])
                .addTo(map);
            
            
        });
    })

}
updatemap();
