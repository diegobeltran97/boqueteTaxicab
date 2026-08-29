"use client";

import { useEffect, useRef } from "react";

type Point = [number, number];

/** Animated route lines behind the hero sections. */
export function RouteCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let tick = 0;
    let frame = 0;

    function resize() {
      if (!canvas || !ctx) return;
      const ratio = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * ratio);
      canvas.height = Math.floor(rect.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function drawCurve(
      points: Point[],
      color: string,
      width: number,
      alpha: number,
    ) {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length - 2; i += 1) {
        const xc = (points[i][0] + points[i + 1][0]) / 2;
        const yc = (points[i][1] + points[i + 1][1]) / 2;
        ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
      }
      const last = points[points.length - 1];
      const prev = points[points.length - 2];
      ctx.quadraticCurveTo(prev[0], prev[1], last[0], last[1]);
      ctx.stroke();
      ctx.restore();
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      tick += 0.007;
      const drift = Math.sin(tick) * 14;

      drawCurve(
        [
          [w * 0.62, -80],
          [w * 0.76, h * 0.2],
          [w * 0.84, h * 0.58],
          [w * 0.9, h * 1.03],
        ],
        "#ffc216",
        18,
        0.12,
      );
      drawCurve(
        [
          [-120, h * 0.88],
          [w * 0.17, h * 0.78 + drift],
          [w * 0.4, h * 0.82],
          [w * 0.58, h * 1.04],
        ],
        "#36a52a",
        16,
        0.15,
      );
      drawCurve(
        [
          [w * 0.63, h * 0.36],
          [w * 0.7, h * 0.26],
          [w * 0.78, h * 0.36],
          [w * 0.84, h * 0.28],
          [w * 0.9, h * 0.38],
        ],
        "#ffc216",
        5,
        0.44,
      );
      drawCurve(
        [
          [w * 0.64, h * 0.42],
          [w * 0.72, h * 0.32],
          [w * 0.78, h * 0.42],
          [w * 0.84, h * 0.34],
          [w * 0.89, h * 0.44],
        ],
        "#36a52a",
        4,
        0.52,
      );
      frame = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="route-canvas" aria-hidden="true" />;
}
