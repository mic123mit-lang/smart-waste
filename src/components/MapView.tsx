'use client';

export default function MapView() {
  return (
    <div className="map-panel panel">
      <div className="panel-head">
        <h3>Route map</h3>
      </div>

      <div className="map-surface">
        <div className="map-road road-1" />
        <div className="map-road road-2" />
        <div className="map-road road-3" />

        <div className="map-pin pin-1">A</div>
        <div className="map-pin pin-2">B</div>
        <div className="map-pin pin-3">C</div>
        <div className="map-pin pin-4">D</div>
      </div>
    </div>
  );
}
