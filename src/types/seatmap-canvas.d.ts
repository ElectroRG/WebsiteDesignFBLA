declare module '@alisaitteke/seatmap-canvas-react' {
  export interface Seat {
    isSelected: () => boolean;
    select: () => void;
    unSelect: () => void;
    item: {
      salable: boolean;
    };
  }

  interface SeatmapProps {
    blocks: any[];
    config: any;
    className?: string;
    seatClick: (seat: Seat) => void;
  }

  const SeatmapCanvas: React.ComponentType<SeatmapProps>;
  export default SeatmapCanvas;
} 