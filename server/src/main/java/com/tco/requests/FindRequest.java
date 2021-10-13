package com.tco.requests;

import com.tco.misc.Place;
import com.tco.misc.Places;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.tco.misc.BadRequestException;
import com.tco.database.*;

public class FindRequest extends Request {

    private final transient Logger log = LoggerFactory.getLogger(FindRequest.class);

    private String match;
    private Integer limit;
    private Integer found;
    private Places places;

    @Override
    public void buildResponse() throws BadRequestException {

        if(limit.equals(-2)) {
            Place place = samplePlace("name", "0.000000","0.000000");
            this.places.add(place);
            found = 0;
        } else {
            found = queryFound(match);
            places = queryMatch(match, limit);
        }
        log.trace("buildResponse -> {}", this);
    }


    private Integer queryFound(String match) throws BadRequestException {
        Query query = new Query(match, -1);
        return query.findNumberOfMatches();//call findnumberofmatches instead
    }

    private Places queryMatch(String match, Integer limit) throws BadRequestException {
        //set limit to 100 if it is 0
        Query query = new Query(match, limit);//going to be between 0 and 100
        return query.findMatchingPlaces();
    }

    private Place samplePlace(String name, String latitude, String longitude) {
        Place place = new Place();
        place.put("name", name);
        place.put("latitude", latitude);
        place.put("longitude", longitude);
        return place;
    }

    /* The following methods exist only for testing purposes and are not used
  during normal execution, including the constructor. */

    public FindRequest() {
        this.requestType = "find";
        this.match = "";
        this.limit = -2;
    }

    public String getRequestType() { return requestType; }

    public Integer getLimit() { return limit; }

    public String getMatch() { return match; }

    public Integer getFound() { return found; }

    public Places getPlaces() { return places; }

}