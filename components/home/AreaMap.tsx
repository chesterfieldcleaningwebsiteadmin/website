"use client";

import { useEffect, useRef } from "react";
import styles from "./AreaMap.module.css";

// Known coordinates for each service area
const COORDS: Record<string, [number, number]> = {
  Chesterfield:    [53.2354, -1.4214],
  Brampton:        [53.2414, -1.4484],
  Walton:          [53.2204, -1.4014],
  Hasland:         [53.2104, -1.4064],
  Brimington:      [53.2604, -1.3874],
  "Old Whittington": [53.2794, -1.4204],
  Newbold:         [53.2494, -1.4394],
  Wingerworth:     [53.2054, -1.4254],
  Dronfield:       [53.3014, -1.4694],
  Holymoorside:    [53.2094, -1.4844],
  Staveley:        [53.2694, -1.3544],
  "Clay Cross":    [53.1634, -1.3964],
  Ashgate:         [53.2464, -1.4374],
  Calow:           [53.2384, -1.3784],
};

export default function AreaMap({ areas }: { areas: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;

      // Custom brand-coloured marker (avoids Leaflet icon path issues in webpack)
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:10px;height:10px;background:#a87e1e;border-radius:50%;border:2px solid #4c3656;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      const map = L.map(containerRef.current!, {
        scrollWheelZoom: false,
        dragging: true,
        zoomControl: true,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 16,
      }).addTo(map);

      const known = areas.filter((a) => COORDS[a]);
      const markers = known.map((area) =>
        L.marker(COORDS[area], { icon }).addTo(map).bindPopup(area)
      );

      if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.18));
      } else {
        // Fallback: centre on Chesterfield
        map.setView([53.2354, -1.4214], 12);
      }

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        (mapRef.current as { remove: () => void }).remove();
        mapRef.current = null;
      }
    };
  }, [areas]);

  return (
    <>
      {/* Leaflet CSS — loaded here so it only affects this component */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={containerRef} className={styles.map} />
    </>
  );
}
