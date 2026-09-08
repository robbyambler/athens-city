"use client";

// Leaflet's stylesheet is imported from app/globals.css so that this file's
// overrides can win on ordering — see the note there.

import type { LatLngBoundsExpression } from "leaflet";
import { CircleMarker, MapContainer, Polygon, TileLayer, Tooltip } from "react-leaflet";
import { agora, districts } from "@/lib/athens";
import { districtBoundaries } from "@/lib/districtBoundaries";

// The seven real boundaries, drawn over an OpenStreetMap base. Fill, stroke and
// label colours come from the `.district-*` rules in globals.css rather than
// from Leaflet's pathOptions, so the CMT ramp's light/dark tokens keep working
// — Leaflet writes SVG presentation attributes, and CSS beats those.

const bounds: LatLngBoundsExpression = (() => {
  const all = Object.values(districtBoundaries).flat();
  const lats = all.map((p) => p[0]);
  const lngs = all.map((p) => p[1]);
  return [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];
})();

export default function DistrictMapCanvas({
  activeId,
  hoverId,
  onSelect,
  onHover,
}: {
  activeId: number;
  hoverId: number | null;
  onSelect: (id: number) => void;
  onHover: (id: number | null) => void;
}) {
  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [12, 12] }}
      scrollWheelZoom={false}
      className="h-[440px] w-full rounded-xl sm:h-[560px]"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Base map &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors · Boundaries: OSM (ODbL)'
        maxZoom={19}
      />

      {districts.map((d) => {
        const isActive = d.id === activeId;
        const isHover = d.id === hoverId;
        return (
          <Polygon
            key={d.id}
            positions={districtBoundaries[d.id]}
            // `className` MUST be a top-level prop: react-leaflet passes those
            // straight into the Leaflet constructor, where `_initPath` reads
            // it. Anything in `pathOptions` only ever reaches `setStyle`, which
            // does not touch the class list.
            className={`district-shape district-shape-${d.stage}`}
            pathOptions={{
              weight: 2,
              fillOpacity: isHover && !isActive ? 0.62 : 0.82,
            }}
            eventHandlers={{
              click: () => onSelect(d.id),
              mouseover: () => onHover(d.id),
              mouseout: () => onHover(null),
            }}
          >
            <Tooltip permanent direction="center" className={`district-label district-label-${d.stage}`}>
              {d.id}
            </Tooltip>
          </Polygon>
        );
      })}

      {/* The active district gets its own stroke-only layer on top. Leaflet
          only reads `className` when it first creates the path, so the ring is
          a separate layer that mounts and unmounts instead of a restyle. */}
      <Polygon
        key={`active-${activeId}`}
        positions={districtBoundaries[activeId]}
        interactive={false}
        className="district-outline"
        fill={false}
        pathOptions={{ weight: 4, fill: false }}
      />

      {/* Acts 17:17 — Paul reasoned in this marketplace day by day. */}
      <CircleMarker
        center={[agora.lat, agora.lng]}
        radius={5}
        interactive={false}
        className="agora-dot"
        pathOptions={{ weight: 2 }}
      >
        <Tooltip permanent direction="right" offset={[6, 0]} className="agora-label">
          {agora.label}
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
