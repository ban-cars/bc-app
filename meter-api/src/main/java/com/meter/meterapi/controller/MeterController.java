package com.meter.meterapi.controller;


import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meter.meterapi.model.MapResponseSchema;
import com.meter.meterapi.model.Parking;
import com.meter.meterapi.repository.MapRepository;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class MeterController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(MeterController.class);

	@Autowired
	private MapRepository mapRepository;
	
	@GetMapping("/api/getDetails")
	public ResponseEntity<MapResponseSchema> getDetails() {
		// Inject fake data
		mapRepository.deleteAll();
		mapRepository.save(new Parking(49.230940,-123.133890, "http://qualityone.ca/docs/content_images/pressure/west-vancouver-driveway-power-washed-after.jpg", "6051 Selkirk St", "0900", "1700", System.nanoTime(), false, "053"));
		mapRepository.save(new Parking(49.230110,-123.132990, "https://www.joyvictor.com/i/2016/01/Beautiful-driveway-landscaping-with-paver-flooring-also-beutiful-front-yard-garden-plus-white-garage-door.jpg", "1170 W 45th Ave", "1430", "1900", System.nanoTime(), false, "083"));
		mapRepository.save(new Parking(49.230940,-123.133890, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "Oakridge, Vancouver", "1250", "2050", System.nanoTime(), false, "099"));
		mapRepository.save(new Parking(49.263372, -123.042044, "https://www.fayettevilleflyer.com/wp-content/uploads/2019/10/driveway-ft.jpg", "East Vancouver", "1210", "2000", System.nanoTime(), false, "099"));
		mapRepository.save(new Parking(49.223140,-123.129870, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "1063 W 53rd Ave", "1200", "2000", System.nanoTime(), false, "065"));
		mapRepository.save(new Parking(49.233670,-123.034320, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "3343 Kingsway", "0800", "2300", System.nanoTime(), false, "075"));
		mapRepository.save(new Parking(49.494950,-80.890390, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "3342 Kingsway", "0600", "1300", System.nanoTime(), false, "045"));
		mapRepository.save(new Parking(49.233993, -123.034655, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "3327 Kingsway", "1000", "2300", System.nanoTime(), false, "045"));
		mapRepository.save(new Parking(49.235530,-123.032980, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "3349 Archimedes St", "0800", "2300", System.nanoTime(), false, "045"));
		mapRepository.save(new Parking(31.170520,-83.277310, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "5350 Cecil St", "0900", "2100", System.nanoTime(), false, "056"));
		mapRepository.save(new Parking(49.237280,-123.034410, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "3300-3396 Austrey Ave", "0000", "2400", System.nanoTime(), false, "056"));
		mapRepository.save(new Parking(49.239810,-123.047680, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "2680-2794 Horley St", "0800", "1800", System.nanoTime(), false, "056"));

		
		
		List<Parking> temp = new ArrayList<Parking>();
		for(Parking parking: mapRepository.findAll()) {
			temp.add(parking);
		}
		MapResponseSchema response = MapResponseSchema.builder().Parkings(temp).build();
		
		return ResponseEntity.status(HttpStatus.OK).body(response);
		
	}
	
	
}
