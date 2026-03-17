'use client'

import * as d3 from 'd3'
import { PlanetsList } from './Constants'
import { useD3Render } from '@/hooks/useD3Render'
import Image from 'next/image'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { Orbit, PlanetPosition } from './types'

const emptySubscribe = () => () => {}

export function SolarSystemPlot({ width = 700, height = 700 }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  const orbits = PlanetsList
  const maxRadius = d3.max(orbits.map(d => d.radius))
  const animationFrameRef = useRef<number>(undefined)

  // Calculate responsive dimensions
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width, height })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width: containerWidth, height: containerHeight } =
          containerRef.current.getBoundingClientRect()
        const size = Math.min(containerWidth, containerHeight)
        setDimensions({ width: size, height: size })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Add a margin to prevent planets from reaching the edge
  const margin = 50
  const effectiveWidth = dimensions.width - margin * 2
  const effectiveHeight = dimensions.height - margin * 2

  // Use the same scale for both X and Y to ensure circular orbits
  const scale = d3
    .scaleLinear()
    .domain([-maxRadius!, maxRadius!])
    .range([
      -Math.min(effectiveWidth, effectiveHeight) / 2,
      Math.min(effectiveWidth, effectiveHeight) / 2,
    ])

  const hashString = (str: string) =>
    str.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0)

  const initializePlanetPositions = (): PlanetPosition[] => {
    const positions: PlanetPosition[] = []

    const speedMap: Record<number, number> = {
      100: 0.5,
      150: 0.4,
      200: 0.3,
      250: 0.2,
    }

    const planetsByRadius = orbits.reduce(
      (acc, planet) => {
        if (!acc[planet.radius]) {
          acc[planet.radius] = []
        }
        acc[planet.radius].push(planet)
        return acc
      },
      {} as Record<number, typeof orbits>
    )

    Object.entries(planetsByRadius).forEach(([radius, planetsInOrbit]) => {
      const numPlanets = planetsInOrbit.length
      const angleStep = (2 * Math.PI) / numPlanets
      const orbitRadius = Number(radius)
      const orbitStartAngle =
        ((hashString(`orbit-${radius}`) % 1000) / 1000) * 2 * Math.PI

      planetsInOrbit.forEach((planet, index) => {
        const angle = orbitStartAngle + index * angleStep
        const x = orbitRadius * Math.cos(angle)
        const y = orbitRadius * Math.sin(angle)

        positions.push({
          x,
          y,
          index: planet.planet,
          icon: planet.icon,
          angle,
          speed: speedMap[orbitRadius] ?? 0.3,
        })
      })
    })

    return positions
  }

  const [planets, setPlanets] = useState<PlanetPosition[]>(
    initializePlanetPositions()
  )

  useEffect(() => {
    const animate = () => {
      setPlanets((prevPlanets: PlanetPosition[]) =>
        prevPlanets.map((planet: PlanetPosition) => {
          const newAngle = planet.angle + 0.005 * planet.speed
          const orbitRadius = orbits.find(
            o => o.planet === planet.index
          )!.radius
          return {
            ...planet,
            angle: newAngle,
            x: orbitRadius * Math.cos(newAngle),
            y: orbitRadius * Math.sin(newAngle),
          }
        })
      )
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  })

  const { svgRef } = useD3Render({
    render(svg) {
      // Background circle
      svg
        .select('#background')
        .attr('r', Math.min(dimensions.width, dimensions.height) / 2)
        .attr('cx', dimensions.width / 2)
        .attr('cy', dimensions.height / 2)
        .classed('fill-foreground/5 stroke-foreground/10 stroke-2', true)

      // Orbits
      svg
        .select('#orbits')
        .selectAll<SVGCircleElement, Orbit>('circle')
        .data(orbits)
        .attr('r', d => scale(d.radius))
        .attr('cx', dimensions.width / 2)
        .attr('cy', dimensions.height / 2)
        .classed('fill-none stroke-primary/20 stroke-1', true)

      // Planets
      svg
        .select('#planets')
        .selectAll<SVGImageElement, PlanetPosition>('img')
        .data(planets)
        .attr(
          'x',
          (d: PlanetPosition) => scale(d.x) + dimensions.width / 2 - 10
        )
        .attr(
          'y',
          (d: PlanetPosition) => scale(d.y) + dimensions.height / 2 - 10
        )
        .classed('transition-transform', true)
    },
  })

  if (!mounted) {
    return (
      <div
        ref={containerRef}
        className='flex h-full w-full items-center justify-center'
        style={{ minHeight: height, minWidth: width }}
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className='flex h-full w-full items-center justify-center'
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className='h-full w-full'
      >
        <circle
          id='background'
          cx={dimensions.width / 2}
          cy={dimensions.height / 2}
          r={Math.min(dimensions.width, dimensions.height) / 2}
        ></circle>
        <g id='orbits'>
          {orbits.map(node => (
            <circle
              key={node.planet}
              cx={dimensions.width / 2}
              cy={dimensions.height / 2}
              r={scale(node.radius)}
              className='fill-none stroke-primary/40 stroke-2'
            ></circle>
          ))}
        </g>
        <g id='planets'>
          {planets.map(planet => (
            <g
              key={planet.index}
              transform={`translate(${scale(planet.x) + dimensions.width / 2}, ${scale(planet.y) + dimensions.height / 2})`}
              className='group'
            >
              <foreignObject x='-16' y='-16' width='32' height='32'>
                <Image
                  src={planet.icon}
                  width={32}
                  height={32}
                  alt={planet.index}
                  className='h-full w-full'
                />
              </foreignObject>

              <text
                x='0'
                y='30'
                className='fill-primary-foreground text-center text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100'
                textAnchor='middle'
              >
                {planet.index}
              </text>
            </g>
          ))}
        </g>
        <text
          x={dimensions.width / 2}
          y={dimensions.height / 2}
          className='fill-foreground text-center text-2xl font-bold'
          textAnchor='middle'
          dominantBaseline='middle'
        >
          Skills
        </text>
      </svg>
    </div>
  )
}

export default SolarSystemPlot
