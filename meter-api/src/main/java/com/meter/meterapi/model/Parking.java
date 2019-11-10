package com.meter.meterapi.model;

import java.util.List;

import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

/**
* The Root Schema
* <p>
*
*
*/
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"location",
"url",
"address",
"timeStart",
"timeEnd",
"todayDate",
"isReserved"
})
public class Parking {
	
	@Id
	public String id;

	@JsonProperty("lat")
	public Double lat;
	/**
	* The Lat Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("lon")
	public Double lon;
	/**
	* The Lon Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("url")
	public String url = "";
	/**
	* The Address Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("address")
	public String address = "";
	/**
	* The Timestart Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("timeStart")
	public Long timeStart;
	/**
	* The Timeend Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("timeEnd")
	public Long timeEnd;
	/**
	* The Todaydate Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("todayDate")
	public Long todayDate;
	/**
	* The Isreserved Schema
	* <p>
	*
	* (Required)
	*
	*/
	@JsonProperty("isReserved")
	public Boolean isReserved = false;
	
	public Parking() {
	}
	
	@JsonProperty("suggestedPrice")
	public Integer suggestedPrice;
	
	public Parking(double lat, double lon, String url, String address, Long timeStart, Long timeEnd, Long todayDate,
			boolean isReserved, int suggestedPrice) {
		super();
		this.lat = lat;
		this.lon = lon; 
		this.url = url;
		this.address = address;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
		this.todayDate = todayDate;
		this.isReserved = isReserved;
		this.suggestedPrice = suggestedPrice;
	}

}