import React, { useState, useMemo } from 'react';
import { Badge } from '../common/Badge';
import { SparkleDoodle, StarDoodle } from '../common/FloralAccents';

interface FeatureState {
  duration: number;      // seconds: 10 - 600
  scrollDepth: number;   // pixels: 0 - 6000
  keyCount: number;      // count: 0 - 400
  switchCount: number;   // tab switches: 0 - 20
}

export const ProdInteractiveDemo: React.FC = () => {
  const [features, setFeatures] = useState<FeatureState>({
    duration: 180,
    scrollDepth: 1200,
    keyCount: 140,
    switchCount: 2,
  });

  const loadPreset = (preset: 'deep-work' | 'social-media' | 'coding') => {
    switch (preset) {
      case 'deep-work':
        setFeatures({ duration: 420, scrollDepth: 1500, keyCount: 280, switchCount: 1 });
        break;
      case 'social-media':
        setFeatures({ duration: 90, scrollDepth: 4800, keyCount: 8, switchCount: 14 });
        break;
      case 'coding':
        setFeatures({ duration: 320, scrollDepth: 900, keyCount: 310, switchCount: 3 });
        break;
    }
  };

  // Inference logic directly implemented from prod/extension/lib/inference.js
  const inferenceResult = useMemo(() => {
    const { duration, scrollDepth, keyCount, switchCount } = features;

    // Parameter bounds established during training
    const minVals = [0, 0, 0, 0];
    const maxVals = [300, 5000, 300, 15];
    const weights = [1.85, -0.92, 3.40, -4.15];
    const bias = -0.45;
    const featureNames = ['Duration', 'Scroll Depth', 'Key Activity', 'Tab Switching'];

    const rawVals = [duration, scrollDepth, keyCount, switchCount];
    const normFeatures = rawVals.map((v, i) => {
      const denom = maxVals[i] - minVals[i];
      const clamped = Math.max(minVals[i], Math.min(v, maxVals[i]));
      return (clamped - minVals[i]) / denom;
    });

    let z = bias;
    const contributions: { name: string; value: number; raw: number; weight: number }[] = [];

    for (let i = 0; i < 4; i++) {
      const contrib = normFeatures[i] * weights[i];
      z += contrib;
      contributions.push({
        name: featureNames[i],
        value: contrib,
        raw: rawVals[i],
        weight: weights[i],
      });
    }

    // Sigmoid function
    const score = 1 / (1 + Math.exp(-z));
    const isFocused = score >= 0.5;

    // Reason resolution matching production logic
    let reason = '';
    if (isFocused) {
      const sorted = [...contributions].sort((a, b) => b.value - a.value);
      let best = sorted[0];
      if (best.name === 'Duration' && duration < 30) {
        best = sorted[1] && sorted[1].value > 0 ? sorted[1] : best;
      }
      reason = `Sustained ${best.name}`;
    } else {
      const minContrib = contributions.reduce((prev, curr) => (curr.value < prev.value ? curr : prev));
      if (minContrib.name === 'Tab Switching' && switchCount >= 5) {
        reason = 'Frequent Tab Switching';
      } else if (minContrib.name === 'Key Activity' && keyCount < 20) {
        reason = 'Low Typing Activity';
      } else if (minContrib.name === 'Scroll Depth' && scrollDepth > 3000) {
        reason = 'Rapid Feed Scrolling';
      } else {
        reason = `High ${minContrib.name} Drag`;
      }
    }

    return {
      score: Math.round(score * 100),
      label: isFocused ? 'FOCUSED' : 'DISTRACTED',
      reason,
      contributions,
    };
  }, [features]);

  return (
    <section id="interactive-lab" className="py-14 sm:py-18 border-t border-border">
      <div className="space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-rose font-medium">
                Interactive ML Playground
              </span>
              <SparkleDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal">
              Test the Browser Inference Model
            </h2>
            <p className="text-ink-muted text-sm sm:text-base max-w-2xl font-sans">
              Adjust the simulated browsing indicators below. This demo runs the actual JavaScript decision logic extracted from the <strong className="text-ink font-medium">Prod</strong> extension, calculating predictions locally in your browser.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-ink-muted mr-1">Presets:</span>
            <button
              onClick={() => loadPreset('deep-work')}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface-elevated hover:border-rose text-ink transition-colors"
            >
              ✦ Deep Work
            </button>
            <button
              onClick={() => loadPreset('social-media')}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface-elevated hover:border-rose text-ink transition-colors"
            >
              ✿ Social Media
            </button>
            <button
              onClick={() => loadPreset('coding')}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface-elevated hover:border-rose text-ink transition-colors"
            >
              ⋆ Coding
            </button>
          </div>
        </div>

        {/* Interactive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls: Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-surface-elevated border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-6">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <span className="font-mono text-xs font-medium text-ink-muted uppercase tracking-wider">
                Simulated Session Inputs
              </span>
              <span className="font-mono text-[11px] text-ink-faint">Runs 100% Client-Side</span>
            </div>

            {/* Slider 1: Duration */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Active Session Duration</span>
                <span className="text-rose font-medium">{features.duration}s ({Math.round(features.duration / 60 * 10) / 10}m)</span>
              </div>
              <input
                type="range"
                min="10"
                max="600"
                step="10"
                value={features.duration}
                onChange={(e) => setFeatures({ ...features, duration: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
            </div>

            {/* Slider 2: Key Activity */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Keystroke Count</span>
                <span className="text-rose font-medium">{features.keyCount} keystrokes</span>
              </div>
              <input
                type="range"
                min="0"
                max="400"
                step="5"
                value={features.keyCount}
                onChange={(e) => setFeatures({ ...features, keyCount: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
            </div>

            {/* Slider 3: Tab Switching */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Tab Switches</span>
                <span className="text-rose font-medium">{features.switchCount} switches</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={features.switchCount}
                onChange={(e) => setFeatures({ ...features, switchCount: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
            </div>

            {/* Slider 4: Scroll Depth */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Scroll Distance</span>
                <span className="text-rose font-medium">{features.scrollDepth} px</span>
              </div>
              <input
                type="range"
                min="0"
                max="6000"
                step="100"
                value={features.scrollDepth}
                onChange={(e) => setFeatures({ ...features, scrollDepth: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
            </div>

            <div className="pt-2 text-xs text-ink-muted font-sans border-t border-border-subtle flex items-center gap-2">
              <StarDoodle size={12} className="text-rose" />
              <span>Privacy notice: This demo only modifies local state. No personal browsing activity is measured or collected.</span>
            </div>
          </div>

          {/* Results Display (5 cols) */}
          <div className="lg:col-span-5 bg-surface-elevated border border-border rounded-3xl p-6 sm:p-8 shadow-soft flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs font-medium text-ink-muted uppercase tracking-wider">
                  Model Output
                </span>
                <span className="font-mono text-xs text-accent-green">Evaluated in RAM</span>
              </div>

              {/* Status Display Card */}
              <div
                className={`p-5 rounded-2xl border transition-colors ${
                  inferenceResult.label === 'FOCUSED'
                    ? 'bg-accent-greenSubtle/60 border-accent-green/30 text-accent-green'
                    : 'bg-rose-subtle/80 border-rose-border text-rose-dark dark:text-rose'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Result
                  </span>
                  <Badge variant={inferenceResult.label === 'FOCUSED' ? 'green' : 'rose'} size="sm">
                    Model Score: {inferenceResult.score}%
                  </Badge>
                </div>
                
                <div className="font-display text-3xl font-semibold tracking-tight">
                  {inferenceResult.label}
                </div>
                
                <div className="mt-2 text-xs font-mono flex items-center gap-1.5 pt-2 border-t border-current/15">
                  <span className="opacity-80">Primary Factor:</span>
                  <strong className="underline underline-offset-2">{inferenceResult.reason}</strong>
                </div>
              </div>

              {/* Feature Contribution Breakdown */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs text-ink-muted block">
                  Relative Feature Contributions
                </span>
                {inferenceResult.contributions.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-ink">{item.name}</span>
                      <span className={item.value >= 0 ? 'text-accent-green font-medium' : 'text-rose font-medium'}>
                        {item.value >= 0 ? `+${item.value.toFixed(2)}` : item.value.toFixed(2)}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-surface-muted rounded-full overflow-hidden flex">
                      <div
                        className={`h-full rounded-full transition-all duration-150 ${
                          item.value >= 0 ? 'bg-accent-green' : 'bg-rose'
                        }`}
                        style={{ width: `${Math.min(100, Math.abs(item.value) * 25)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-surface-muted/50 border border-border-subtle text-[11px] font-mono text-ink-muted">
              Classification logic derived from the project's compiled decision tree calculations.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
