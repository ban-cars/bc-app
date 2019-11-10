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
		mapRepository.save(new Parking(49.2606, -123.2460, "http://qualityone.ca/docs/content_images/pressure/west-vancouver-driveway-power-washed-after.jpg", "address", System.nanoTime(), System.nanoTime(), System.nanoTime(), false));
		mapRepository.save(new Parking(18.2606, -122.2460, "https://www.joyvictor.com/i/2016/01/Beautiful-driveway-landscaping-with-paver-flooring-also-beutiful-front-yard-garden-plus-white-garage-door.jpg", "address", System.nanoTime(), System.nanoTime(), System.nanoTime(), false));
		mapRepository.save(new Parking(28.2606, -121.2460, "https://mrengineering.ca/wp-content/uploads/2019/05/Concrete-Garage-Pad.jpg", "address", System.nanoTime(), System.nanoTime(), System.nanoTime(), false));

		List<Parking> temp = new ArrayList<Parking>();
		for(Parking parking: mapRepository.findAll()) {
			temp.add(parking);
		}
		MapResponseSchema response = MapResponseSchema.builder().Parkings(temp).build();
		
		return ResponseEntity.status(HttpStatus.OK).body(response);
		
	}
	
	
}
