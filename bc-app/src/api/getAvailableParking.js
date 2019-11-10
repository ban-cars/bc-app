import fetch from 'isomorphic-fetch';

export const getAvailableParking = async () => {
    let parkingSpots = {};
    try {
        parkingSpots = await fetch("http://localhost:8080/api/getDetails", {
            method: 'get'
        });
        return parkingSpots.json();
    } catch (e) {
        console.log(e);
    }
};