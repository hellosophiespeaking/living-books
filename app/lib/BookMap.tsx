'use client'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!

type Journey = {
  id: string
  reader_name: string
  location: string
  latitude?: number
  longitude?: number
}

export default function BookMap({ journeys }: { journeys: Journey[] }) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  const journeysWithCoords = journeys.filter(j => j.latitude && j.longitude)

  useEffect(() => {
    if (!mapContainer.current || journeysWithCoords.length === 0) return
    if (map.current) return

    const first = journeysWithCoords[0]

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [first.longitude!, first.latitude!],
      zoom: 2,
    })

    map.current.on('load', () => {
      if (!map.current) return

      journeysWithCoords.forEach((journey, index) => {
        const el = document.createElement('div')
        el.style.width = '10px'
        el.style.height = '10px'
        el.style.borderRadius = '50%'
        el.style.backgroundColor = '#2C2C2A'
        el.style.border = '2px solid #FAF8F4'

        new mapboxgl.Marker(el)
          .setLngLat([journey.longitude!, journey.latitude!])
          .setPopup(
            new mapboxgl.Popup({ offset: 12 }).setHTML(
              `<p style="font-family:serif;font-size:14px;color:#2C2C2A;margin:0">${journey.reader_name}</p>
               <p style="font-size:12px;color:#888780;margin:4px 0 0">${journey.location}</p>`
            )
          )
          .addTo(map.current!)
      })

      if (journeysWithCoords.length > 1) {
        const coordinates = journeysWithCoords.map(j => [j.longitude!, j.latitude!])

        map.current.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: { type: 'LineString', coordinates }
          }
        })

        map.current.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          paint: {
            'line-color': '#888780',
            'line-width': 1,
            'line-dasharray': [2, 4]
          }
        })
      }
    })
  }, [journeysWithCoords])

  if (journeysWithCoords.length === 0) return null

  return (
    <div className="mt-12 mb-4">
      <p className="text-xs uppercase tracking-widest text-[#888780] mb-4">The journey</p>
      <div ref={mapContainer} style={{ height: '320px', borderRadius: '4px' }} />
    </div>
  )
}