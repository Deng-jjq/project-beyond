const Pulse = ({ className = '' }) => (
  <div className={`pulse ${className}`.trim()} data-pulse>
    <span className="pulse__halo" />
    <span className="pulse__core" />
  </div>
)

export function SilenceVisual() {
  return (
    <div className="silence-visual visual-field">
      <span className="axis axis--horizontal" data-line />
      <span className="axis axis--vertical" data-line />
      <Pulse />
      <span className="coordinate coordinate--left">0.000</span>
      <span className="coordinate coordinate--right">AWAITING</span>
    </div>
  )
}

export function SignalVisual() {
  return (
    <div className="signal-visual visual-field">
      <div className="signal-grid">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} data-line />
        ))}
      </div>
      <span className="signal-scan" data-scan />
      <span className="signal-wave signal-wave--one" />
      <span className="signal-wave signal-wave--two" />
      <Pulse className="pulse--small" />
      <span className="coordinate coordinate--left">FREQ 14.8 KHZ</span>
      <span className="coordinate coordinate--right">LOCKED</span>
    </div>
  )
}

export function DepartureVisual() {
  return (
    <div className="departure-visual visual-field">
      <div className="departure-orbit" data-orbit>
        <span className="departure-orbit__echo" />
        <span className="vessel-light" data-vessel />
      </div>
    </div>
  )
}

export function WormholeVisual() {
  return (
    <div className="wormhole-visual visual-field">
      <div className="wormhole-orbit" data-orbit>
        <span className="probe" />
      </div>
      <div className="wormhole" data-wormhole>
        {Array.from({ length: 10 }, (_, index) => (
          <span
            className="wormhole__ring"
            data-ring
            key={index}
            style={{
              '--ring-index': index,
              '--ring-size': `${19 + index * 6.8}%`,
              '--ring-alpha': 0.5 - index * 0.032,
              '--ring-angle': `${index * 11}deg`,
              '--ring-scale-y': 0.72 + index * 0.025,
            }}
          />
        ))}
        <Pulse className="pulse--small" />
      </div>
    </div>
  )
}

export function SingularityVisual() {
  return (
    <div className="singularity-visual visual-field">
      <span className="accretion accretion--outer" data-orbit />
      <span className="accretion accretion--inner" data-orbit />
      <span className="singularity-core" data-singularity />
    </div>
  )
}

export function BeyondVisual() {
  return (
    <div className="beyond-visual visual-field">
      <div className="horizon-glow" data-horizon-glow />
      <span className="horizon-line" data-horizon />
      <span className="horizon-arc horizon-arc--one" data-horizon />
      <span className="horizon-arc horizon-arc--two" data-horizon />
      <Pulse className="pulse--small horizon-pulse" />
    </div>
  )
}
