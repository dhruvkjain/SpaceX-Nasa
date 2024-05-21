import createGlobe from "cobe";
import { useEffect, useRef } from "react";

function Home() {

    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 1100,
            height: 1100,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [22.309425, 72.136230], size: 0.1 }
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            }
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div >
            <div className="relative flex justify-center items-center">
                <canvas
                    ref={canvasRef}
                    style={{ width: 550, height: 550, maxWidth: "100%", aspectRatio: 1 }}
                />
                <p className="absolute p-1 text-6xl font-bold uppercase ">
                    SpaceX & Nasa Space Missions
                </p>
            </div>
            <p className=" p-1 text-4xl font-bold uppercase text-[#555555]">
                Launch your own mission too !!!
            </p>
        </div>
    );
}

export default Home
