"use client";

import { MouseEventHandler, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import "./AnimatedGrid.css";

const tileSize = 10; // pixels

export const AnimatedGrid = ({ children }: {
    children?: ReactNode;
}) => {

    const [numRows, setNumRows] = useState(0);
    const [numCols, setNumCols] = useState(0);

    useEffect(() => {
        const updateGrid = () => {
            const rows = Math.floor(document.documentElement.clientHeight / tileSize);
            const cols = Math.floor(document.documentElement.clientWidth / tileSize);
            setNumRows(rows);
            setNumCols(cols);
            document.documentElement.style.setProperty("--tile-size", `${tileSize}px`);
            document.documentElement.style.setProperty("--num-rows", `${rows}`);
            document.documentElement.style.setProperty("--num-cols", `${cols}`);
        };

        updateGrid();
        window.addEventListener('resize', updateGrid);
        return () => window.removeEventListener('resize', updateGrid);
    }, []);
    const handleMouseEnter = useCallback(() => {
        document.documentElement.style.setProperty("--effect-opacity", "1");
    }, []);
    const handleMouseLeave = useCallback(() => {
        document.documentElement.style.setProperty("--effect-opacity", "0");
    }, []);
    const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((event: React.MouseEvent) => {
        document.documentElement.style.setProperty("--mouse-X", `${event.clientX}px`);
        document.documentElement.style.setProperty("--mouse-Y", `${event.clientY}px`);
    }, []);

    return (
        <div id="tileSetParent"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <div id='tileSet'>
                {Array.from(Array(numRows * numCols)).map((_, i) => {
                    return (
                        <div className='tile' key={`tile${i}`} />
                    )
                })}
            </div>
            <div id='foreground-content'>
                {children}
            </div>
        </div>
    )
}