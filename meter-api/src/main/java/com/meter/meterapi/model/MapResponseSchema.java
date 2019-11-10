package com.meter.meterapi.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Builder
@Data
@Getter @Setter
public class MapResponseSchema {
	
	@JsonProperty("parkings")
	List<Parking> Parkings = null;

}
