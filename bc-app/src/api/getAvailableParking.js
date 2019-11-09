import fetch from 'isomorphic-fetch';

export const getAvailableParking = async () => {
    let parkingSpots = [];
    try {
        parkingSpots = await fetch("https://localhost:8080/api/getDetails", {
            method: 'get'
        });
        return parkingSpots;
    } catch (e) {
        console.log(e);
    }
};