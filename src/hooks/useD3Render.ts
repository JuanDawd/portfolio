import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

type UseD3RenderProps = {
  render: (
    svg: d3.Selection<SVGSVGElement, unknown, null, unknown>,
    g?: d3.Selection<SVGSVGElement, unknown, null, unknown>
  ) => void
  dependencies?: readonly unknown[]
}

export const useD3Render = ({ render, dependencies }: UseD3RenderProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const zoomRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const selection = d3.select(svgRef.current)

    if (zoomRef.current) {
      const zoomable = d3.select(zoomRef.current)
      render(selection, zoomable)
    } else {
      render(selection)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies ?? [])

  return { svgRef, zoomRef }
}
