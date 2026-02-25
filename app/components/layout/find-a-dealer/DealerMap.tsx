"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { darkMapStyles } from "./darkMapStyles";

const API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY";

function loadGoogleMapsScript(): Promise<typeof google> {
  if (typeof window === "undefined") return Promise.reject(new Error("No window"));
  if (window.google?.maps) return Promise.resolve(window.google);

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.maps) resolve(window.google);
      else reject(new Error("Google Maps failed to load"));
    };
    script.onerror = () => reject(new Error("Google Maps script failed to load"));
    document.head.appendChild(script);
  });
}

interface DealerMapProps {
  address: string;
  height?: number | string;
}

export function DealerMap({ address, height = "400px" }: DealerMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address || !containerRef.current) return;

    let cancelled = false;

    loadGoogleMapsScript()
      .then((google) => {
        if (cancelled || !containerRef.current) return;

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address }, (results: google.maps.GeocoderResult[] | null, status: google.maps.GeocoderStatus) => {
          if (cancelled) return;
          if (status !== "OK" || !results?.[0] || !containerRef.current) {
            setError("Could not find location");
            return;
          }

          setError(null);
          const { location } = results[0].geometry;

          if (mapRef.current) {
            mapRef.current.setCenter(location);
            markerRef.current?.setPosition(location);
            return;
          }

          const map = new google.maps.Map(containerRef.current, {
            center: location,
            zoom: 15,
            styles: darkMapStyles,
            disableDefaultUI: false,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
          });

          const marker = new google.maps.Marker({
            position: location,
            map,
          });

          mapRef.current = map;
          markerRef.current = marker;
        });
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message || "Failed to load map");
      });

    return () => {
      cancelled = true;
    };
  }, [address]);

  useEffect(() => {
    return () => {
      markerRef.current = null;
      mapRef.current = null;
    };
  }, []);

  if (error) {
    return (
      <Box
        sx={{
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.100",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height,
        minHeight: 300,
      }}
      data-testid="dealer-map-canvas"
    />
  );
}
