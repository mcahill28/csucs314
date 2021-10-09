package com.tco.misc;

import java.util.ArrayList;
import java.util.HashMap;
import java.lang.Math;

public class Distances {
    private ArrayList<Places> places;
    private ArrayList<Integer> distances;
    private Integer earthRadius;

    public Distances(ArrayList<Places> places, Integer earthRadius) {
        this.places = places;
        this.earthRadius = earthRadius;
        this.distances = new ArrayList<>();
    }

    private Double computeCentralAngle(HashMap<String, Double> coordinates) {
        double latitude1 = coordinates.get("latitude1");
        double latitude2 = coordinates.get("latitude2");
        double longitudeDifference = Math.abs(coordinates.get("longitude1") - coordinates.get("longitude2"));
        double a = Math.sqrt(Math.pow((Math.cos(latitude2) * Math.sin(longitudeDifference)), 2)
                + Math.pow(((Math.sin(latitude1) * Math.sin(latitude2)) - (Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(longitudeDifference))), 2));
        double b = (Math.sin(latitude1) * Math.sin(latitude2)) + (Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(longitudeDifference));
        return Math.atan2(a, b);
    }

    public ArrayList<Integer> computeDistances() {
        return new ArrayList<>();
    }
}