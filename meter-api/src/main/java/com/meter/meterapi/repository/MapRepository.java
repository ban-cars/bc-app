package com.meter.meterapi.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.meter.meterapi.model.Parking;

public interface MapRepository extends MongoRepository<Parking,String>{

	
}
